package com.rapidraiderscores.rapidraiderscores.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class UserRegister {
	
	@Id
	private String phnNumber;
	private String firstName;
	private String lastName;
	
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
	
	public UserRegister(String phnNumber, String firstName, String lastName) {
		super();
		this.phnNumber = phnNumber;
		this.firstName = firstName;
		this.lastName = lastName;
	}
	public UserRegister() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	@Override
	public String toString() {
		return "UserRegister [phnNumber=" + phnNumber + ", firstName=" + firstName + ", lastName=" + lastName + "]";
	}

}
