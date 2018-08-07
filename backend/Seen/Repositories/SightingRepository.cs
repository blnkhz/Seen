using MongoDB.Bson;
using MongoDB.Driver;
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

        public async Task Create(Sighting sighting)
        {
            await sightings.InsertOneAsync(sighting);
        }

        public async Task<List<Sighting>> SelectAll()
        {
            return await sightings.Find(new BsonDocument()).ToListAsync();
        }
    }
}
