using MongoDB.Bson.Serialization.Attributes;

namespace Seen.Models
{
    public class HelloItsMe
    {
        [BsonElement("FbId")]
        public string FbId { get; set; }
        [BsonElement("SocialHandle")]
        public string SocialHandle { get; set; }
        [BsonElement("Picture")]
        public string Picture{ get; set; }
        [BsonElement("Message")]
        public string Message { get; set; }
}
}
