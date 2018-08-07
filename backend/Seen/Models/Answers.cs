using System;
using System.Collections.Generic;

namespace Seen.Models
{
    public class Answers
    {
		public List<string> hairColors = new List<string>()
        {
            "Brown", "Blonde", "Black", "Red", "Grey", "Special", "Salt & Pepper"
        };

        public List<string> hairStyles = new List<string>()
        {
            "Bald","Short", "Medium", "Long"
        };

        public List<string> genders = new List<string>()
        {
            "Male", "Female", "Other"
        };
    }
}
