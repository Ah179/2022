package com.sprintership22.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.sprintership22.backend.model.CreateUserProject;
import com.sprintership22.backend.model.Project;
import com.sprintership22.backend.model.UserProjects;
import com.sprintership22.backend.repository.ProjectRepository;

@Service
public class ProjectServiceImplementation implements ProjectService{

	@Autowired
	private ProjectRepository projectRepository;
	
	@Autowired
	private UserProjectsService userProjectsService;
	
	@Override
	public Project saveProject(CreateUserProject createUserProject) {
		userProjectsService.saveUserProjects(new UserProjects(createUserProject.getUser().getEmployeeID(), createUserProject.getProject().getID()));
		return projectRepository.save(createUserProject.getProject());
	}
	
	@Override
	public void deleteProject(Project project) {
		projectRepository.delete(project);
	}

}
