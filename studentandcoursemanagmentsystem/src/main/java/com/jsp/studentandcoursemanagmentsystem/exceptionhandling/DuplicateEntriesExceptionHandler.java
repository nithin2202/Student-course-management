package com.jsp.studentandcoursemanagmentsystem.exceptionhandling;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.jsp.studentandcoursemanagmentsystem.exception.DuplicateEntriesException;

@RestControllerAdvice
public class DuplicateEntriesExceptionHandler {
	@ExceptionHandler(DuplicateEntriesException.class)
	public ResponseEntity<String> duplicates(DuplicateEntriesException duplicates) {
		ResponseEntity<String> entity = new ResponseEntity<String>(duplicates.getMessage(),HttpStatus.NOT_FOUND);
		return entity;
	}

}
