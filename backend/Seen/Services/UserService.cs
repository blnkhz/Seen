using Seen.Models;
using Seen.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Seen.Services
{
    public class UserService
    {
        private UserRepository userRepository;

        public UserService(UserRepository userRepository)
        {
            this.userRepository = userRepository;
        }

        public async Task AddUser(User sighting)
        {
            await userRepository.CreateAsync(sighting);
        }

        public async Task DeleteUser(string id)
        {
            await userRepository.DeleteAsync(id);
        }

        public async Task<List<User>> ReadAllUsers()
        {
            return await userRepository.SelectAllAsync();
        }

        public async Task<User> ReadOneUser(string id)
        {
            return await userRepository.SelectByIdAsync(id);
        }

        public async Task<List<User>> FilterUser(string field, string value)
        {
            return await userRepository.SelectByFieldAsync(field, value);
        }

        public async Task<List<User>> Finder(string id)
        {
            var aLista = await userRepository.SelectAllAsync();
            var aSzemely = await userRepository.SelectByIdAsync(id);
            var results = new List<User>();
            for (int i = 0; i < aLista.Count; i++)
            {

                for (int j = 0; j < aLista[i].Sightings.Count; j++)
                {
                    if (aSzemely.UserGender == aLista[i].Sightings[j].Gender && aSzemely.UserHairColor == aLista[i].Sightings[j].HairColor && aSzemely.UserHairStyle == aLista[i].Sightings[j].HairStyle && aSzemely.Email != aLista[i].Email)
                    {
                        results.Add(aLista[i]);
                    }
                }
            }
            return results;
        }
    }
}
