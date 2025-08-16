package com.jsp.studentandcoursemanagmentsystem.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.jsp.studentandcoursemanagmentsystem.dto.Admin;
import com.jsp.studentandcoursemanagmentsystem.service.AdminService;
import com.jsp.studentandcoursemanagmentsystem.util.ResponseStructure;
import com.jsp.studentandcoursemanagmentsystem.util.ResponseStructureList;

@RestController
@CrossOrigin
public class AdminController {
	@Autowired
	private AdminService service;
	@PostMapping("/admin/save")
	public ResponseEntity<ResponseStructure<Admin>> saveAdmin(@RequestBody Admin admin) {
		return service.saveAdmin(admin);
	}
	@PostMapping("/admin/login")
	public ResponseEntity<ResponseStructure<Admin>> login(@RequestBody Admin admin) {
		return service.login(admin);
	}
	@GetMapping("/admin/fetchall")
	public ResponseEntity<ResponseStructureList<Admin>> fetchAll() {
		return service.fetchAll();
	}
	@DeleteMapping("/admin/delete/{id}")
	public ResponseEntity<ResponseStructure<Admin>> deleteById(@PathVariable int id) {
		return service.deleteById(id);
	}
	@GetMapping("/admin/find/{id}")
	public ResponseEntity<ResponseStructure<Admin>> findById(@PathVariable int id) {
		return service.findById(id);
	}
	@PostMapping("/admin/update")
	public ResponseEntity<ResponseStructure<Admin>> updateAdmin(@RequestBody Admin admin) {
		return service.updateAdmin(admin);
	}

}
