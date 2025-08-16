package com.jsp.studentandcoursemanagmentsystem.dao;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.jsp.studentandcoursemanagmentsystem.dto.Course;
import com.jsp.studentandcoursemanagmentsystem.dto.Student;
import com.jsp.studentandcoursemanagmentsystem.exception.DuplicateEntriesException;
import com.jsp.studentandcoursemanagmentsystem.exception.StudentDoesNotExistException;
import com.jsp.studentandcoursemanagmentsystem.repository.CourseRepo;
import com.jsp.studentandcoursemanagmentsystem.repository.StudentCourseRepo;

@Repository
public class StudentCourseDao {
	@Autowired
	private StudentCourseRepo studentCourseRepo;
	@Autowired
	private CourseRepo repo;
	
	//Student student;
	public Student saveStudent(Student student) {
		return studentCourseRepo.save(student);
	}
	public Student findStudentById(int id) {
		Optional<Student> studentDb = studentCourseRepo.findById(id);
		if(studentDb.isEmpty()) return null;
		else return studentDb.get();
	}
	public Student findStudentByEmail(String email) {
		Student studentDb = studentCourseRepo.findByEmail(email);
		if(studentDb!=null) return studentDb;
		else return null;
	}
	public Student updateStudent(Student student) {
		return studentCourseRepo.save(student);
	}
	public Student deleteStudent(int id) {
		Optional<Student> studentDb = studentCourseRepo.findById(id);
		if(studentDb.isEmpty()) return null;
		else {
			studentCourseRepo.deleteById(id);
			return studentDb.get();
		}
	}
	public Student login(String email,String password) {
		return studentCourseRepo.login(email, password);
	}
	public Student addCourseToStudent(int sid,int cid) {
		Student student=studentCourseRepo.findById(sid).get();
		Course course=repo.findById(cid).get();
		if(student!=null && course!=null) {
			List<Course> listCourses = student.getCourses();
			if(!listCourses.contains(course)) {
				listCourses.add(course);
				student.setCourses(listCourses);
				studentCourseRepo.save(student);
				return student;
			}else {
				throw new DuplicateEntriesException("course alredy exist in the student id");
			}
		}else {
			return null;
		}
	}
	public Student deleteCourseFromStudent(int sid,int cid) {
		Student student = studentCourseRepo.findById(sid).get();
		Course course = repo.findById(cid).get();
		if(student!=null && course!=null) {
				List<Course> listCourse = student.getCourses();
				if(listCourse.contains(course)) {
					listCourse.remove(course);
					student.setCourses(listCourse);
					studentCourseRepo.save(student);
					return student;
				}
					return null;
		}else {
			return null;
		}
	}
	public List<Course> fetchAllCourse(int sid) {
		Student courseDb = studentCourseRepo.findById(sid).get();
		if(courseDb!=null) {
			return courseDb.getCourses();
		}else {
			return null;
		}
	}
}
