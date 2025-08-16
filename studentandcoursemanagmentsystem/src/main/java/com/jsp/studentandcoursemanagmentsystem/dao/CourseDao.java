package com.jsp.studentandcoursemanagmentsystem.dao;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.jsp.studentandcoursemanagmentsystem.dto.Course;
import com.jsp.studentandcoursemanagmentsystem.repository.CourseRepo;

@Repository
public class CourseDao {
	@Autowired
	private CourseRepo courseRepo;
	
	
	public List<Course> saveCourse(List<Course> courses) {
		List<Course> courseDb=new ArrayList<Course>();
		for(Course course2:courses) {
			courseDb.add(courseRepo.save(course2));
		}
		return courseDb;
	}
	public List<Course> getAllCourses() {
		return courseRepo.findAll();
		
	}
	public Course deleteById(int id) {
		Optional<Course> courseDb = courseRepo.findById(id);
		if(courseDb.isPresent()) {
			courseRepo.deleteById(id);
			return courseDb.get();
		}else {
			return null;
		}
	}
	public Course findById(int id) {
		return courseRepo.findById(id).get();
	}
	public Course updateCourse(Course course) {
		Optional<Course> courseDb = courseRepo.findById(course.getCid());
		if(courseDb.isPresent()) {
			return courseRepo.save(course);
		}else {
			return null;
		}
	}
	public Course addCourse(Course course) {
		return courseRepo.save(course);
	}

}
