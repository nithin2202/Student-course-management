package com.jsp.studentandcoursemanagmentsystem.service;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.google.zxing.WriterException;
import com.jsp.studentandcoursemanagmentsystem.dao.CourseDao;
import com.jsp.studentandcoursemanagmentsystem.dao.StudentCourseDao;
import com.jsp.studentandcoursemanagmentsystem.dto.Course;
import com.jsp.studentandcoursemanagmentsystem.dto.Student;
import com.jsp.studentandcoursemanagmentsystem.exception.AccountAlredyExistException;
import com.jsp.studentandcoursemanagmentsystem.exception.IncorrectPasswordException;
import com.jsp.studentandcoursemanagmentsystem.exception.EmailMisMatchException;
import com.jsp.studentandcoursemanagmentsystem.exception.StudentDoesNotExistException;
import com.jsp.studentandcoursemanagmentsystem.util.EmailUtil;
import com.jsp.studentandcoursemanagmentsystem.util.QrCodeUtil;
import com.jsp.studentandcoursemanagmentsystem.util.ResponseStructure;
import com.jsp.studentandcoursemanagmentsystem.util.ResponseStructureList;

@Service
public class StudentCourseService {
	@Autowired
	private StudentCourseDao studentCourseDao;
	@Autowired
	private EmailUtil emailUtil;
	
	private CourseDao courseDao;
	
	ResponseStructure<Student> responseStructure=new ResponseStructure<Student>();

	ResponseStructureList<Student> responseStructureList=new ResponseStructureList<Student>();
	
	ResponseStructureList<Course> responseStructureList1=new ResponseStructureList<Course>();
	
	public ResponseEntity<ResponseStructure<Student>> saveStudent(Student student) {
		if(studentCourseDao.findStudentByEmail(student.getEmail())==null) {
			responseStructure.setMsg("Data saved");
			responseStructure.setData(studentCourseDao.saveStudent(student));
			responseStructure.setStatusCode(HttpStatus.ACCEPTED.value());
//			emailUtil.accountCreationMail(student.getEmail());
			return new ResponseEntity<ResponseStructure<Student>>(responseStructure,HttpStatus.ACCEPTED);
		}
		else {
//			emailUtil.accountAlredyExist(student.getEmail());
			throw new AccountAlredyExistException("account alredy existed");
		}
	}
	public ResponseEntity<ResponseStructure<Student>> findStudentById(int id) {
		Student studentDb = studentCourseDao.findStudentById(id);
		if(studentDb!=null) {
			responseStructure.setMsg("user existed with the given id");
			responseStructure.setData(studentDb);
			responseStructure.setStatusCode(HttpStatus.ACCEPTED.value());
			return new ResponseEntity<ResponseStructure<Student>>(responseStructure,HttpStatus.ACCEPTED);
		}
		else {
			throw new StudentDoesNotExistException("student is not found with the given id");
		}
	}
	public ResponseEntity<ResponseStructure<Student>> updateStudent(Student student) {
		Student studentDb = studentCourseDao.findStudentByEmail(student.getEmail());
		if(studentDb!=null) {
			student.setSid(student.getSid());
			responseStructure.setMsg("your details got updated");
			responseStructure.setData(studentCourseDao.updateStudent(student));
			responseStructure.setStatusCode(HttpStatus.ACCEPTED.value());
//			emailUtil.update(student.getEmail());
		}
		else {
			//emailUtil.doesNotExist(student.getEmail());
			throw new StudentDoesNotExistException("we cannot find student with the given mail id");
		}
		return  new ResponseEntity<ResponseStructure<Student>>(responseStructure,HttpStatus.ACCEPTED);
	}
	public ResponseEntity<ResponseStructure<Student>> deleteStudent(int id,Student student) {
		Student studentDb = studentCourseDao.findStudentById(id);
		if(studentDb!=null) {
			responseStructure.setMsg("details of the student got deleted");
			responseStructure.setData(studentCourseDao.deleteStudent(id));
			responseStructure.setStatusCode(HttpStatus.ACCEPTED.value());
			emailUtil.delete(studentDb.getEmail());
			return new ResponseEntity<ResponseStructure<Student>>(responseStructure,HttpStatus.ACCEPTED);
		}
		else {
			//emailUtil.doesNotExist(student.getEmail());
			throw new StudentDoesNotExistException("the account does not exist to delete the account");
		}
		
	}
	public ResponseEntity<ResponseStructure<Student>> login(Student student) {
		Student studentDb = studentCourseDao.findStudentByEmail(student.getEmail());
		if(studentDb!=null) {
			if(studentDb.getPassword().equals(student.getPassword())) {
				responseStructure.setMsg("login success");
				responseStructure.setData(studentCourseDao.login(student.getEmail(),student.getPassword()));
				responseStructure.setStatusCode(HttpStatus.ACCEPTED.value());
//				emailUtil.loginSuccesful(studentDb.getEmail());
				return new ResponseEntity<ResponseStructure<Student>>(responseStructure,HttpStatus.ACCEPTED);
			}
			else{
//				emailUtil.incorrectPassword(student.getEmail());
				throw new IncorrectPasswordException("wrong password");
			}
		}
		else {
			//emailUtil.incorrectEmail(student.getEmail());
			throw new EmailMisMatchException("Invalid emailId");
		}
	}
	public ResponseEntity<ResponseStructure<Student>> uploadImage(int id,MultipartFile file) throws IOException {
		Student studentDb = studentCourseDao.findStudentById(id);
		if(studentDb!=null) {
			studentDb.setSid(id);
			studentDb.setImg(file.getBytes());
			
			responseStructure.setData(studentCourseDao.updateStudent(studentDb));
			responseStructure.setMsg("image uploaded succesfully");
			responseStructure.setStatusCode(HttpStatus.ACCEPTED.value());
			return new ResponseEntity<ResponseStructure<Student>>(responseStructure,HttpStatus.ACCEPTED);
		}
		else {
			throw new StudentDoesNotExistException("student id not found");
		}
	
		
	}
	public ResponseEntity<byte[]> fetchImage(int id) {
		Student studentDb = studentCourseDao.findStudentById(id);
		if(studentDb!=null) {
			byte[] img = studentDb.getImg();
			HttpHeaders headers=new HttpHeaders();
			headers.setContentType(MediaType.IMAGE_PNG);
			headers.setContentType(MediaType.IMAGE_JPEG);
			return new ResponseEntity<byte[]>(img,headers, HttpStatus.OK);
		}
		else {
			throw new StudentDoesNotExistException("student id not found");
		}
		
	}
	public ResponseEntity<byte[]> genereateQrCode(int id) throws WriterException, IOException {
		Student studentDb = studentCourseDao.findStudentById(id);
		if(studentDb!=null) {
			byte[] qrImage = QrCodeUtil.generateQRCodeFromStudent(studentDb, 250, 250);

	        HttpHeaders headers = new HttpHeaders();
	        headers.setContentType(MediaType.IMAGE_PNG);
	        return new ResponseEntity<byte[]>(qrImage,headers, HttpStatus.OK);
			
		}
		else {
			throw new StudentDoesNotExistException("student id not found");
		}
		
	}
	public ResponseEntity<ResponseStructure<Student>> addCourseToStudent(int sid,int cid) {
		Student studentDb = studentCourseDao.addCourseToStudent(sid, cid);
		if(studentDb!=null) {
			responseStructure.setData(studentDb);
			responseStructure.setMsg("Course Added");
			responseStructure.setStatusCode(HttpStatus.ACCEPTED.value());
			return new ResponseEntity<ResponseStructure<Student>>(responseStructure,HttpStatus.ACCEPTED);
		}else {
			throw new StudentDoesNotExistException("student does not found with the id");
		}
	}
	public ResponseEntity<ResponseStructure<Student>> deleteCourseFromStudent(int sid,int cid) {
		Student studentDb = studentCourseDao.findStudentById(sid);
		if(studentDb!=null) {
			Student studentDb1 = studentCourseDao.deleteCourseFromStudent(sid, cid);
			if(studentDb1!=null) {
				responseStructure.setData(studentDb1);
				responseStructure.setMsg("course has delted from student");
				responseStructure.setStatusCode(HttpStatus.ACCEPTED.value());
				return new ResponseEntity<ResponseStructure<Student>>(responseStructure,HttpStatus.ACCEPTED);
			}else {
				throw new StudentDoesNotExistException("course not found in student");
			}
		}else {
			throw new StudentDoesNotExistException("student doesnot found");
		}
	}
	public ResponseEntity<ResponseStructureList<Course>> fetchAllCourses(int sid) {
		Student studentDb = studentCourseDao.findStudentById(sid);
		if(studentDb!=null) {
			responseStructureList1.setData(studentCourseDao.fetchAllCourse(sid));
			responseStructureList1.setMsg("course details fetched succesfully");
			responseStructureList1.setStatuscode(HttpStatus.ACCEPTED.value());
			return new ResponseEntity<ResponseStructureList<Course>>(responseStructureList1,HttpStatus.ACCEPTED);
		}else {
			throw new StudentDoesNotExistException("student could not found");
		}
		
	}

}
	

