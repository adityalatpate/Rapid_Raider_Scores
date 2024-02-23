import { myAxios } from './connection';

export const fetchTeamDataByTourId = (tournament) => {
    return myAxios.post('/api/teams/allteamsregisbytourid', tournament) 
        .then(response => response.data)
        .catch(error => {
            console.error('Error fetching Teams:', error);
            throw error; 
        });
};