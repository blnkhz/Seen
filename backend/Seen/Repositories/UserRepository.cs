using MongoDB.Bson;
using MongoDB.Driver;
using Seen.Interfaces;
using Seen.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Seen.Repositories
{
    public class UserRepository
    {
        private IMongoClient client;
        private IMongoDatabase database;
        private IMongoCollection<User> users;

        public UserRepository()
        {
            client = new MongoClient("mongodb://localhost:27017/");
            database = client.GetDatabase("Seen");
            users = database.GetCollection<User>("Users");
        }

        public async Task CreateAsync(User sighting)
        {
            await users.InsertOneAsync(sighting);
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

        public async Task UpdateSightingsAsync(string id, List<Sighting> sightingsok)
        {
            var filter = Builders<User>.Filter.Eq("FbId", id);
            var update = Builders<User>.Update.Set("Sightings", sightingsok);

            var result = await users.UpdateOneAsync(filter, update);
        }
        public async Task UpdateUserWithFilterAsync(string id, List<FilterJson> filterszek)
        {
            var filter = Builders<User>.Filter.Eq("FbId", id);
            for (int i = 0; i < filterszek.Count; i++)
            {
                var update = Builders<User>.Update.Set(filterszek[i].Field, filterszek[i].Value);
                var result = await users.UpdateOneAsync(filter, update);
            }
        }

        public async Task UpdateUserAsync(string id, User user)
        {
            var filter = Builders<User>.Filter.Eq("FbId", id);
            var update = Builders<User>.Update.Set("UserHairColor", user.UserHairColor);
            var result = await users.UpdateOneAsync(filter, update);
        }

    }
}
