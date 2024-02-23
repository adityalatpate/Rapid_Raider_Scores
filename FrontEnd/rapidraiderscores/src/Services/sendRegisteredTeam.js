import { myAxios } from "./connection";

export const sendRegisteredTeam = (tournamentId, teamId)=>{
    return myAxios.post(`/api/teams/register/${tournamentId}`, teamId, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
    .then((response)=> response.data)
    .catch(error => {
        console.error('Error Posting Registered Team Data:', error);
        throw error; 
    });
}