package com.jsp.studentandcoursemanagmentsystem.exception;

public class AccountAlredyExistException extends RuntimeException {
	private String message;

	public AccountAlredyExistException(String message) {
		
		this.message = message;
	}
	public String getMessage() {
		return message;
	}
}
