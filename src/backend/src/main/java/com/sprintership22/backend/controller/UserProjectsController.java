package com.sprintership22.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.sprintership22.backend.model.Project;
import com.sprintership22.backend.model.User;
import com.sprintership22.backend.model.UserProjectObject;
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
	
	@PostMapping("/find")
	public String find(@RequestBody  UserProjectObject userProjectObject) {
		
		int id = userProjectService.findUserProjectID(userProjectObject);
		
		return (id != -1) ? ""+id : "user project does not exist";
	}
	
	
	@PostMapping("/deleteuser")
	public String deleteuser(@RequestBody User user) {
		
		userProjectService.deleteUserAndRelatedProjects(user.getEmployeeID());
		
		return "deleted user from user projects if user exists";
	}
	
	@PostMapping("/deleteproject")
	public String deleteproject(@RequestBody Project project) {
		
		userProjectService.deleteProjectAndRelatedUsers(project.getID());
		
		return "deleted project from user projects if project exists";
	}
}
