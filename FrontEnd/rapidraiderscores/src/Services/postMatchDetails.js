import { myAxios } from "./connection";

export const postMatchDetails = (matchData)=>{
    return myAxios.post('/matches/addteam', matchData)
    .then((response)=> response.data)
    .catch(error => {
        console.error('Error Posting Match Data:', error);
        throw error; 
    });
}