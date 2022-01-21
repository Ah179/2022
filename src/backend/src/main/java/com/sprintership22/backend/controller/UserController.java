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
	public boolean add(@RequestBody User user) {
		
		User temp = userService.saveUser(user);
		
		return (temp != null);
	}
	
	@PostMapping("/delete")
	public String delete(@RequestBody User user) {
		
		boolean temp = userService.deleteUser(user);
		
		return (temp) ? "user is deleted" : "user could not be deleted because user does not exist";
	}
	
	@PostMapping("/verify")
	public String verify(@RequestBody User user) {
		
		boolean temp = userService.verifyUser(user);
		
		return (temp) ? "user is in the system" : "user is not in the system";
	}
	
	@PostMapping("/login")
	public boolean login(@RequestBody User user) {
		
		if (userService.loginUser(user) == null)
		{
			return false;
		}
		
		return true;
	}
	
	@PostMapping("/getuser")
	public User getuser(@RequestBody User user) {
		return userService.getUser(user.getEmployeeID());
	}

}
