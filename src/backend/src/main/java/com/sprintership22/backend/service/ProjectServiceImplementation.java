package com.sprintership22.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.sprintership22.backend.model.Project;
import com.sprintership22.backend.model.User;
import com.sprintership22.backend.model.UserProjects;
import com.sprintership22.backend.repository.ProjectRepository;

@Service
public class ProjectServiceImplementation implements ProjectService{

	@Autowired
	private ProjectRepository projectRepository;
	private UserProjectsService userProjectsService;
	
	@Override
	public Project saveProject(User user, Project project) {
		userProjectsService.saveUserProjects(new UserProjects(user.getEmployeeID(), project.getID()));
		return projectRepository.save(project);
	}
	
	@Override
	public void deleteProject(Project project) {
		projectRepository.delete(project);
	}

}
