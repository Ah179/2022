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
		
		User temp = userService.saveUser(user);
		
		if (temp == null)
		{
			return "user was not able to be added";
		}
		
		return "new user is added";
	}
	
	@PostMapping("/delete")
	public String delete(@RequestBody User user) { //Debug line
		
		Boolean temp = userService.deleteUser(user);
		
		if (!temp)
		{
			return "user was not able to be deleted";
		}
		
		return "user is deleted";
	}
	
	@PostMapping("/verify")
	public String verify(@RequestBody User user) { //Debug line
		
		Boolean temp = userService.verifyUser(user);
		
		if (!temp)
		{
			return "user is not in the system";
		}
		
		return "user is in the system";
	}
	
	@PostMapping("/login")
	public String login(@RequestBody User user) {
		Boolean temp = userService.loginUser(user)

		if (!temp){
			return  "Invalid"
		}
		return "Success";
	}
}
