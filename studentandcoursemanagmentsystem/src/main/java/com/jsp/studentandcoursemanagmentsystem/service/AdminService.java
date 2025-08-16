package com.jsp.studentandcoursemanagmentsystem.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.jsp.studentandcoursemanagmentsystem.dao.AdminDao;
import com.jsp.studentandcoursemanagmentsystem.dto.Admin;
import com.jsp.studentandcoursemanagmentsystem.exception.StudentDoesNotExistException;
import com.jsp.studentandcoursemanagmentsystem.util.ResponseStructure;
import com.jsp.studentandcoursemanagmentsystem.util.ResponseStructureList;

@Service
public class AdminService {
	@Autowired
	private AdminDao dao;
	
	ResponseStructure<Admin> structure=new ResponseStructure<Admin>();
	ResponseStructureList<Admin> structure1=new ResponseStructureList<Admin>();
	
	public ResponseEntity<ResponseStructure<Admin>> saveAdmin(Admin admin) {
		structure.setData(dao.saveAdmin(admin));
		structure.setMsg("admin saved");
		structure.setStatusCode(HttpStatus.ACCEPTED.value());
		return new ResponseEntity<ResponseStructure<Admin>>(structure,HttpStatus.ACCEPTED);
	}
	public ResponseEntity<ResponseStructure<Admin>> login(Admin admin) {
		Admin adminDb = dao.findByEmail(admin.getEmail());
		if(adminDb!=null) {
			Admin adminDb1 = dao.login(admin);
			if(adminDb1!=null) {
				structure.setData(dao.login(adminDb));
				structure.setMsg("login succesful");
				structure.setStatusCode(HttpStatus.ACCEPTED.value());
				return new ResponseEntity<ResponseStructure<Admin>>(structure,HttpStatus.ACCEPTED);
			}else {
				throw new StudentDoesNotExistException("Password not foound");
			}
		}else {
			throw new StudentDoesNotExistException("admin not found");
		}
	}
	public ResponseEntity<ResponseStructureList<Admin>> fetchAll() {
		List<Admin> adminDb = dao.fetchAll();
		if(adminDb!=null) {
			structure1.setMsg("details got succesfully");
			structure1.setData(adminDb);
			structure1.setStatuscode(HttpStatus.ACCEPTED.value());
			return new ResponseEntity<ResponseStructureList<Admin>>(structure1,HttpStatus.ACCEPTED);
		}else {
			throw new StudentDoesNotExistException("cannot get the details");
		}
	}
	public ResponseEntity<ResponseStructure<Admin>> deleteById(int id) {
		Admin adminDb = dao.findById(id);
		if(adminDb!=null) {
			structure.setMsg("admin details deleted succesfully");
			structure.setData(dao.deleteById(id));
			structure.setStatusCode(HttpStatus.ACCEPTED.value());
			return new ResponseEntity<ResponseStructure<Admin>>(structure,HttpStatus.ACCEPTED);
		}else {
			throw new StudentDoesNotExistException("admin does not found");
		}
	}
	public ResponseEntity<ResponseStructure<Admin>> findById(int id) {
		Admin adminDb = dao.findById(id);
		if(adminDb!=null) {
			structure.setMsg("admin found");
			structure.setData(adminDb);
			structure.setStatusCode(HttpStatus.ACCEPTED.value());
			return new ResponseEntity<ResponseStructure<Admin>>(structure,HttpStatus.ACCEPTED);
		}else {
			throw new StudentDoesNotExistException("admin not found");
		}
	}
	public ResponseEntity<ResponseStructure<Admin>> updateAdmin(Admin admin) {
		Admin adminDb = dao.findById(admin.getAid());
		if(adminDb!=null) {
			structure.setMsg("admin updated");
			structure.setData(dao.updateAdmin(admin));
			structure.setStatusCode(HttpStatus.ACCEPTED.value());
			return new ResponseEntity<ResponseStructure<Admin>>(structure,HttpStatus.ACCEPTED);
		}else {
			throw new StudentDoesNotExistException("admin not found");
		}
	}
	

}
