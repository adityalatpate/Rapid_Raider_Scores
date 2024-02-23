import { myAxios } from './connection';

export const fetchTeamData = () => {
    return myAxios.get('/api/teams/allregisteam') 
        .then(response => response.data)
        .catch(error => {
            console.error('Error fetching Teams:', error);
            throw error; 
        });
};