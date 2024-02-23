package com.rapidraiderscores.rapidraiderscores.controller;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rapidraiderscores.rapidraiderscores.entities.OtpEntity;
import com.rapidraiderscores.rapidraiderscores.entities.UserRegister;
import com.rapidraiderscores.rapidraiderscores.entities.VerificationRequest;
import com.rapidraiderscores.rapidraiderscores.services.SmsService;
import com.rapidraiderscores.rapidraiderscores.services.RegisterService;

@RestController
@RequestMapping("/userregistercontroller")
public class UserRegisterationController {

	int otp = 123456;
	
	@Autowired
    SmsService service;
	
	@Autowired
	RegisterService registerService;
	
    @Autowired
    private SimpMessagingTemplate webSocket;
    
    private final String  TOPIC_DESTINATION = "/lesson/sms";
    
	@PostMapping("/mobileotp")
	public ResponseEntity<Boolean> sendOtp(@RequestBody UserRegister userRegisterData)
	{
		try{
			
            //this.otp = service.send(userRegisterData);
			System.out.println("hii");
		}
		catch(Exception e)
		{
			e.printStackTrace();
			return new ResponseEntity<>(false,HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
		 webSocket.convertAndSend(TOPIC_DESTINATION, getTimeStamp() + ": SMS has been sent!: "+userRegisterData.getPhnNumber());
		 return new ResponseEntity<Boolean>(true,HttpStatus.OK);
	}
	
	private String getTimeStamp() {
	       return DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now());
	}
	
	@PostMapping("/otpverify")
	public ResponseEntity<String> verifyOtp(@RequestBody VerificationRequest verificationRequest)
	{
		 System.out.println(verificationRequest.getOtp());
		 OtpEntity otp = new OtpEntity();
		 otp.setOtp(verificationRequest.getOtp());
		 UserRegister userRegisterData = new UserRegister();
		 userRegisterData.setFirstName(verificationRequest.getFirstName());
		 userRegisterData.setLastName(verificationRequest.getLastName());
		 userRegisterData.setPhnNumber(verificationRequest.getPhnNumber());
		 String phoneNumber = userRegisterData.getPhnNumber();
 		 if(this.otp == otp.getOtp())
		{
			boolean phoneNumberExists = registerService.checkPhoneNumberExists(phoneNumber);
			if (phoneNumberExists) {
				return new ResponseEntity<>("OTP matched. Account Already Exist.", HttpStatus.OK);
		    } else {
		    	registerService.addUser(userRegisterData);
		    	return new ResponseEntity<>("OTP matched. New Account Created.", HttpStatus.OK);
		    }
			
        }
		else
		{
			System.out.print(this.otp);
			System.out.print(otp);
			return new ResponseEntity<>("Invalid OTP", HttpStatus.BAD_REQUEST);
		}
		
	}
}
