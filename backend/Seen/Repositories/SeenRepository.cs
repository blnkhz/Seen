﻿using Microsoft.Extensions.Options;
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
<<<<<<< HEAD:backend/Seen/Repositories/SeenRepository.cs
			client = new MongoClient(appSettings.Value.ConnectionString);
=======
			      client = new MongoClient("mongodb://mablape:numman77@18.216.102.17:27017");
>>>>>>> language:backend/Seen/Repositories/UserRepository.cs
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

        public async Task RemoveSightingAsync(string fbId, string sId)
        {
            var filter = new BsonDocument("FbId", fbId);
            var update = Builders<User>.Update.PullFilter("Sightings", Builders<Sighting>.Filter.Eq("_id", sId));
            await users.FindOneAndUpdateAsync(filter, update);
        }

        public async Task RemoveHelloItsMeAsync(string id, string sId, string socialHandle, List<HelloItsMe> hellos)
        {
            await users.UpdateOneAsync(x => x.FbId == id,
    Builders<User>.Update.Set("Sightings.$[g].HelloItsMes", hellos),
    new UpdateOptions
    {
        ArrayFilters = new List<ArrayFilterDefinition>
        {
            new BsonDocumentArrayFilterDefinition<BsonDocument>(new BsonDocument("g._id", sId))
        }
    });
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
