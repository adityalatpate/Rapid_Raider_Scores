package com.rapidraiderscores.rapidraiderscores.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rapidraiderscores.rapidraiderscores.entities.MatchDetails;
import com.rapidraiderscores.rapidraiderscores.entities.Team;
import com.rapidraiderscores.rapidraiderscores.services.MatchService;

@RestController
@RequestMapping("/matches")
public class MatchController {
	
	@Autowired
	MatchService matchService;
	
	@PostMapping("/addteam")
	public ResponseEntity<MatchDetails> addMatch(@RequestBody MatchDetails match) {
		
		MatchDetails matchSave= matchService.addMatch(match);
		return new ResponseEntity<MatchDetails>(matchSave,HttpStatus.CREATED);
    }
	
	@GetMapping("/getallmatch")
	public ResponseEntity<?> getAllMatches() {
	    List<MatchDetails> listMatch = matchService.getAllMatches();
	    System.out.println(listMatch);
	    if (listMatch.isEmpty()) {
	        // If the list is empty, return a custom error response
	        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("No registered tournaments found.");
	    } else {
	        // If the list is not empty, return the list of registered tournaments
	        return ResponseEntity.ok(listMatch);
	    }
	}
}
