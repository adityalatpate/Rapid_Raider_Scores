import { myAxios } from './connection';

export const fetchTournaments = () => {
    return myAxios.get('/tournamentregistercontroller/allregitour') 
        .then(response => response.data)
        .catch(error => {
            console.error('Error fetching tournaments:', error);
            throw error; 
        });
};
