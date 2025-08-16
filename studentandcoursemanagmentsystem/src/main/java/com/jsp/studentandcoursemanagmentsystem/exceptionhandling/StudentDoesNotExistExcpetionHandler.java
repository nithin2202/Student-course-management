package com.jsp.studentandcoursemanagmentsystem.exceptionhandling;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.jsp.studentandcoursemanagmentsystem.exception.StudentDoesNotExistException;

@RestControllerAdvice
public class StudentDoesNotExistExcpetionHandler {
	@ExceptionHandler(StudentDoesNotExistException.class)
	public ResponseEntity<String> doesNotExist(StudentDoesNotExistException doesNotExist) {
		ResponseEntity<String> entity = new ResponseEntity<String>(doesNotExist.getMessage(),HttpStatus.NOT_FOUND);
		return entity;
	}
}
