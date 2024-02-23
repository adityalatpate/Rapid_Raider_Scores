package com.rapidraiderscores.rapidraiderscores.entities;

public class VerificationRequest {
	
	
	private int otp;
    private String phnNumber;
    private String firstName;
    private String lastName;
    
    public VerificationRequest(int otp, String phnNumber, String firstName, String lastName) {
		super();
		this.otp = otp;
		this.phnNumber = phnNumber;
		this.firstName = firstName;
		this.lastName = lastName;
	}

	public VerificationRequest() {
		super();
		// TODO Auto-generated constructor stub
	}

	public int getOtp() {
		return otp;
	}

	public void setOtp(int otp) {
		this.otp = otp;
	}

	public String getPhnNumber() {
		return phnNumber;
	}

	public void setPhnNumber(String phnNumber) {
		this.phnNumber = phnNumber;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	
	@Override
	public String toString() {
		return "VerificationRequest [otp=" + otp + ", phnNumber=" + phnNumber + ", firstName=" + firstName
				+ ", lastName=" + lastName + "]";
	}
  
//	public OtpEntity getOtp() {
//		return otp;
//	}
//	public void setOtp(OtpEntity otp) {
//		this.otp = otp;
//	}
//	public UserRegister getUserRegisterData() {
//		return userRegisterData;
//	}
//	public void setUserRegisterData(UserRegister userRegisterData) {
//		this.userRegisterData = userRegisterData;
//	}
//	
//	@Override
//	public String toString() {
//		return "VerificationRequest [otp=" + otp + ", userRegisterData=" + userRegisterData + "]";
//	}
    

}
