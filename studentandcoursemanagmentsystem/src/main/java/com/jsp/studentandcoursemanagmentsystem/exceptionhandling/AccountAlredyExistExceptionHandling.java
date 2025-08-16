package com.jsp.studentandcoursemanagmentsystem.exceptionhandling;

import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.jsp.studentandcoursemanagmentsystem.exception.AccountAlredyExistException;

@RestControllerAdvice
public class AccountAlredyExistExceptionHandling {
	@ExceptionHandler(AccountAlredyExistException.class)
	public ResponseEntity<String> alredyExist(AccountAlredyExistException alredyExist) {
		ResponseEntity<String> entity = new ResponseEntity<String>(alredyExist.getMessage(),HttpStatus.NOT_FOUND);
		return entity;
	}
}
