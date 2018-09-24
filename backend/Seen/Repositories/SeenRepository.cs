using MongoDB.Bson;
using MongoDB.Driver;
using Seen.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Seen.Repositories
{
    public class SeenRepository
    {
        private IMongoClient client;
        private IMongoDatabase database;
        private IMongoCollection<User> users;

        public SeenRepository()
        {
			client = new MongoClient("mongodb://localhost:27017");
            database = client.GetDatabase("Seen");
            users = database.GetCollection<User>("Users");
        }

        public async Task CreateAsync(User user)
        {
            await users.InsertOneAsync(user);
        }

        public async Task DeleteAsync(string id)
        {
            var filter = Builders<User>.Filter.Eq("FbId", id);
            await users.DeleteOneAsync(filter);
        }

        public async Task<List<User>> SelectAllAsync()
        {
            return await users.Find(new BsonDocument()).ToListAsync();
        }

        public async Task<User> SelectByIdAsync(string id)
        {
            var filter = Builders<User>.Filter.Eq("FbId", id);
            var result = await users.Find(filter).FirstOrDefaultAsync();
            return result;
        }

        public async Task<List<User>> SelectByFieldAsync(string field, string value)
        {
            var filter = Builders<User>.Filter.Eq(field, value);
            return await users.Find(filter).ToListAsync();
        }

        public async Task UpdateSightingsAsync(string id, List<Sighting> sightings)
        {
            var filter = Builders<User>.Filter.Eq("FbId", id);
            var update = Builders<User>.Update.Set("Sightings", sightings);

            var result = await users.UpdateOneAsync(filter, update);
        }

        public async Task UpdateHelloItsMeAsync(string id, int sightingIndex, HelloItsMe helloItsMe)
        {
            var filter = Builders<User>.Filter.Eq("FbId", id);
            var update = Builders<User>.Update.AddToSet(items => items.Sightings[sightingIndex].HelloItsMes, helloItsMe);

            var result = await users.UpdateOneAsync(filter, update);
        }

        public async Task UpdateUserWithFilterAsync(string id, List<FilterJson> filters)
        {
            var filter = Builders<User>.Filter.Eq("FbId", id);
            for (int i = 0; i < filters.Count; i++)
            {
                var update = Builders<User>.Update.Set(filters[i].Field, filters[i].Value);
                var result = await users.UpdateOneAsync(filter, update);
            }
        }
    }
}
