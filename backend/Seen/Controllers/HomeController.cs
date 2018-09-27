using Microsoft.AspNetCore.Mvc;
using Seen.Models;
using Seen.Services;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Seen.Controllers
{
    public class HomeController : Controller
    {
        private UserService userService;
        private SightingService sightingService;
        private HelloItsMeService helloItsMeService;

        public HomeController(UserService userService, SightingService sightingService, HelloItsMeService helloItsMeService)
        {
            this.userService = userService;
            this.sightingService = sightingService;
            this.helloItsMeService = helloItsMeService;
        }

        [HttpGet]
        [Route("beenseen")]
        public async Task<IActionResult> BeenSeen()
        {
            var listOfUsers = await userService.ReadAllUsers();
            return Ok(listOfUsers);
        }

        [HttpGet]
        [Route("getuser/{id}")]
        public async Task<IActionResult> SearchById(string id)
        {
            var selectedUser = await userService.ReadOneUser(id);
            return Ok(selectedUser);
        }

        [HttpPost]
        [Route("filterusers")]
        public async Task<IActionResult> SearchByField([FromBody] FilterJson filter)
        {
            var filteredUsers = await userService.FilterUser(filter.Field, filter.Value);
            return Ok(filteredUsers);
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
        public async Task<IActionResult> MatchFilter(string id)
        {
            var possibleSightings = await sightingService.Finder(id);
            return Ok(possibleSightings);
        }

        [HttpGet]
        [Route("loginmap")]
        public async Task<IActionResult> LoginMap ()
        {
            var locations = await sightingService.ReadAllLocations();
            return Ok(locations);
        }

        [HttpPost]
        [Route("addsighting/{id}")]
        public async Task<IActionResult> HaveSeen([FromRoute] string id, [FromBody]Sighting sighting)
        {
            await sightingService.AddSighting(id, sighting);
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

        [HttpPost]
        [Route("addhelloitsme/{id}")]
        public async Task<IActionResult> AddHelloItsMe([FromRoute] string id, [FromBody] HelloItsMe helloitsme)
        {
            await helloItsMeService.AddHelloItsMe(id, helloitsme);
            return RedirectToAction("BeenSeen");
        }

        [HttpGet]
        [Route("removesighting/{fbId}/{sId}")]
        public async Task<IActionResult> RemoveSighting([FromRoute] string fbId, [FromRoute] string sId)
        {
            await sightingService.RemoveSighting(fbId, sId);
            return RedirectToAction("BeenSeen");
        }

        //[HttpGet]
        //[Route("removehelloitsme/{fbId}/{sId}/{socialHandle}")]
        //public async Task<IActionResult> RemoveHelloItsMe([FromRoute] string fbId, [FromRoute] string sId, [FromRoute] string socialHandle)
        //{
        //    await helloItsMeService.RemoveHelloItsMe(fbId, sId, socialHandle);
        //    return RedirectToAction("BeenSeen");
        //}
    }
}
