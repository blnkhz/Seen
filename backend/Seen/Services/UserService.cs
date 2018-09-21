using Seen.Models;
using Seen.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
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

        public async Task AddUser(User user)
        {
            var newUser = userRepository.SelectByIdAsync(user.FbId);
            if (newUser.Result == null)
            {
                await userRepository.CreateAsync(user);
            }
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

        public async Task AddHelloItsMe(string id, HelloItsMe helloItsMe)
        {
            var allUsers = await userRepository.SelectAllAsync();
            string selectedUsersId = null;
            int sightingIndex = 0;
            for (int i = 0; i < allUsers.Count; i++)
            {
                for (int j = 0; j < allUsers[i].Sightings.Count; j++)
                {
                    if (allUsers[i].Sightings[j].HelloItsMes.Count == 0)
                    {
                        if (id == allUsers[i].Sightings[j].Id.ToString())
                        {
                            selectedUsersId = allUsers[i].FbId.ToString();
                            sightingIndex = j;
                        }
                    }
                    else
                    {
                        for (int k = 0; k < allUsers[i].Sightings[j].HelloItsMes.Count; k++)
                        {
                            if (allUsers[i].Sightings[j].HelloItsMes[k].SocialHandle == helloItsMe.SocialHandle && id == allUsers[i].Sightings[j].Id.ToString())
                            {
                                selectedUsersId = null;
                                break;
                            }
                            if (id == allUsers[i].Sightings[j].Id.ToString())
                            {
                                selectedUsersId = allUsers[i].FbId.ToString();
                                sightingIndex = j;
                            }
                        }
                    }
                }
            }
            await userRepository.UpdateHelloItsMeAsync(selectedUsersId, sightingIndex, helloItsMe);
        }

        public async Task UpdateUserWithFilter(string id, User user)
        {
            List<FilterJson> filterszek = new List<FilterJson>();
            foreach (PropertyInfo prop in user.GetType().GetProperties())
            {
                if (prop.GetValue(user) != null && prop.GetValue(user).ToString() != "" && prop.PropertyType == typeof(string))
                {
                    filterszek.Add(new FilterJson { Field = prop.Name.ToString(), Value = prop.GetValue(user).ToString() });
                }
            }
            await userRepository.UpdateUserWithFilterAsync(id, filterszek);
        }

        public async Task<List<LocationDTO>> ReadAllLocations()
        {
            var users = await userRepository.SelectAllAsync();
            List<LocationDTO> locations = new List<LocationDTO>();
            for (int i = 0; i < users.Count; i++)
            {
                for (int j = 0; j < users[i].Sightings.Count; j++)
                {
                    locations.Add(new LocationDTO { Latitude = users[i].Sightings[j].Latitude, Longitude = users[i].Sightings[j].Longitude });
                }
            }
            return locations;
        }

        public async Task<List<Sighting>> Finder(string id)
        {
            var aSzemely = await userRepository.SelectByIdAsync(id);
            List<User> aLista = new List<User>();
            if (aSzemely.Orientation == "straight")
            {
                string genderValue = (aSzemely.UserGender == "male") ? "female" : "male";
                aLista = await userRepository.SelectByFieldAsync("UserGender", genderValue);
            }

            if (aSzemely.Orientation == "gay")
            {
                string genderValue = (aSzemely.UserGender == "male") ? "male" : "female";
                aLista = await userRepository.SelectByFieldAsync("UserGender", genderValue);
            }

            if (aSzemely.Orientation == "bisexual")
            {
                aLista = await userRepository.SelectAllAsync();
            }

            var users = new List<Sighting>();
            for (int i = 0; i < aLista.Count; i++)
            {

                for (int j = 0; j < aLista[i].Sightings.Count; j++)
                {
                    int realmatch = MatchMeister(aSzemely, aLista[i].Sightings[j]);
                    if (realmatch >= 4 && aSzemely.Email != aLista[i].Email)
                    {
                        users.Add(aLista[i].Sightings[j]);
                    }
                }
            }
            return users;
        }

        public int MatchMeister(User user, Sighting sighting)
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
