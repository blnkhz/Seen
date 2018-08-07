using System;
using System.ComponentModel.DataAnnotations;

namespace Seen.Models
{
    public class Sighting
    {
		[Required]
        public long Id { get; set; }
        public double Longitude { get; set; }
        public double Latitude { get; set; }
        public string Day { get; set; }
        [Required]
        public string SocialHandle { get; set; }
        public string Gender { get; set; }
        public string HairColor { get; set; }
        public string HairStyle { get; set; }
        public bool Glasses { get; set; }
        public string Message { get; set; }
    }
}
