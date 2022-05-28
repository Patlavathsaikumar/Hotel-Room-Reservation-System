package com.hotel.service;

import java.time.temporal.ChronoUnit;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hotel.model.Booking;
import com.hotel.repository.BookingRepo;
import com.sun.xml.bind.v2.schemagen.xmlschema.NoFixedFacet;

@Service
public class BookingService {
	
	@Autowired
	private BookingRepo bookingRepo;
	
	public List<Booking> getAllBookings()
	{
		return bookingRepo.findAll();
	}
	
	public Booking addBooking(Booking booking)
	{
		
		return bookingRepo.save(booking);
	}
	
	public Booking updateBooking(Booking booking, int id)
	{	
		Booking existingBooking = bookingRepo.findById(id).orElse(null);
		existingBooking.setCheckIn(booking.getCheckIn());
		existingBooking.setCheckOut(booking.getCheckOut());
		existingBooking.setNoOfAdults(booking.getNoOfAdults());
		existingBooking.setNoOfChildren(booking.getNoOfChildren());
		existingBooking.setNoOfDays(booking.getNoOfDays());
		
		return bookingRepo.save(existingBooking);
	}
	
	public String cancelBooking(int id)
	{
		//Room room = findById(id);
		bookingRepo.deleteById(id);
		return "Room Booking cancelled Successfully";
	}
	
	public List<Booking> showUserBookings(int userId){
		List<Booking> bookings = bookingRepo.findAll();
		
		List<Booking> userBookings = new ArrayList<>();
		userBookings.add(bookings.get(1));
		return userBookings;
	}
	
	public List<Booking> showUserBook(int userId){
		return bookingRepo.findByUser(userId);
	}
}
