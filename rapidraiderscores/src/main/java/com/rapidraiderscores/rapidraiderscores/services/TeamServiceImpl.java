package com.rapidraiderscores.rapidraiderscores.services;

import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rapidraiderscores.rapidraiderscores.entities.Team;
import com.rapidraiderscores.rapidraiderscores.entities.TeamRegistration;
import com.rapidraiderscores.rapidraiderscores.entities.TournamentRegisteration;
import com.rapidraiderscores.rapidraiderscores.exception.EmptyInputException;
import com.rapidraiderscores.rapidraiderscores.exception.InvalidTeamException;
import com.rapidraiderscores.rapidraiderscores.exception.InvalidTournamentException;
import com.rapidraiderscores.rapidraiderscores.exception.TeamAlreadyRegisteredException;
import com.rapidraiderscores.rapidraiderscores.repository.TeamRepository;
import com.rapidraiderscores.rapidraiderscores.repository.TournamentRegisterationRepository;
import com.rapidraiderscores.rapidraiderscores.repository.TournamentRepo;

@Service
public class TeamServiceImpl implements TeamService{
	
	@Autowired
	private TeamRepository teamRepository;

	 @Autowired
	 private TournamentRepo tournamentRepo;
	 
	 @Autowired
	 private TournamentRegisterationRepository tournamentRegistrationRepository;
	 
	@Override
	public Team addRegisterTeam(Team team) {
		
		Team registeredTeam = teamRepository.save(team);
		return registeredTeam;
	}

	@Override
	public List<Team> getAllRegisterTeam() {
		List<Team> regiTeamList=null;
		regiTeamList= teamRepository.findAll();
		if(regiTeamList.isEmpty()) {
			throw new EmptyInputException("602","Hey list is empty");
		}
		return regiTeamList;
	}

	@Override
	public void registerTeamForTournament(Long teamId, Long tournamentId)throws InvalidTeamException, InvalidTournamentException, TeamAlreadyRegisteredException
	{
		// Check if the team exists
        Team team = teamRepository.findById(teamId)
                .orElseThrow(() -> new InvalidTeamException("Team not found with ID: " + teamId));

        // Check if the tournament exists
        TournamentRegisteration tournament = tournamentRepo.findById(tournamentId)
                .orElseThrow(() -> new InvalidTournamentException("Tournament not found with ID: " + tournamentId));
        
     // Check if the team is already registered for the tournament
//        if (isTeamAlreadyRegistered(team, tournament)) {
//            throw new TeamAlreadyRegisteredException("Team is already registered for the tournament.");
//        }
        
     // Create a new TeamRegistration object and save it
        TeamRegistration teamRegistration = new TeamRegistration(team, tournament);
        tournamentRegistrationRepository.save(teamRegistration);
		
	}

	@Override
	public List<TeamRegistration> getAllTeamRegisteredByTourID(TournamentRegisteration tournament) {
	    List<TeamRegistration> teamsRegis = tournamentRegistrationRepository.findByTournament(tournament);
	    if(teamsRegis.isEmpty()) {
			throw new EmptyInputException("602","Hey list is empty");
		}
	    return teamsRegis;
	}
	
	
}

