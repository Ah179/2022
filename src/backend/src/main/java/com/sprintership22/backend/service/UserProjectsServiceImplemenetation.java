package com.sprintership22.backend.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.sprintership22.backend.model.UserProjectObject;
import com.sprintership22.backend.model.UserProjects;
import com.sprintership22.backend.repository.UserProjectsRepository;

@Service
public class UserProjectsServiceImplemenetation implements UserProjectsService {
	
	@Autowired
	private UserProjectsRepository userProjectsRepository;

	@Override
	public UserProjects saveUserProjects(UserProjects userProjects) 
	{
		return userProjectsRepository.save(userProjects);
	}
	
	@Override
	public void deleteUserProjects(UserProjects userProjects) {
		
		userProjectsRepository.delete(userProjects);
	}
	
	
	@Override
	public ArrayList<UserProjects> getUserAndRelatedProjects(int userID) {
		
		return userProjectsRepository.getUserAndRelatedProjects(userID);
	}
	
	@Override
	public void deleteUserAndRelatedProjects(int userID) {
		
		ArrayList<UserProjects> temp = getUserAndRelatedProjects(userID);

		for (int i = 0; i < temp.size(); i++)
		{
			userProjectsRepository.delete(temp.get(i));;
		}
	}
	
	@Override
	public ArrayList<UserProjects> getProjectAndRelatedUsers(int projectID) {
		
		return userProjectsRepository.getProjectAndRelatedUsers(projectID);
	}
	
	@Override
	public void deleteProjectAndRelatedUsers(int projectID) {
		
		ArrayList<UserProjects> temp = getProjectAndRelatedUsers(projectID);
		
		for (int i = 0; i < temp.size(); i++)
		{
			userProjectsRepository.delete(temp.get(i));;
		}
	}
	
	@Override
	public ArrayList<UserProjects> findUserProjectID(int userID, int projectID) {
		
		return (ArrayList<UserProjects>) userProjectsRepository.findUserProjectID(userID, projectID);
	}
	
	@Override
	public int findUserProjectID(UserProjectObject userProjectObject) {
		
		ArrayList<UserProjects> temp = findUserProjectID(userProjectObject.getUser().getEmployeeID(), userProjectObject.getProject().getID());
		return (temp.size() == 1) ? temp.get(0).getID() : -1;
	}

	@Override
	public void deleteUserProjects(UserProjectObject userProjectObject) {
		
		userProjectsRepository.deleteById(findUserProjectID(userProjectObject));
	}
}
