package com.rapidraiderscores.rapidraiderscores.services;

import java.util.List;
import java.util.Set;

import com.rapidraiderscores.rapidraiderscores.entities.Team;
import com.rapidraiderscores.rapidraiderscores.entities.TeamRegistration;
import com.rapidraiderscores.rapidraiderscores.entities.TournamentRegisteration;
import com.rapidraiderscores.rapidraiderscores.exception.InvalidTeamException;
import com.rapidraiderscores.rapidraiderscores.exception.InvalidTournamentException;
import com.rapidraiderscores.rapidraiderscores.exception.TeamAlreadyRegisteredException;



public interface TeamService {

	Team addRegisterTeam(Team team);

	List<Team> getAllRegisterTeam();
	
	void registerTeamForTournament(Long teamId, Long tournamentId) throws InvalidTeamException, InvalidTournamentException, TeamAlreadyRegisteredException;

	List<TeamRegistration> getAllTeamRegisteredByTourID(TournamentRegisteration tournament); 

//	Team addTeamToTournament(Long tournamentId, Team team);
//
//	Set<Team> getTeamsByTournament(Long tournamentId);

	

	

}
