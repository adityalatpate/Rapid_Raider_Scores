package com.rapidraiderscores.rapidraiderscores.services;


import java.util.List;

import com.rapidraiderscores.rapidraiderscores.entities.TournamentRegisteration;
import com.rapidraiderscores.rapidraiderscores.entities.UserRegister;

public interface RegisterService {
	
	public	TournamentRegisteration addRegisterTour(TournamentRegisteration registerTour);
	public  List<TournamentRegisteration> getAllRegisterTour();	
	public boolean checkPhoneNumberExists(String phoneNumber);
	public	UserRegister addUser(UserRegister userData);
	void deleteOldData();
	
	
}
