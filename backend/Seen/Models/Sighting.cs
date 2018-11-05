using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System.Collections.Generic;

namespace Seen.Models
{
    public class Sighting
    {
        [BsonId]
        public string Id { get; set; }
        [BsonElement("Longitude")]
        public double Longitude { get; set; }
        [BsonElement("Latitude")]
        public double Latitude { get; set; }
        [BsonElement("Day")]
        public string Day { get; set; }
        [BsonElement("Gender")]
        public string Gender { get; set; }
        [BsonElement("HairColor")]
        public string HairColor { get; set; }
        [BsonElement("HairStyle")]
        public string HairStyle { get; set; }
        [BsonElement("Glasses")]
        public string Glasses { get; set; }
        [BsonElement("Height")]
        public string Height { get; set; }
        [BsonElement("Build")]
        public string Build { get; set; }
        [BsonElement("Age")]
        public string Age { get; set; }
        [BsonElement("Message")]
        public string Message { get; set; }
        [BsonElement("HelloItsMes")]
        public List<HelloItsMe> HelloItsMes { get; set; }
        public Sighting()
        {
            Id = ObjectId.GenerateNewId().ToString();
            HelloItsMes = new List<HelloItsMe>();
        }
    }
}
