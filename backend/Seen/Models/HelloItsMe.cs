using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Seen.Models
{
    public class HelloItsMe
    {
        [BsonElement("SocialHandle")]
        public string SocialHandle { get; set; }
        [BsonElement("Picture")]
        public string Picture{ get; set; }
        [BsonElement("Message")]
        public string Message { get; set; }
}
}
