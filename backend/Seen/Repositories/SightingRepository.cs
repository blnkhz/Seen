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
    public class SightingRepository 
    {
        private IMongoClient client;
        private IMongoDatabase database;
        private IMongoCollection<Sighting> sightings;

        public SightingRepository()
        {
            client = new MongoClient("mongodb://localhost:27017/");
            database = client.GetDatabase("Seen");
            sightings = database.GetCollection<Sighting>("Sightings");
        }

        public async Task CreateAsync(Sighting sighting)
        {
            await sightings.InsertOneAsync(sighting);
        }

        public async Task DeleteAsync(string id)
        {
            var filter = Builders<Sighting>.Filter.Eq("Id", new ObjectId(id));
            await sightings.DeleteOneAsync(filter);
        }

        public async Task<List<Sighting>> SelectAllAsync()
        {
            return await sightings.Find(new BsonDocument()).ToListAsync();
        }

        public async Task<Sighting> SelectByIdAsync(string id)
        {
            var filter = Builders<Sighting>.Filter.Eq("Id", new ObjectId(id));
            return await sightings.Find(filter).FirstOrDefaultAsync();
        }

        public async Task<List<Sighting>> SelectByFieldAsync(string field, string value)
        {
            var filter = Builders<Sighting>.Filter.Eq(field, value);
            return await sightings.Find(filter).ToListAsync();
        }

        public Task UpdateAsync(Sighting item)
        {
            throw new NotImplementedException();
        }
    }
}
