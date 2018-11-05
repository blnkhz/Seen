using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Seen.Models.DTO
{
    public class ProfileDTO
    {
        public string FbId { get; set; }
        public List<SightingDTO> Sightings { get; set; }
        public ProfileDTO()
        {
            Sightings = new List<SightingDTO>();
        }
    }
}
