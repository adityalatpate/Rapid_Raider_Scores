package com.rapidraiderscores.rapidraiderscores.controller;


import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rapidraiderscores.rapidraiderscores.entities.Team;
import com.rapidraiderscores.rapidraiderscores.exception.InvalidTeamException;
import com.rapidraiderscores.rapidraiderscores.exception.InvalidTournamentException;
import com.rapidraiderscores.rapidraiderscores.exception.TeamAlreadyRegisteredException;
import com.rapidraiderscores.rapidraiderscores.services.TeamService;
import com.rapidraiderscores.rapidraiderscores.entities.TeamRegistration;
import com.rapidraiderscores.rapidraiderscores.entities.TournamentRegisteration;

@RestController
@RequestMapping("/api/teams")
public class TeamController {
	
	@Autowired
    private TeamService teamService; 
	
	
	@PostMapping("/addteam")
	public ResponseEntity<Team> addTeam(@RequestBody Team team) {
		
		Team regiSave= teamService.addRegisterTeam(team);
		return new ResponseEntity<Team>(regiSave,HttpStatus.CREATED);
    }
	
	@GetMapping("/allregisteam")
	public ResponseEntity<?> getAllRegisterTeam() {
	    List<Team> listRegisTeam = teamService.getAllRegisterTeam();
	    System.out.println(listRegisTeam);
	    if (listRegisTeam.isEmpty()) {
	        // If the list is empty, return a custom error response
	        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("No registered tournaments found.");
	    } else {
	        // If the list is not empty, return the list of registered tournaments
	        return ResponseEntity.ok(listRegisTeam);
	    }
	}
	
	@PostMapping("/allteamsregisbytourid")
	public ResponseEntity<?> getAllTeamsByTournamentId(@RequestBody TournamentRegisteration tournament) {
	    List<TeamRegistration> listRegisTeam = teamService.getAllTeamRegisteredByTourID(tournament);
	    System.out.println(listRegisTeam);
	    if (listRegisTeam.isEmpty()) {
	        // If the list is empty, return a custom error response
	        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("No registered tournaments found.");
	    } else {
	        // If the list is not empty, return the list of registered tournaments
	        return ResponseEntity.ok(listRegisTeam);
	    }
	}

    @PostMapping("/register/{tournamentId}")
    public ResponseEntity<String> registerTeam(@PathVariable Long tournamentId, @RequestBody Long teamId) {
        try {
            teamService.registerTeamForTournament(teamId, tournamentId);
            return ResponseEntity.ok("Team successfully registered for tournament.");
        } catch (InvalidTeamException | InvalidTournamentException | TeamAlreadyRegisteredException e) {
            // Handle specific exceptions with appropriate error messages and status codes
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        } catch (Exception e) {
            // Handle unexpected exceptions with a generic error message
        	e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred during registration.");
        }
    }
}
	
//	 @PostMapping("/tournament/{tournamentId}")
//	    public ResponseEntity<Team> addTeamToTournament(@PathVariable Long tournamentId, @RequestBody Team team) {
//	        Team createdTeam = teamService.addTeamToTournament(tournamentId, team);
//	        return ResponseEntity.ok(createdTeam);
//	    }
//
//	    @GetMapping("/tournament/{tournamentId}")
//	    public ResponseEntity<Set<Team>> getTeamsByTournament(@PathVariable Long tournamentId) {
//	        Set<Team> teams = teamService.getTeamsByTournament(tournamentId);
//	        return ResponseEntity.ok(teams);
//	    }


