package com.jsp.studentandcoursemanagmentsystem.exception;

public class StudentDoesNotExistException extends RuntimeException {
	private String message;

	public StudentDoesNotExistException(String message) {
		
		this.message = message;
	}
	public String getMessage() {
		return message;
	}
	
}
