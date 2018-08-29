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

        public async Task AddSighting(string id, Sighting sighting)
        {
            var selectedUser = await userRepository.SelectByIdAsync(id);
            selectedUser.Sightings.Add(sighting);
            await userRepository.UpdateSightingsAsync(id, selectedUser.Sightings);
        }

        public async Task UpdateUser (string id, List<FilterJson> filterszek)
        {
            await userRepository.UpdateUserAsync(id, filterszek); 
        }

        public async Task<List<User>> Finder(string id)
        {
            var aSzemely = await userRepository.SelectByIdAsync(id);
            List<User> aLista = new List<User>();
            if (aSzemely.Orientation == "Heterosexual")
            {
                string genderValue = (aSzemely.UserGender == "Male") ? "Female" : "Male";
                aLista = await userRepository.SelectByFieldAsync("UserGender", genderValue);
            }

            if (aSzemely.Orientation == "Homosexual")
            {
                string genderValue = (aSzemely.UserGender == "Male") ? "Male" : "Female";
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
                    if (realmatch >= 4 && aSzemely.Email != aLista[i].Email)
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
            count = (user.UserHairColor == sighting.HairColor) ? count + 1 : count;
            count = (user.UserHairStyle == sighting.HairStyle) ? count + 1 : count;
            count = (user.UserGlasses == sighting.Glasses) ? count + 1 : count;
            count = (user.UserHeight == sighting.Height) ? count + 1 : count;
            count = (user.UserBuild == sighting.Build) ? count + 1 : count;
            count = (user.UserAge == sighting.Age) ? count + 1 : count;
            return count;
        }
    }
}
