package com.jsp.studentandcoursemanagmentsystem.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.jsp.studentandcoursemanagmentsystem.dto.Course;
import com.jsp.studentandcoursemanagmentsystem.service.CourseService;
import com.jsp.studentandcoursemanagmentsystem.util.CourseResponseStructure;
import com.jsp.studentandcoursemanagmentsystem.util.ResponseStructure1;

@RestController
@CrossOrigin
public class CourseController {
	@Autowired
	private CourseService courseService;
	@PostMapping("/course/save")
	public ResponseEntity<CourseResponseStructure<Course>> saveCourse(@RequestBody List<Course> courses) {
		return courseService.saveCourse(courses);
		
	}
	@GetMapping("/course/findall")
	public ResponseEntity<CourseResponseStructure<Course>> getAllCourses() {
		return courseService.getAll();
	}
	@DeleteMapping("/course/delete/{id}")
	public ResponseEntity<ResponseStructure1<Course>> deleteById(@PathVariable int id) {
		return courseService.deleteById(id);
	}
	@PostMapping("/course/update")
	public ResponseEntity<ResponseStructure1<Course>> updateCourse(@RequestBody Course course) {
		return courseService.updateCourse(course);
	}
	@GetMapping("/course/find/{id}")
	public ResponseEntity<ResponseStructure1<Course>> findById(@PathVariable int id) {
		return courseService.findById(id);
	}
	@PostMapping("course/add")
	public ResponseEntity<ResponseStructure1<Course>> addCourse(@RequestBody Course course) {
		return courseService.addCourse(course);
	}

}
