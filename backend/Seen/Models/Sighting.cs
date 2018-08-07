using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.ComponentModel.DataAnnotations;

namespace Seen.Models
{
    public class Sighting
    {
        [BsonId]
        public ObjectId Id { get; set; }
        [BsonElement("Longitude")]
        public double Longitude { get; set; }
        [BsonElement("Latitude")]
        public double Latitude { get; set; }
        [BsonElement("Day")]
        public string Day { get; set; }
        [BsonElement("SocialHandle")]
        public string SocialHandle { get; set; }
        [BsonElement("Gender")]
        public string Gender { get; set; }
        [BsonElement("HairColor")]
        public string HairColor { get; set; }
        [BsonElement("HairStyle")]
        public string HairStyle { get; set; }
        [BsonElement("Glasses")]
        public bool Glasses { get; set; }
        [BsonElement("Message")]
        public string Message { get; set; }
    }
}
