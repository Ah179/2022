package com.sprintership22.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.sprintership22.backend.model.Project;
import com.sprintership22.backend.model.UserProjectObject;
import com.sprintership22.backend.model.UserProjects;
import com.sprintership22.backend.repository.ProjectRepository;

@Service
public class ProjectServiceImplementation implements ProjectService{

	@Autowired
	private ProjectRepository projectRepository;
	
	@Autowired
	private UserProjectsService userProjectsService;
	
	@Autowired
	private UserProjectsService userProjectService;
	
	@Override
	public Project saveProject(UserProjectObject userProjectObject) {
		
		if (verifyProject(userProjectObject.getProject()))
		{
			return null;
		}
		
		userProjectsService.saveUserProjects(new UserProjects(userProjectObject.getUser().getEmployeeID(), userProjectObject.getProject().getID()));
		return projectRepository.save(userProjectObject.getProject());
	}
	
	@Override
	public boolean addCollaborator(UserProjectObject userProjectObject) {
		// TODO Auto-generated method stub
		return false;
	}
	
	@Override
	public boolean deleteProject(Project project) {
		
		if (!verifyProject(project))
		{
			return false;
		}
		
		userProjectService.deleteProjectAndRelatedUsers(project.getID());
		projectRepository.delete(project);
		return true;
	}

	@Override
	public boolean verifyProject(Project project) {
		
		return projectRepository.existsById(project.getID());
	}
}
