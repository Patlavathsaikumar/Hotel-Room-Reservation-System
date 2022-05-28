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

import com.hotel.model.Room;
import com.hotel.service.RoomService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class RoomController {
	@Autowired
	private RoomService roomService;
	
	@GetMapping("/rooms")
	public List<Room> showRooms(){
		return roomService.getAllRooms();
	}
	
	@GetMapping("/rooms/{id}")
	public Room showRoom(@PathVariable int id)
	{
		return roomService.getRoomById(id);
	}
	
	@PostMapping("/rooms")
	public Room addRoom(@RequestBody Room room)
	{
		return roomService.addRoom(room);
	}
	
	@PutMapping("/rooms/{id}")
	public ResponseEntity<Room> updateRoom(@RequestBody Room room, @PathVariable int id)
	{
		roomService.updateRoom(room, id);
		return new ResponseEntity<Room>(room, HttpStatus.OK);
	}
	
	@DeleteMapping("/rooms/{id}")
	public String deleteRoom(@PathVariable int id)
	{
		return roomService.deleteRoom(id);
	}
}
