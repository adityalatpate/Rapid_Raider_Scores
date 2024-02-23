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
import com.rapidraiderscores.rapidraiderscores.services.RegisterService;

import ch.qos.logback.classic.Logger;
import io.jsonwebtoken.lang.Collections;

import com.rapidraiderscores.rapidraiderscores.entities.TournamentRegisteration;


@RestController
@RequestMapping("/tournamentregistercontroller")
public class TournamentController {
	
	@Autowired
	private RegisterService registerService;
	
	@GetMapping("/home")
	public String home()
	{
		return "hello Home";
	}
	
	//Adding data to database 
	@PostMapping("/registerTournament")
	 public ResponseEntity<TournamentRegisteration> addTournament(@RequestBody TournamentRegisteration tourreg)
	 {
		TournamentRegisteration regiSave= registerService.addRegisterTour(tourreg);
		return new ResponseEntity<TournamentRegisteration>(regiSave,HttpStatus.CREATED);
	 }
	
	//Getting all data from database
//	@GetMapping("/allregitour")
//	public ResponseEntity<?> getAllRegisterTour() {
//	    List<TournamentRegisteration> listRegiTour = registerService.getAllRegisterTour();
//	    if (listRegiTour.isEmpty()) {
//	        // If the list is empty, return a custom error response
//	        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("No registered tournaments found.");
//	    } else {
//	        // If the list is not empty, return the list of registered tournaments
//	        return ResponseEntity.ok(listRegiTour);
//	    }
//	}
	
	@GetMapping("/allregitour")
	public ResponseEntity<?> getAllRegisterTour() {
	    try {
//	    	return ("hii");
	        List<TournamentRegisteration> listRegiTour = registerService.getAllRegisterTour();
	        if (listRegiTour.isEmpty()) {
	            // If the list is empty, return a custom error response
	            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("No registered tournaments found.");
	        } else {
	            // If the list is not empty, return the list of registered tournaments
	            return ResponseEntity.ok(listRegiTour);
	        }
	    } catch (Exception e) {
//	    	return("Hello");
	        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to retrieve tournament registrations: " + e.getMessage());
	    }
	}
}
