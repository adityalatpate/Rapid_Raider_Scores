import { myAxios } from './connection';

export const fetchMatchData = () => {
    return myAxios.get('/matches/getallmatch') 
        .then(response => response.data)
        .catch(error => {
            console.error('Error fetching Matches:', error);
            throw error; 
        });
};