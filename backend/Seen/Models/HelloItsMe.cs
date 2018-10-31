using MongoDB.Bson.Serialization.Attributes;

namespace Seen.Models
{
    public class HelloItsMe
    {
        [BsonElement("HelloFbId")]
        public string HelloFbId { get; set; }
        [BsonElement("Message")]
        public string Message { get; set; }
    }
}
