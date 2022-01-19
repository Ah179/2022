package com.sprintership22.backend.service;

import java.util.ArrayList;
import java.util.List;

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
	private SubstepService substepService;
	
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
	public Project getProject(int id) {
		return projectRepository.getById(id);
	}
	
	@Override
	public List<Project> getAllProjects(int employeeID)
	{
		List<UserProjects> temp1 = userProjectsService.getUserAndRelatedProjects(employeeID);
		List<Project> temp2 = new ArrayList<>();;
		
		for (int i = 0; i < temp1.size(); i++)
		{
			temp2.add(getProject(temp1.get(i).getProjectID()));
		}
		
		return temp2;
	}
	
	@Override
	public boolean addCollaborator(UserProjectObject userProjectObject) {
		
		if (!verifyProject(userProjectObject.getProject()))
		{
			//System.out.println("bullshit");
			return false;
		}
		
		userProjectsService.saveUserProjects(new UserProjects(userProjectObject.getUser().getEmployeeID(), userProjectObject.getProject().getID()));
		return true;
	}
	
	@Override
	public boolean deleteCollaborator(UserProjectObject userProjectObject) {
		if (verifyProject(userProjectObject.getProject()) && userProjectsService.findUserProjectID(userProjectObject) == -1)
		{
			return false;
		}
		
		userProjectsService.deleteUserProjects(userProjectObject);
		return false;
	}
	
	@Override
	public boolean deleteProject(Project project) {
		
		if (!verifyProject(project))
		{
			return false;
		}
		
		userProjectsService.deleteProjectAndRelatedUsers(project.getID());
		substepService.deleteProjectAndRelatedSubsteps(project.getID());
		projectRepository.delete(project);
		return true;
	}
	
	@Override
	public ArrayList<Project> findProjectByID(int id) {
		
		return projectRepository.findProjectByID(id);
	}

	@Override
	public boolean verifyProject(Project project) {
		
		//System.out.println("TEST ID : "+project.getID());
		//System.out.println("TEST NAME : "+findProjectByID(project.getID()).size());
		return (findProjectByID(project.getID()).size() == 1);
	}
}
