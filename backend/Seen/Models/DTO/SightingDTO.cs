using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Seen.Models.DTO
{
    public class SightingDTO
    {
        public string Id { get; set; }
        public string Day { get; set; }
        public double Longitude { get; set; }
        public double Latitude { get; set; }
        public string Picture { get; set; }
        public string Message { get; set; }
        public List<MatchDTO> Matches { get; set; }
        public SightingDTO()
        {
            Matches = new List<MatchDTO>();
        }
    }
}
