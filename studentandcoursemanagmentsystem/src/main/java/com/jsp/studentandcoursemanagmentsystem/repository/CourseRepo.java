package com.jsp.studentandcoursemanagmentsystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jsp.studentandcoursemanagmentsystem.dto.Course;

public interface CourseRepo extends JpaRepository<Course, Integer>{

}
