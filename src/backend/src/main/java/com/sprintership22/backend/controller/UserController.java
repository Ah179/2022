package com.sprintership22.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.sprintership22.backend.model.User;
import com.sprintership22.backend.service.UserService;

@RestController
@RequestMapping("/user")
@CrossOrigin
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@PostMapping("/add")
	public String add(@RequestBody User user) { //Debug line
		
		userService.saveUser(user);
		
		return "new user is added";
	}
	
	@PostMapping("/delete")
	public String delete(@RequestBody User user) { //Debug line
		
		userService.deleteUser(user);
		
		return "user is deleted";
	}
}
