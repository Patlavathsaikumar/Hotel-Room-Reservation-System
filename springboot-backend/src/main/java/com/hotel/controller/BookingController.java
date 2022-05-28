package com.hotel.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.hotel.model.Booking;
import com.hotel.service.BookingService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class BookingController 
{
	@Autowired
	private BookingService bookingService;
	
	@GetMapping("/bookings")
	public List<Booking> showBookings()
	{
		return bookingService.getAllBookings();
	}
	
	@PostMapping("/bookings")
	public Booking addBooking(@RequestBody Booking booking)
	{
		return bookingService.addBooking(booking);
	}
	
	@PutMapping("/bookings/{id}")
	public ResponseEntity<Booking> updateBooking(@RequestBody Booking booking, @PathVariable int id)
	{
		bookingService.updateBooking(booking, id);
		return new ResponseEntity<Booking>(booking, HttpStatus.OK);
	}
	
	@DeleteMapping("/bookings/{id}")
	public String cancelBooking(@PathVariable int id)
	{
		return bookingService.cancelBooking(id);
	}
	
	@GetMapping("bookings/{userId}")
	public List<Booking> showBooking(@PathVariable int userId){
		return bookingService.showUserBook(userId);
	}
}
