using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;
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
        [Route("beenseen")]
        public async Task<IActionResult> BeenSeen()
        {
            var listOfSightings = await sightingRepository.SelectAllAsync();
            return Ok(listOfSightings);
        }

        [HttpGet]
        [Route("beenseenone/{id}")]
        public async Task<IActionResult> Index(string id)
        {
            var oneOfSightings = await sightingRepository.SelectByFieldAsync(id);
            return Ok(oneOfSightings);
        }

        [HttpDelete]
        [Route("beendeleted/{id}")]
        public async Task<IActionResult> BeenDeleted(string id)
        {
            await sightingRepository.DeleteAsync(id);
            return RedirectToAction("BeenSeen");
        }

        [HttpPost]
        [Route("haveseen")]
        public async Task<IActionResult> HaveSeen([FromBody] Sighting sighting)
        {
            await sightingRepository.CreateAsync(sighting);
            return RedirectToAction("BeenSeen");
        }
    }
}
