package com.jsp.studentandcoursemanagmentsystem.exception;

public class EmailMisMatchException extends RuntimeException {
	String message;

	public EmailMisMatchException(String message) {
		this.message = message;
	}
	public String getMessage() {
		return message;
	}
	
}
