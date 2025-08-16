package com.jsp.studentandcoursemanagmentsystem.util;

import java.time.LocalDateTime;

import lombok.Data;

@Data
public class ResponseStructure<T> {
	
	private String msg;
	private T data;
	private int statusCode;
	private LocalDateTime dateTime= LocalDateTime.now();
}
