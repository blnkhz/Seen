using Microsoft.Extensions.Options;
using MongoDB.Bson;
using MongoDB.Driver;
using Seen.Entities;
using Seen.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Seen.Repositories
{
    public class SeenRepository
    {
        private IMongoClient client;
        private IMongoDatabase database;
        private IMongoCollection<User> users;

        public SeenRepository(IOptions<AppSettings> appSettings)
        {
            client = new MongoClient(appSettings.Value.ConnectionString);
            database = client.GetDatabase("Seen");
            users = database.GetCollection<User>("Users");
        }

        public async Task CreateAsync(User user)
        {
            await users.InsertOneAsync(user);
        }

        public async Task DeleteAsync(string fbId)
        {
            var filter = Builders<User>.Filter.Eq("FbId", fbId);
            await users.DeleteOneAsync(filter);
        }

        public async Task<List<User>> SelectAllAsync()
        {
            return await users.Find(new BsonDocument()).ToListAsync();
        }

        public async Task<User> SelectByIdAsync(string fbId)
        {
            var filter = Builders<User>.Filter.Eq("FbId", fbId);
            var result = await users.Find(filter).FirstOrDefaultAsync();
            return result;
        }

        public async Task<List<User>> SelectByFieldAsync(string field, string value)
        {
            var filter = Builders<User>.Filter.Eq(field, value);
            return await users.Find(filter).ToListAsync();
        }

        public async Task UpdateSightingsAsync(string fbId, List<Sighting> sightings)
        {
            var filter = Builders<User>.Filter.Eq("FbId", fbId);
            var update = Builders<User>.Update.Set("Sightings", sightings);
            var result = await users.UpdateOneAsync(filter, update);
        }

        public async Task UpdateHelloItsMeAsync(string fbId, int sightingIndex, HelloItsMe helloItsMe)
        {
            var filter = Builders<User>.Filter.Eq("FbId", fbId);
            var update = Builders<User>.Update.AddToSet(items => items.Sightings[sightingIndex].HelloItsMes, helloItsMe);
            var result = await users.UpdateOneAsync(filter, update);
        }

        public async Task RemoveSightingAsync(string fbId, string sId)
        {
            var filter = new BsonDocument("FbId", fbId);
            var update = Builders<User>.Update.PullFilter("Sightings", Builders<Sighting>.Filter.Eq("_id", sId));
            await users.FindOneAndUpdateAsync(filter, update);
        }

        public async Task RemoveHelloItsMeAsync(string fbId, string sId, List<HelloItsMe> hellos)
        {
            await users.UpdateOneAsync(x => x.FbId == fbId,
            Builders<User>.Update.Set("Sightings.$[g].HelloItsMes", hellos),
            new UpdateOptions
            {
                ArrayFilters = new List<ArrayFilterDefinition>
                {
                    new BsonDocumentArrayFilterDefinition<BsonDocument>(new BsonDocument("g._id", sId))
                }
            });
        }

        public async Task UpdateUserWithFilterAsync(string fbId, List<FilterJson> filters)
        {
            var filter = Builders<User>.Filter.Eq("FbId", fbId);
            for (int i = 0; i < filters.Count; i++)
            {
                var update = Builders<User>.Update.Set(filters[i].Field, filters[i].Value);
                var result = await users.UpdateOneAsync(filter, update);
            }
        }
    }
}
