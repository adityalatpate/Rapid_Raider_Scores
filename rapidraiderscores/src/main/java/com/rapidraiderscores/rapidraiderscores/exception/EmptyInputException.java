package com.rapidraiderscores.rapidraiderscores.exception;

public class EmptyInputException extends RuntimeException {

	private String errorcode;
	private String errorMessage;
	
	public String getErrorcode() {
		return errorcode;
	}
	public void setErrorcode(String errorcode) {
		this.errorcode = errorcode;
	}
	public String getErrorMessage() {
		return errorMessage;
	}
	public void setErrorMessage(String errorMessage) {
		this.errorMessage = errorMessage;
	}
	public EmptyInputException(String errorcode, String errorMessage) {
		//super();
		this.errorcode = errorcode;
		this.errorMessage = errorMessage;
	}
	public EmptyInputException() {
		
	}
}
