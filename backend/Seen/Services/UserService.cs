using Seen.Models;
using Seen.Models.DTO;
using Seen.Repositories;
using System.Collections.Generic;
using System.Reflection;
using System.Threading.Tasks;

namespace Seen.Services
{
    public class UserService
    {
        private SeenRepository seenRepository;

        public UserService(SeenRepository seenRepository)
        {
            this.seenRepository = seenRepository;
        }

        public async Task AddUser(User user)
        {
            var newUser = seenRepository.SelectByIdAsync(user.FbId);
            if (newUser.Result == null)
            {
                await seenRepository.CreateAsync(user);
            }
        }

        public async Task DeleteUser(string fbId)
        {
            await seenRepository.DeleteAsync(fbId);
        }

        public async Task<List<User>> ReadAllUsers()
        {
            return await seenRepository.SelectAllAsync();
        }

        public async Task<User> ReadOneUser(string fbId)
        {
            return await seenRepository.SelectByIdAsync(fbId);
        }

        public async Task<ProfileDTO> ReadProfile(string fbId)
        {
            User user = await seenRepository.SelectByIdAsync(fbId);
            ProfileDTO profile = new ProfileDTO
            {
                FbId = user.FbId
            };
            for (int i = 0; i < user.Sightings.Count; i++)
            {
                profile.Sightings.Add(new SightingDTO
                {
                    Id = user.Sightings[i].Id,
                    Day = user.Sightings[i].Day
                });
                for (int j = 0; j < user.Sightings[i].HelloItsMes.Count; j++)
                {
                    profile.Sightings[i].Matches.Add(new MatchDTO
                    {
                        HelloFbId = user.Sightings[i].HelloItsMes[j].HelloFbId,
                        Message = user.Sightings[i].HelloItsMes[j].Message,
                        SocialHandle = seenRepository.SelectByIdAsync(user.Sightings[i].HelloItsMes[j].HelloFbId).Result.SocialHandle,
                        Picture = seenRepository.SelectByIdAsync(user.Sightings[i].HelloItsMes[j].HelloFbId).Result.Picture,
                    });
                }
            }
            return profile;
        }

        public async Task<List<User>> FilterUser(string field, string value)
        {
            return await seenRepository.SelectByFieldAsync(field, value);
        }

        public async Task UpdateUserWithFilter(string fbId, User user)
        {
            List<FilterJson> filters = new List<FilterJson>();
            foreach (PropertyInfo prop in user.GetType().GetProperties())
            {
                if (prop.GetValue(user) != null && prop.GetValue(user).ToString() != "" && prop.PropertyType == typeof(string))
                {
                    filters.Add(new FilterJson { Field = prop.Name.ToString(), Value = prop.GetValue(user).ToString() });
                }
            }
            await seenRepository.UpdateUserWithFilterAsync(fbId, filters);
        }
    }
}
