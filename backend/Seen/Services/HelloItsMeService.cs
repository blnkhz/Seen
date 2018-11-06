using Seen.Models;
using Seen.Repositories;
using System.Linq;
using System.Threading.Tasks;

namespace Seen.Services
{
    public class HelloItsMeService
    {
        private SeenRepository seenRepository;

        public HelloItsMeService(SeenRepository seenRepository)
        {
            this.seenRepository = seenRepository;
        }

        public async Task AddHelloItsMe(string sId, HelloItsMe helloItsMe)
        {
            var allUsers = await seenRepository.SelectAllAsync();
            string selectedUsersId = null;
            int sightingIndex = 0;
            for (int i = 0; i < allUsers.Count; i++)
            {
                for (int j = 0; j < allUsers[i].Sightings.Count; j++)
                {
                    if (allUsers[i].Sightings[j].HelloItsMes.Count == 0)
                    {
                        if (sId == allUsers[i].Sightings[j].Id.ToString())
                        {
                            selectedUsersId = allUsers[i].FbId.ToString();
                            sightingIndex = j;
                        }
                    }
                    else
                    {
                        for (int k = 0; k < allUsers[i].Sightings[j].HelloItsMes.Count; k++)
                        {
                            if (allUsers[i].Sightings[j].HelloItsMes[k].HelloFbId == helloItsMe.HelloFbId && sId == allUsers[i].Sightings[j].Id.ToString())
                            {
                                selectedUsersId = null;
                                break;
                            }
                            if (sId == allUsers[i].Sightings[j].Id.ToString())
                            {
                                selectedUsersId = allUsers[i].FbId.ToString();
                                sightingIndex = j;
                            }
                        }
                    }
                }
            }
            await seenRepository.UpdateHelloItsMeAsync(selectedUsersId, sightingIndex, helloItsMe);
        }

        public async Task RemoveHelloItsMe(string fbId, string sId, string helloFbId)
        {
            await seenRepository.RemoveHelloItsMeAsync(fbId, sId, helloFbId);
        }
    }
}
