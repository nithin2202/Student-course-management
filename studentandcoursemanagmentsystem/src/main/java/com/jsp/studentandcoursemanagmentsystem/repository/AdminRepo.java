package com.jsp.studentandcoursemanagmentsystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.jsp.studentandcoursemanagmentsystem.dto.Admin;

public interface AdminRepo extends JpaRepository<Admin, Integer> {
	@Query("select admin from Admin admin where email=?1")
	Admin findByEmail(String email);

}
