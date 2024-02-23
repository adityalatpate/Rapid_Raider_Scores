
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TournamentTeams = ({ tournamentId }) => {
  // State to store teams data
  const [teams, setTeams] = useState([]);

  // Fetch teams data when component mounts or tournamentId changes
  useEffect(() => {
    const fetchTeams = async () => {
      try {
        // Fetch teams data from backend
        const response = await axios.get(`/api/teams/tournament/${tournamentId}`);
        setTeams(response.data);
      } catch (error) {
        console.error('Error fetching teams:', error);
      }
    };

    fetchTeams();
  }, [tournamentId]);

  return (
    <div>
      <h2>Teams for Tournament ID: {tournamentId}</h2>
      <ul>
        {teams.map(team => (
          <li key={team.id}>{team.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default TournamentTeams;
