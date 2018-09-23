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

        public async Task DeleteUser(string id)
        {
            await seenRepository.DeleteAsync(id);
        }

        public async Task<List<User>> ReadAllUsers()
        {
            return await seenRepository.SelectAllAsync();
        }

        public async Task<User> ReadOneUser(string id)
        {
            return await seenRepository.SelectByIdAsync(id);
        }

        public async Task<List<User>> FilterUser(string field, string value)
        {
            return await seenRepository.SelectByFieldAsync(field, value);
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
            await seenRepository.UpdateUserWithFilterAsync(id, filterszek);
        }
    }
}
