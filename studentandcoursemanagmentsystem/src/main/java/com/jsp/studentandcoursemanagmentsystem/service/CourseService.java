package com.jsp.studentandcoursemanagmentsystem.service;

import java.rmi.StubNotFoundException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.jsp.studentandcoursemanagmentsystem.dao.CourseDao;
import com.jsp.studentandcoursemanagmentsystem.dto.Course;
import com.jsp.studentandcoursemanagmentsystem.exception.StudentDoesNotExistException;
import com.jsp.studentandcoursemanagmentsystem.util.CourseResponseStructure;
import com.jsp.studentandcoursemanagmentsystem.util.ResponseStructure1;
import com.jsp.studentandcoursemanagmentsystem.util.ResponseStructure;

@Service
public class CourseService {
	@Autowired
	private CourseDao courseDao;
	
	private CourseResponseStructure<Course> courseResponseStructure=new CourseResponseStructure<Course>();
	
	private ResponseStructure1<Course> structure1=new ResponseStructure1<Course>();
	
	public ResponseEntity<CourseResponseStructure<Course>> saveCourse(List<Course> course) {
		List<Course> list=courseDao.saveCourse(course);
		courseResponseStructure.setMsg("Course Saved");
		courseResponseStructure.setData(list);
		courseResponseStructure.setStatuscode(HttpStatus.ACCEPTED.value());
		return new ResponseEntity<CourseResponseStructure<Course>>(courseResponseStructure,HttpStatus.ACCEPTED);
		
	}
	
	public ResponseEntity<CourseResponseStructure<Course>> getAll() {
		courseResponseStructure.setMsg("getting courses details");
		courseResponseStructure.setData(courseDao.getAllCourses());
		courseResponseStructure.setStatuscode(HttpStatus.ACCEPTED.value());
		return new ResponseEntity<CourseResponseStructure<Course>>(courseResponseStructure,HttpStatus.ACCEPTED);
		
	}
	public ResponseEntity<ResponseStructure1<Course>> deleteById(int id) {
		Course courseDb = courseDao.findById(id);
		if(courseDb!=null) {
			structure1.setMsg("course has deleted");
			structure1.setData(courseDao.deleteById(id));
			structure1.setStatusCode(HttpStatus.ACCEPTED.value());
			return new ResponseEntity<ResponseStructure1<Course>>(structure1,HttpStatus.ACCEPTED);
		}else {
			throw new StudentDoesNotExistException("cannot found student");
		}
	}
	public ResponseEntity<ResponseStructure1<Course>> updateCourse(Course course) {
		Course courseDb = courseDao.findById(course.getCid());
		if(courseDb!=null) {
			structure1.setMsg("course details has updated");
			structure1.setData(courseDao.updateCourse(course));
			structure1.setStatusCode(HttpStatus.ACCEPTED.value());
			return new ResponseEntity<ResponseStructure1<Course>>(structure1,HttpStatus.ACCEPTED);
		}else {
			throw new StudentDoesNotExistException("cannot found course");
		}
	}
	public ResponseEntity<ResponseStructure1<Course>> findById(int id) {
		Course courseDb = courseDao.findById(id);
		if(courseDb!=null) {
			structure1.setMsg("course found");
			structure1.setData(courseDb);
			structure1.setStatusCode(HttpStatus.ACCEPTED.value());
			return new ResponseEntity<ResponseStructure1<Course>>(structure1,HttpStatus.ACCEPTED);
		}else {
			throw new StudentDoesNotExistException("course not found");
		}
	}
	public ResponseEntity<ResponseStructure1<Course>> addCourse(Course course) {
		Course courseDb = courseDao.addCourse(course);
		structure1.setMsg("course added");
		structure1.setData(courseDb);
		structure1.setStatusCode(HttpStatus.ACCEPTED.value());
		return new ResponseEntity<ResponseStructure1<Course>>(structure1,HttpStatus.ACCEPTED);
		
	}
	

}
