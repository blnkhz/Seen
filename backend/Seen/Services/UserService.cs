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
            var aSzemely = await userRepository.SelectByIdAsync(id);
            List<User> aLista = new List<User>();
            if (aSzemely.Orientation == "Heterosexual")
            {
                string genderValue;
                genderValue = (aSzemely.UserGender == "Male") ? "Female" : "Male";
                aLista = await userRepository.SelectByFieldAsync("UserGender", genderValue);
            }

            if (aSzemely.Orientation == "Homosexual")
            {
                string genderValue;
                genderValue = (aSzemely.UserGender == "Male") ? "Male" : "Female";
                aLista = await userRepository.SelectByFieldAsync("UserGender", genderValue);
            }

            if (aSzemely.Orientation == "Bisexual")
            {
                aLista = await userRepository.SelectAllAsync();
            }

            var results = new List<User>();
            for (int i = 0; i < aLista.Count; i++)
            {

                for (int j = 0; j < aLista[i].Sightings.Count; j++)
                {
                    int realmatch = await MatchMeister(aSzemely, aLista[i].Sightings[j]);
                    if (realmatch == 3 && aSzemely.Email != aLista[i].Email)
                    {
                        results.Add(aLista[i]);
                    }
                }
            }
            return results;
        }

        public async Task<int> MatchMeister (User user, Sighting sighting)
        {
            int count = 0;
            if (user.UserHairColor == sighting.HairColor)
            {
                count++;
            }
            if (user.UserHairStyle == sighting.HairStyle)
            {
                count++;
            }
            if (user.UserGender == sighting.Gender)
            {
                count++;
            }
            return count;
        }
    }
}
