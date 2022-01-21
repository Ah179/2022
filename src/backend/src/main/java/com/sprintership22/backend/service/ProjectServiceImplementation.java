package com.sprintership22.backend.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.sprintership22.backend.model.Project;
import com.sprintership22.backend.model.Substep;
import com.sprintership22.backend.model.User;
import com.sprintership22.backend.model.UserProjectObject;
import com.sprintership22.backend.model.UserProjects;
import com.sprintership22.backend.repository.ProjectRepository;
import com.sprintership22.backend.repository.UserRepository;

@Service
public class ProjectServiceImplementation implements ProjectService{

	@Autowired
	private ProjectRepository projectRepository;
	
	@Autowired
	private UserProjectsService userProjectsService;
	
	@Autowired
	private SubstepService substepService;
	
	@Autowired
	private UserRepository userRepository;
	
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
		List<Project> temp2 = new ArrayList<>();
		Project temp3;
		
		for (int i = 0; i < temp1.size(); i++)
		{
			temp3 = getProject(temp1.get(i).getProjectID());
			temp3.setStatus(setStatus(temp3.getID()));
			temp2.add(temp3);
		}
		
		return temp2;
	}
	
	@Override
	public float setStatus(int projectID) {
		
		ArrayList<Substep> temp = substepService.getSubsteps(projectID);
		int completed = 0;
		
		if (temp.size() == 0)
		{
			return 0;
		}
		
		for (int i = 0; i < temp.size(); i++)
		{
			if (temp.get(i).getStatus())
			{
				completed++;
			}
		}
		
		return ((float)completed/temp.size())*100;
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
		
		return (findProjectByID(project.getID()).size() == 1);
	}

	@Override
	public List<User> getCollaborators(User user, Project project) {
		
		List<UserProjects> temp1 = userProjectsService.getProjectAndRelatedUsers(project.getID());
		List<User> temp2 = new ArrayList<>();
		
		for (int i = 0; i < temp1.size(); i++)
		{
			if (temp1.get(i).getUserID() != user.getEmployeeID())
			{
				temp2.add(userRepository.getById(temp1.get(i).getUserID()));
			}
		}
		return temp2;
	}
}
