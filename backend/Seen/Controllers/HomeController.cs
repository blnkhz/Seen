using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;
using Seen.Models;
using Seen.Repositories;
using Seen.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Seen.Controllers
{
    public class HomeController : Controller
    {
        private UserService userService;

        public HomeController(UserService userService)
        {
            this.userService = userService;
        }

        [HttpGet]
        [Route("beenseen")]
        public async Task<IActionResult> BeenSeen()
        {
            var listOfSightings = await userService.ReadAllUsers();
            return Ok(listOfSightings);
        }

        [HttpGet]
        [Route("beenseenone/{id}")]
        public async Task<IActionResult> SearchById(string id)
        {
            var oneOfSightings = await userService.ReadOneUser(id);
            return Ok(oneOfSightings.Id.ToString());
        }

        [HttpPost]
        [Route("beenseensome")]
        public async Task<IActionResult> SearchByField([FromBody] FilterJson filter)
        {
            var resultOfSightings = await userService.FilterUser(filter.Field, filter.Value);
            return Ok(resultOfSightings);
        }

        [HttpDelete]
        [Route("beendeleted/{id}")]
        public async Task<IActionResult> BeenDeleted(string id)
        {
            await userService.DeleteUser(id);
            return RedirectToAction("BeenSeen");
        }

        [HttpPost]
        [Route("AddUser")]
        public async Task<IActionResult> AddUser([FromBody] User user)
        {
            await userService.AddUser(user);
            return RedirectToAction("BeenSeen");
        }

        [HttpGet]
        [Route("findmyonlyonetruepair/{id}")]
        public IActionResult FindThem(string id)
        {
            return Ok(userService.Finder(id));
        }

        [HttpPost]
        [Route("haveseen/{id}")]
        public async Task<IActionResult> HaveSeen([FromRoute] string id, [FromBody]Sighting sighting)
        {
            await userService.AddSighting(id, sighting);
            return Ok(sighting);
        }
    }
}
