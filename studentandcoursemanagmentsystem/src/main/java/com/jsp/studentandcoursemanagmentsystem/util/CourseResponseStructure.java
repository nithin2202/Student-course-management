package com.jsp.studentandcoursemanagmentsystem.util;

import java.time.LocalDateTime;
import java.util.List;
@lombok.Data
public class CourseResponseStructure<T> {
	private String msg;
	private int statuscode;
	private List<T> Data;
	private LocalDateTime dataTime = LocalDateTime.now();

}
