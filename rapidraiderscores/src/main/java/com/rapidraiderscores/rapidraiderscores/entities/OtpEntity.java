package com.rapidraiderscores.rapidraiderscores.entities;

public class OtpEntity {
	
	

	private int otp;
	
	
	
	public OtpEntity(int otp) {
		super();
		this.otp = otp;
		
	}


	public int getOtp() {
		return otp;
	}


	public void setOtp(int otp) {
		this.otp = otp;
	}

	public OtpEntity() {
		super();
		// TODO Auto-generated constructor stub
	}


	@Override
	public String toString() {
		return "OtpEntity [otp=" + otp + "]";
	}

}
