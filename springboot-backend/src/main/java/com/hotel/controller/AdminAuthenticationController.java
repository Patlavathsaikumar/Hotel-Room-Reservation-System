package com.hotel.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.hotel.model.Admin;
import com.hotel.model.Authentication;
import com.hotel.service.AdminService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class AdminAuthenticationController 
{
	@Autowired
	private AdminService adminService;
	
	@PostMapping("/admin-basicauth")
	public Admin getAdminDataForValidation(@RequestBody Authentication auth)
	{
		Admin credentialsMatched;
		credentialsMatched = adminService.authenticateAdmin(auth);
		return credentialsMatched;
	}
}

