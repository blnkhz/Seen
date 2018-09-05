using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;
using Seen.Models;
using Seen.Repositories;
using Seen.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
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
        [Route("getuser/{id}")]
        public async Task<IActionResult> SearchById(string id)
        {
            var oneOfSightings = await userService.ReadOneUser(id);
            return Ok(oneOfSightings);
        }

        [HttpPost]
        [Route("filterusers")]
        public async Task<IActionResult> SearchByField([FromBody] FilterJson filter)
        {
            var resultOfSightings = await userService.FilterUser(filter.Field, filter.Value);
            return Ok(resultOfSightings);
        }

        [HttpDelete]
        [Route("deleteuser/{id}")]
        public async Task<IActionResult> BeenDeleted(string id)
        {
            await userService.DeleteUser(id);
            return RedirectToAction("BeenSeen");
        }

        [HttpPost]
        [Route("adduser")]
        public async Task<IActionResult> AddUser([FromBody] User user)
        {
            await userService.AddUser(user);
            return RedirectToAction("BeenSeen");
        }

        [HttpGet]
        [Route("matchfilter/{id}")]
        public async Task<IActionResult> FindThem(string id)
        {
            var foundIt = await userService.Finder(id);
            return Ok(foundIt);
        }

        [HttpGet]
        [Route("loginmap")]
        public async Task<IActionResult> LoginMap ()
        {
            var locations = await userService.ReadAllLocations();
            return Ok(locations);
        }

        [HttpPost]
        [Route("addsighting/{id}")]
        public async Task<IActionResult> HaveSeen([FromRoute] string id, [FromBody]Sighting sighting)
        {
            await userService.AddSighting(id, sighting);
            return Ok(sighting);
        }

        [HttpPost]
        [Route("newuserfastload")]
        public async Task<IActionResult> NewUserFastLoad([FromBody]List<User> users)
        {
            foreach (var user in users)
            {
                await userService.AddUser(user);
            }
            return Ok(users);
        }

        [HttpPost]
        [Route("updateuser/{id}")]
        public async Task<IActionResult> UpdateUser([FromRoute] string id, [FromBody]User user)
        {
            await userService.UpdateUserWithFilter(id, user);
            return RedirectToAction("BeenSeen");
        }
    }
}
