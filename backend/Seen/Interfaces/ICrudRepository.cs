using MongoDB.Bson;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Seen.Interfaces
{
    public interface ICrudRepository<T> where T : class
    {
        Task CreateAsync(T item);
        Task<List<T>> SelectAllAsync();
        Task UpdateAsync(T item);
        Task DeleteAsync(string id);
        Task<T> SelectByFieldAsync(string id);
    }
}
