package com.sprintership22.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.sprintership22.backend.model.Project;
import com.sprintership22.backend.service.ProjectService;

@RestController
@RequestMapping("/project")
@CrossOrigin
public class ProjectController {

	@Autowired
	private ProjectService projectService;
	
	@PostMapping("/add")
	public String add(@RequestBody Project project) {
		
		projectService.saveProject(project);
		
		return "new project is added";
	}
	
	@PostMapping("/delete")
	public String delete(@RequestBody Project project) {
		projectService.deleteProject(project);
		
		return "project has been deleted";
	}
}
