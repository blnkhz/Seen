using Microsoft.AspNetCore.Mvc;
using Seen.Models;
using Seen.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Seen.Controllers
{
    public class HomeController : Controller
    {
        private SightingRepository sightingRepository;
        private Answers answers;

        public HomeController(SightingRepository sightingRepository, Answers answers)
        {
            this.sightingRepository = sightingRepository;
            this.answers = answers;
        }
        [HttpGet]
        [Route("")]
        public async Task<IActionResult> Index()
        {
            var listOfSightings = await sightingRepository.SelectAll();
            return Ok(listOfSightings);
        }

        [HttpPost]
        [Route("")]
        public IActionResult Index([FromBody] Sighting sighting)
        {
            sightingRepository.Create(sighting);
            return Ok(sighting);
        }
    }
}
