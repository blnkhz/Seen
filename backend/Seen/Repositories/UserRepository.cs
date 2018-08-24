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
        private IMongoCollection<User> sightings;

        public UserRepository()
        {
            client = new MongoClient("mongodb://localhost:27017/");
            database = client.GetDatabase("Seen");
            sightings = database.GetCollection<User>("Users");
        }

        public async Task CreateAsync(User sighting)
        {
            await sightings.InsertOneAsync(sighting);
        }

        public async Task DeleteAsync(string id)
        {
            var filter = Builders<User>.Filter.Eq("Id", new ObjectId(id));
            await sightings.DeleteOneAsync(filter);
        }

        public async Task<List<User>> SelectAllAsync()
        {
            return await sightings.Find(new BsonDocument()).ToListAsync();
        }

        public async Task<User> SelectByIdAsync(string id)
        {
            var filter = Builders<User>.Filter.Eq("Id", new ObjectId(id));
            return await sightings.Find(filter).FirstOrDefaultAsync();
        }

        public async Task<List<User>> SelectByFieldAsync(string field, string value)
        {
            var filter = Builders<User>.Filter.Eq(field, value);
            return await sightings.Find(filter).ToListAsync();
        }

        public Task UpdateAsync(User item)
        {
            throw new NotImplementedException();
        }

        public List<User> Finder ()
        {
            var aLista = sightings.Find(new BsonDocument()).ToList();
            var results = new List<User>();
            for (int i = 0; i < aLista.Count; i++)
            {

                    for (int j = 0; j < aLista[i].Sightings.Count; j++)
                    {
                        if (aLista[i].UserGender == aLista[i].Sightings[j].Gender && aLista[0].UserHairColor == aLista[i].Sightings[j].HairColor && aLista[0].UserHairStyle == aLista[i].Sightings[j].HairStyle)
                        {
                            results.Add(aLista[i]);
                        }
                    }
            }
            return results;
        }
    }
}
