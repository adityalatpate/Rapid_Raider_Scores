package com.rapidraiderscores.rapidraiderscores.services;


import java.text.ParseException;
import org.springframework.stereotype.Component;
import com.rapidraiderscores.rapidraiderscores.entities.UserRegister;
import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;

@Component
public class SmsService {
	
		private final String ACCOUNT_SID ="ACca0417640073159e1f4835ed721fd573";

	    private final String AUTH_TOKEN = "5fcba10e7874b6fb64c0eade74e04c58";

	    private final String FROM_NUMBER = "+13096280495";

	    public int send(UserRegister sms) throws ParseException {
	    	Twilio.init(ACCOUNT_SID, AUTH_TOKEN);
	      
	    	
	        int min = 100000;  
	        int max = 999999; 
	        int number=(int)(Math.random()*(max-min+1)+min);
	      
	        
	        String msg ="Your RapidRaidersScores OTP is - "+number+ ". Note Do Not Share this Otp with anyone.";
	       
	        Message message = Message.creator(new PhoneNumber(sms.getPhnNumber()), new PhoneNumber(FROM_NUMBER), msg)
	                .create();
	        
	        return number;
	       
	    }

}

