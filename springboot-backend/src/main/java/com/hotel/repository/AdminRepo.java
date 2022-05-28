package com.hotel.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hotel.model.Admin;

public interface AdminRepo extends JpaRepository<Admin, Integer>{

}
