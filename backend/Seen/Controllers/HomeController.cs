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

        public HomeController(SightingRepository sightingRepository)
        {
            this.sightingRepository = sightingRepository;
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
        public async Task<IActionResult> SearchById(string id)
        {
            var oneOfSightings = await sightingRepository.SelectByIdAsync(id);
            return Ok(oneOfSightings.Id.ToString());
        }

        [HttpPost]
        [Route("beenseensome")]
        public async Task<IActionResult> SearchByField([FromBody] FilterJson filter)
        {
            var resultOfSightings = await sightingRepository.SelectByFieldAsync(filter.Field, filter.Value);
            return Ok(resultOfSightings);
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
        public async Task<IActionResult> HaveSeen([FromBody] User user)
        {
            await sightingRepository.CreateAsync(user);
            return RedirectToAction("BeenSeen");
        }
    }
}
