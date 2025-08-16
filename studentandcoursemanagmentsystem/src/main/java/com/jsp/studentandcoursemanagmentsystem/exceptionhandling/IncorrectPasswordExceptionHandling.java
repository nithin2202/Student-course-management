package com.jsp.studentandcoursemanagmentsystem.exceptionhandling;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.jsp.studentandcoursemanagmentsystem.exception.IncorrectPasswordException;

@RestControllerAdvice
public class IncorrectPasswordExceptionHandling {
	@ExceptionHandler(IncorrectPasswordException.class)
	public ResponseEntity<String> passwordIssue(IncorrectPasswordException passwordIssue) {
		ResponseEntity<String> entity = new ResponseEntity<String>(passwordIssue.getMessage(),HttpStatus.NOT_FOUND);
		return entity;
	}
}
