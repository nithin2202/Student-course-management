package com.jsp.studentandcoursemanagmentsystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.jsp.studentandcoursemanagmentsystem.dto.Course;
import com.jsp.studentandcoursemanagmentsystem.dto.Student;

public interface StudentCourseRepo extends JpaRepository<Student, Integer> {
	@Query ("select student from Student student where email=?1")
	Student findByEmail(String email);
	@Query ("select student from Student student where student.email=?1 and student.password=?2")
	Student login(String email,String password);
	
	
}
