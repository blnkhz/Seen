﻿using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

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
		[BsonElement("Picture")]
        public string Picture { get; set; }
        [BsonElement("Message")]
        public string Message { get; set; }
        [BsonElement("HelloItsMes")]
        public List<HelloItsMe> HelloItsMes { get; set; }

        public Sighting()
        {
            Id = ObjectId.GenerateNewId();
            HelloItsMes = new List<HelloItsMe>();
        }
    }
}
