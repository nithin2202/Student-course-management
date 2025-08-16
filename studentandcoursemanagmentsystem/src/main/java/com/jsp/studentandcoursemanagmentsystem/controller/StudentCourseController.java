package com.jsp.studentandcoursemanagmentsystem.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.google.zxing.WriterException;
import com.jsp.studentandcoursemanagmentsystem.dto.Course;
import com.jsp.studentandcoursemanagmentsystem.dto.Student;
import com.jsp.studentandcoursemanagmentsystem.service.StudentCourseService;
import com.jsp.studentandcoursemanagmentsystem.util.ResponseStructure;
import com.jsp.studentandcoursemanagmentsystem.util.ResponseStructureList;

@RestController
@CrossOrigin
public class StudentCourseController {
	@Autowired
	private StudentCourseService studentCourseService;
	@PostMapping("/student/signup")
	public ResponseEntity<ResponseStructure<Student>> saveStudent(@RequestBody Student student) {
		return studentCourseService.saveStudent(student);
	}
	@GetMapping("/student/findstudent/{id}")
	public ResponseEntity<ResponseStructure<Student>> findStudentById(@PathVariable int id) {
		return studentCourseService.findStudentById(id);
	}
	@PostMapping("/student/updatestudent")
	public ResponseEntity<ResponseStructure<Student>> updateStudent(@RequestBody Student student) {
		return studentCourseService.updateStudent(student);
	}
	@DeleteMapping("/student/deletestudent/{id}")
	public ResponseEntity<ResponseStructure<Student>> deleteStudent(@PathVariable int id,@RequestBody Student student) {
		return studentCourseService.deleteStudent(id,student);
	}
	@PostMapping("/student/login")
	public ResponseEntity<ResponseStructure<Student>> login(@RequestBody Student student) {
		return studentCourseService.login(student);
	}
	@PutMapping("/student/uploadimage/{id}")
	public ResponseEntity<ResponseStructure<Student>> uploadImage(@PathVariable int id,@RequestBody MultipartFile file) throws IOException {
		return studentCourseService.uploadImage(id, file);
	}
	@GetMapping("/student/fetchimage/{id}")
	public ResponseEntity<byte[]> fetchImage(@PathVariable int id) {
		return studentCourseService.fetchImage(id);
	}
	@GetMapping("/qrcode/{id}")
	public ResponseEntity<byte[]> generateQrCode(@PathVariable int id) throws WriterException, IOException {
		return studentCourseService.genereateQrCode(id);
	}
	@GetMapping("/student/addcourse/{sid}/{cid}")
	public ResponseEntity<ResponseStructure<Student>> addCourseToStudent(@PathVariable int sid,@PathVariable int cid) {
		return studentCourseService.addCourseToStudent(sid,cid);
		
	}
	@DeleteMapping("/student/deletecourse/{sid},{cid}")
	public ResponseEntity<ResponseStructure<Student>> deleteCourseFromStudnet(@PathVariable int sid,@PathVariable int cid) {
		return studentCourseService.deleteCourseFromStudent(sid, cid);
	}
	@GetMapping("/student/fetchcourse/{sid}")
	public ResponseEntity<ResponseStructureList<Course>> fetchAllCourse(@PathVariable int sid) {
		return studentCourseService.fetchAllCourses(sid);
	}

}
