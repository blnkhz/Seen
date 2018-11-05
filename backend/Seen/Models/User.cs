using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System.Collections.Generic;

namespace Seen.Models
{
    public class User
    {
        [BsonId]
        public ObjectId Id { get; set; }
        [BsonElement("FbId")]
        public string FbId { get; set; }
        [BsonElement("Email")]
        public string Email { get; set; }
        [BsonElement("SocialHandle")]
        public string SocialHandle { get; set; }
        [BsonElement("UserGender")]
        public string UserGender { get; set; }
        [BsonElement("UserHairColor")]
        public string UserHairColor { get; set; }
        [BsonElement("UserHairStyle")]
        public string UserHairStyle { get; set; }
        [BsonElement("UserGlasses")]
        public string UserGlasses { get; set; }
        [BsonElement("UserHeight")]
        public string UserHeight { get; set; }
        [BsonElement("UserBuild")]
        public string UserBuild { get; set; }
        [BsonElement("UserAge")]
        public string UserAge { get; set; }
        [BsonElement("Orientation")]
        public string Orientation { get; set; }
        [BsonElement("Picture")]
        public string Picture { get; set; }
        [BsonElement("Sightings")]
        public List<Sighting> Sightings { get; set; }
        public User()
        {
            Sightings = new List<Sighting>();
        }
    }
}
