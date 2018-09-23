using Seen.Models;
using Seen.Repositories;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Seen.Services
{
    public class SightingService
    {
        private SeenRepository seenRepository;

        public SightingService(SeenRepository seenRepository)
        {
            this.seenRepository = seenRepository;
        }

        public async Task AddSighting(string id, Sighting sighting)
        {
            var selectedUser = await seenRepository.SelectByIdAsync(id);
            selectedUser.Sightings.Add(sighting);
            await seenRepository.UpdateSightingsAsync(id, selectedUser.Sightings);
        }

        public async Task<List<LocationDTO>> ReadAllLocations()
        {
            var users = await seenRepository.SelectAllAsync();
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
            var aSzemely = await seenRepository.SelectByIdAsync(id);
            List<User> aLista = new List<User>();
            if (aSzemely.Orientation == "straight")
            {
                string genderValue = (aSzemely.UserGender == "male") ? "female" : "male";
                aLista = await seenRepository.SelectByFieldAsync("UserGender", genderValue);
            }

            if (aSzemely.Orientation == "gay")
            {
                string genderValue = (aSzemely.UserGender == "male") ? "male" : "female";
                aLista = await seenRepository.SelectByFieldAsync("UserGender", genderValue);
            }

            if (aSzemely.Orientation == "bisexual")
            {
                aLista = await seenRepository.SelectAllAsync();
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
