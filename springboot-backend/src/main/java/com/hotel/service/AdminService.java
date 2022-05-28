package com.hotel.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hotel.model.Admin;
import com.hotel.model.Authentication;
import com.hotel.repository.AdminRepo;

@Service
public class AdminService {
	
	@Autowired
	private AdminRepo adminRepo;
	
	public String deleteAdmin(int id)
	{
		//Room room = findById(id);
		adminRepo.deleteById(id);
		return "Admin Deleted Successfully";
	}
	
	public Admin addAdmin(Admin admin)
	{
		return adminRepo.save(admin);
	}
	
	public Admin updateAdmin(Admin admin, int id)
	{	
		Admin existingAdmin = adminRepo.findById(id).orElse(null);
		existingAdmin.setName(admin.getName());
		existingAdmin.setEmail(admin.getEmail());
		existingAdmin.setPassword(admin.getPassword());
		
		return adminRepo.save(existingAdmin);
	}
	
	public List<Admin> getAllAdmins(){
		return adminRepo.findAll();
	}
	
	public Admin getAdmin(int id) {
		return adminRepo.findById(id).get();
	}
	
	public Admin authenticateAdmin(Authentication auth)
	{
		List<Admin> list = adminRepo.findAll();
		for(Admin admin: list)
		{
			if(admin.getEmail().equalsIgnoreCase(auth.getEmail()) && admin.getPassword().equalsIgnoreCase(auth.getPassword()))
			{
				return admin;
			}
		}
		return null;
	}
}
