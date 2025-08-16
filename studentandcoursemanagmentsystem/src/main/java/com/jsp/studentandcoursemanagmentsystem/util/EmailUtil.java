package com.jsp.studentandcoursemanagmentsystem.util;

import java.io.IOException;

import org.hibernate.annotations.Comment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.FileSystemResource;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import java.io.File;
@Component
public class EmailUtil {
		@Autowired
	    private JavaMailSender mailSender;
	    SimpleMailMessage message = new SimpleMailMessage();
	    public void accountCreationMail(String to) {
	        message.setTo(to);
	        message.setSubject("account created");
	        message.setText("your account has been created");
	        mailSender.send(message);
	    }
	    public void accountAlredyExist(String to) {
	        message.setTo(to);
	        message.setSubject("account alredy exist");
	        message.setText("your account alredy exist you can proceed to login");
	        mailSender.send(message);
	    }
	    public void update(String to) {
	        message.setTo(to);
	        message.setSubject("details updated....");
	        message.setText("whatever modification you did has performed on your data");
	        mailSender.send(message);
	    }
	    public void doesNotExist(String to) {
			message.setTo(to);
			message.setSubject("Student account Does not Exist");
			message.setText("student does not exist to update the details please sign up first");
			mailSender.send(message);
		}
	    public void delete(String to) {
			message.setTo(to);
			message.setSubject("Student account got deleted");
			message.setText("succesfully student account deleted");
			mailSender.send(message);
		}
	    public void loginSuccesful(String to) {
			message.setTo(to);
			message.setSubject("logged in succefully🤞🤞🤞");
			message.setText("the details you entered were correct and you've logged in succefully");
			mailSender.send(message);
		}
//	    public void incorrectEmail(String to) {
//			message.setTo(to);
//			message.setSubject("Email Mismatch😒😒😒");
//			message.setText("The email you've entered is incorrect please provide correct email");
//			mailSender.send(message);
//		}
	    public void incorrectPassword(String to) {
			message.setTo(to);
			message.setSubject("incorrect password");
			message.setText("the password you have entered is incorrect");
			mailSender.send(message);
		}
	    	
	

}
