package com.jsp.studentandcoursemanagmentsystem.util;

import java.time.LocalDateTime;
import java.util.List;

@lombok.Data
public class ResponseStructureList<T> {

	private String msg;
	private int statuscode;
	private List<T> Data;
	private LocalDateTime dataTime = LocalDateTime.now();
}