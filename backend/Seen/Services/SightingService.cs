using Seen.Models;
using Seen.Models.DTO;
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

        public async Task AddSighting(string fbId, Sighting sighting)
        {
            var selectedUser = await seenRepository.SelectByIdAsync(fbId);
            if (selectedUser.Sightings.Count < 10)
            {
                selectedUser.Sightings.Add(sighting);
                await seenRepository.UpdateSightingsAsync(fbId, selectedUser.Sightings);
            }
        }

        public async Task RemoveSighting (string fbId, string sId)
        {
            await seenRepository.RemoveSightingAsync(fbId, sId);
        }

        public async Task<List<Location>> ReadAllLocations()
        {
            var users = await seenRepository.SelectAllAsync();
            List<Location> locations = new List<Location>();
            for (int i = 0; i < users.Count; i++)
            {
                for (int j = 0; j < users[i].Sightings.Count; j++)
                {
                    locations.Add(new Location { Latitude = users[i].Sightings[j].Latitude, Longitude = users[i].Sightings[j].Longitude });
                }
            }
            return locations;
        }
        public async Task<List<SightingDTO>> MatchFinder(string fbId)
        {
            var selectedUser = await seenRepository.SelectByIdAsync(fbId);
            List<User> possibleSightings = new List<User>();
            if (selectedUser.Orientation == "straight")
            {
                string genderValue = (selectedUser.UserGender == "male") ? "female" : "male";
                possibleSightings = await seenRepository.SelectByFieldAsync("UserGender", genderValue);
            }

            if (selectedUser.Orientation == "gay")
            {
                string genderValue = (selectedUser.UserGender == "male") ? "male" : "female";
                possibleSightings = await seenRepository.SelectByFieldAsync("UserGender", genderValue);
            }

            if (selectedUser.Orientation == "bisexual")
            {
                possibleSightings = await seenRepository.SelectAllAsync();
            }

            var filteredSightings = new List<SightingDTO>();
            for (int i = 0; i < possibleSightings.Count; i++)
            {
                for (int j = 0; j < possibleSightings[i].Sightings.Count; j++)
                {
                    int realmatch = MatchMeister(selectedUser, possibleSightings[i].Sightings[j]);
                    if (realmatch >= 4 && selectedUser.Email != possibleSightings[i].Email)
                    {
                        filteredSightings.Add( new SightingDTO
                        {
                            Id = possibleSightings[i].Sightings[j].Id,
                            Longitude = possibleSightings[i].Sightings[j].Longitude,
                            Latitude = possibleSightings[i].Sightings[j].Latitude,
                            Day = possibleSightings[i].Sightings[j].Day,
                            Picture = possibleSightings[i].Picture,
                            Message = possibleSightings[i].Sightings[j].Message

                        });
                    }
                }
            }
            return filteredSightings;
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
