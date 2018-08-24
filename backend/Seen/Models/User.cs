using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Seen.Models
{
    public class User
    {
        [BsonId]
        public ObjectId Id { get; set; }
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
        [BsonElement("Sightings")]
        public List<Sighting> Sightings { get; set; }
    }
}
