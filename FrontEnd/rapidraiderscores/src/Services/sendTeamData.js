import { myAxios } from "./connection";

export const sendTeamData = (teamData)=>{
    return myAxios.post('/api/teams/addteam', teamData)
    .then((response)=> response.data)
    .catch(error => {
        console.error('Error Posting Team Data:', error);
        throw error; 
    });
}