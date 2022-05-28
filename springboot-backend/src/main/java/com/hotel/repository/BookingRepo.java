package com.hotel.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.hotel.model.Booking;

public interface BookingRepo extends JpaRepository<Booking, Integer>
{
	@Query("FROM Booking WHERE user_id=?1")
	List<Booking> findByUser(int userId);
}
