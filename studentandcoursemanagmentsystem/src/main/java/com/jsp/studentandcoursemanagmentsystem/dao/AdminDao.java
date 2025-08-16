package com.jsp.studentandcoursemanagmentsystem.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.jsp.studentandcoursemanagmentsystem.dto.Admin;
import com.jsp.studentandcoursemanagmentsystem.repository.AdminRepo;

@Repository
public class AdminDao {
	@Autowired
	private AdminRepo repo;
	
	public Admin saveAdmin(Admin admin) {
		return repo.save(admin);
	}
	public Admin login(Admin admin) {
		Admin adminDb = repo.findByEmail(admin.getEmail());
		if(adminDb!=null) {
			if(adminDb.getPassword().equals(admin.getPassword())){
				return adminDb;
			}else {
				return null;
			}
		}else {
			return null;
		}
	}
	public Admin findById(int id) {
		Optional<Admin> adminDb = repo.findById(id);
		if(adminDb.isPresent()) {
			return adminDb.get();
		}else {
			return null;
		}
	}
	public Admin findByEmail(String email) {
		Admin adminDb = repo.findByEmail(email);
		if(adminDb!=null) {
			return adminDb;
		}else {
			return null;
		}
	}
	public List<Admin> fetchAll() {
		List<Admin> adminDb = repo.findAll();
		if(adminDb!=null) {
			return adminDb;
		}else {
			return null;
		}
	}
	public Admin deleteById(int id) {
		Optional<Admin> adminDb = repo.findById(id);
		if(adminDb.isPresent()) {
			repo.deleteById(id);
			return adminDb.get();
		}else {
			return null;
		}
	}
	public Admin updateAdmin(Admin admin) {
		Admin adminDb = repo.findById(admin.getAid()).get();
		if(adminDb!=null) {
			return repo.save(admin);
		}else {
			return null;
		}
	}
	

}
