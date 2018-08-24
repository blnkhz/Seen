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
        private UserRepository userRepository;

        public HomeController(UserRepository userRepository)
        {
            this.userRepository = userRepository;
        }
        [HttpGet]
        [Route("beenseen")]
        public async Task<IActionResult> BeenSeen()
        {
            var listOfSightings = await userRepository.SelectAllAsync();
            return Ok(listOfSightings);
        }

        [HttpGet]
        [Route("beenseenone/{id}")]
        public async Task<IActionResult> SearchById(string id)
        {
            var oneOfSightings = await userRepository.SelectByIdAsync(id);
            return Ok(oneOfSightings.Id.ToString());
        }

        [HttpPost]
        [Route("beenseensome")]
        public async Task<IActionResult> SearchByField([FromBody] FilterJson filter)
        {
            var resultOfSightings = await userRepository.SelectByFieldAsync(filter.Field, filter.Value);
            return Ok(resultOfSightings);
        }

        [HttpDelete]
        [Route("beendeleted/{id}")]
        public async Task<IActionResult> BeenDeleted(string id)
        {
            await userRepository.DeleteAsync(id);
            return RedirectToAction("BeenSeen");
        }

        [HttpPost]
        [Route("haveseen")]
        public async Task<IActionResult> HaveSeen([FromBody] User user)
        {
            await userRepository.CreateAsync(user);
            return RedirectToAction("BeenSeen");
        }

        [HttpGet]
        [Route("findmyonlyonetruepair")]
        public IActionResult FindThem ()
        {
            return Ok(userRepository.Finder());
        }
    }
}
