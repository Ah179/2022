package com.sprintership22.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.sprintership22.backend.model.Project;
import com.sprintership22.backend.model.UserProjectObject;
import com.sprintership22.backend.service.ProjectService;

@RestController
@RequestMapping("/project")
@CrossOrigin
public class ProjectController {

	@Autowired
	private ProjectService projectService;
	
	@PostMapping("/add")
	public String add(@RequestBody  UserProjectObject userProjectObject) {
		
		Project temp = projectService.saveProject(userProjectObject);
		
		return (temp != null) ? "new project is added" : "project could not be added because project with duplicate ID exist";
	}
	
	@PostMapping("/delete")
	public String delete(@RequestBody Project project) {
		
		boolean temp = projectService.deleteProject(project);
		
		return (temp) ? "project has been deleted" : "project could not be deleted because project does not exist";
	}
}
