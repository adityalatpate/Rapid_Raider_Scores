package com.rapidraiderscores.rapidraiderscores.services;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

import com.rapidraiderscores.rapidraiderscores.exception.EmptyInputException;
import com.rapidraiderscores.rapidraiderscores.entities.TournamentRegisteration;
import com.rapidraiderscores.rapidraiderscores.entities.UserRegister;
import com.rapidraiderscores.rapidraiderscores.repository.TournamentRepo;
import com.rapidraiderscores.rapidraiderscores.repository.UserRepo;

import io.jsonwebtoken.lang.Collections;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;

@Service
@Transactional
public class RegisterServiceImpl implements RegisterService {
	
	@Autowired
	public TournamentRepo tournamentRepo;
	
	@Autowired
	public UserRepo userRepo;

	@Override
	public TournamentRegisteration addRegisterTour(TournamentRegisteration registerTour) {		
		TournamentRegisteration regiTour=tournamentRepo.save(registerTour);
		return regiTour;
	}
	
	
	@Override
	public List<TournamentRegisteration> getAllRegisterTour() {
//			return("Hii");
		    try {
	    	System.out.println("Hii");
	        List<TournamentRegisteration> regiList = new ArrayList<>();
	        regiList.addAll(tournamentRepo.findAll());

	        if (regiList.isEmpty()) {
	            throw new EmptyInputException("602", "No tournament registrations found");
	        }

	        return regiList;
	    } catch (DataAccessException e) {
	        // Handle database-related exceptions specifically
	        throw new RuntimeException("Failed to retrieve tournament registrations", e);
	    } catch (Exception e) {
	        // Handle other exceptions
	        throw new RuntimeException("Unexpected error retrieving tournament registrations", e);
	    }
	}

	@Override
	public boolean checkPhoneNumberExists(String phoneNumber) {
		UserRegister user = userRepo.findByPhnNumber(phoneNumber);
        return user != null;
	}

	@Override
	public UserRegister addUser(UserRegister userData) {
		 try {
		        UserRegister user = (UserRegister) userRepo.save(userData);
		        return user;
		    } catch (Exception e) {
		        // Handle any exceptions that may occur during the save operation
		        e.printStackTrace(); // Print the stack trace for debugging purposes
		        throw new RuntimeException("Failed to add user: " + e.getMessage());
		    }
	}
	
	 @Transactional
	  
	  @Override 
	  public void deleteOldData() { LocalDate oneYearAgo =
	  LocalDate.now().minusYears(1); tournamentRepo.deleteOldData(oneYearAgo);
	  
	  }

//	@Override
//	public TournamentRegisteration getRegisterTourById(long regiID) {
//	}
	
	

}
