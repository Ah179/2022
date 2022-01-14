package com.sprintership22.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.sprintership22.backend.model.UserProjects;
import com.sprintership22.backend.service.UserProjectsService;

@RestController
@RequestMapping("/userprojects")
@CrossOrigin
public class UserProjectsController {
	
	@Autowired
	private UserProjectsService userProjectService;
	
	@PostMapping("/add")
	public String add(@RequestBody UserProjects userProjects) {
		
		userProjectService.saveUserProjects(userProjects);
		
		return "new user project is added";
	}
}
