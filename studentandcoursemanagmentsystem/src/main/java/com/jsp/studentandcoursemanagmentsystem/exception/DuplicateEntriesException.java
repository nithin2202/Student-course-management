package com.jsp.studentandcoursemanagmentsystem.exception;

public class DuplicateEntriesException extends RuntimeException {
	private String message;

	public DuplicateEntriesException(String message) {
		this.message = message;
	}
	public String getMessage() {
		return  message;
	}
	

}
