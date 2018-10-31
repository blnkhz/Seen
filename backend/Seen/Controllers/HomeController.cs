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
        [Route("getuser/{fbId}")]
        public async Task<IActionResult> SearchById(string fbId)
        {
            var selectedUser = await userService.ReadOneUser(fbId);
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
        [Route("deleteuser/{fbId}")]
        public async Task<IActionResult> BeenDeleted(string fbId)
        {
            await userService.DeleteUser(fbId);
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
        [Route("matchfilter/{fbId}")]
        public async Task<IActionResult> MatchFilter(string fbId)
        {
            var possibleSightings = await sightingService.MatchFinder(fbId);
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
        [Route("addsighting/{fbId}")]
        public async Task<IActionResult> HaveSeen([FromRoute] string fbId, [FromBody]Sighting sighting)
        {
            await sightingService.AddSighting(fbId, sighting);
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
        [Route("updateuser/{fbId}")]
        public async Task<IActionResult> UpdateUser([FromRoute] string fbId, [FromBody]User user)
        {
            await userService.UpdateUserWithFilter(fbId, user);
            return RedirectToAction("BeenSeen");
        }

        [HttpPost]
        [Route("addhelloitsme/{sId}")]
        public async Task<IActionResult> AddHelloItsMe([FromRoute] string sId, [FromBody] HelloItsMe helloitsme)
        {
            await helloItsMeService.AddHelloItsMe(sId, helloitsme);
            return RedirectToAction("BeenSeen");
        }

        [HttpGet]
        [Route("removesighting/{fbId}/{sId}")]
        public async Task<IActionResult> RemoveSighting([FromRoute] string fbId, [FromRoute] string sId)
        {
            await sightingService.RemoveSighting(fbId, sId);
            return RedirectToAction("BeenSeen");
        }

        [HttpGet]
        [Route("removehelloitsme/{fbId}/{sId}/{helloFbId}")]
        public async Task<IActionResult> RemoveHelloItsMe([FromRoute] string fbId, [FromRoute] string sId, [FromRoute] string helloFbId)
        {
            await helloItsMeService.RemoveHelloItsMe(fbId, sId, helloFbId);
            return RedirectToAction("BeenSeen");
        }

        [HttpGet]
        [Route("readuserwithmatches/{fbId}")]
        public async Task<IActionResult> ReadHandle([FromRoute] string fbId)
        {
            var match = await userService.ReadHandle(fbId);
            return Ok(match);
        }
    }
}
