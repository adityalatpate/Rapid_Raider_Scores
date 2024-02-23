import { myAxios } from "./connection";

export const registerTournament = (user)=>{
    return myAxios.post('/tournamentregistercontroller/registerTournament', user)
    .then((response)=> response.data)
    .catch(error => {
        console.error('Error Posting Tournaments Data:', error);
        throw error; 
    });
};