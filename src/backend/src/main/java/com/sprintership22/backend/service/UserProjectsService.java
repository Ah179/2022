package com.sprintership22.backend.service;

import java.util.ArrayList;
import com.sprintership22.backend.model.UserProjectObject;
import com.sprintership22.backend.model.UserProjects;

public interface UserProjectsService {
	public UserProjects saveUserProjects(UserProjects userProjects);
	public void deleteUserProjects(UserProjects userProjects);
	public void deleteUserProjects(UserProjectObject userProjectObject);
	public ArrayList<UserProjects> getUserAndRelatedProjects(int userID);
	public void deleteUserAndRelatedProjects(int userID);
	public ArrayList<UserProjects> getProjectAndRelatedUsers(int projectID);
	public void deleteProjectAndRelatedUsers(int projectID);
	public ArrayList<UserProjects> findUserProjectID(int userID, int projectID);
	public int findUserProjectID(UserProjectObject userProjectObject);
}
