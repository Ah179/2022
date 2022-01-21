package com.sprintership22.backend.service;

import java.util.ArrayList;
import java.util.List;

import com.sprintership22.backend.model.Project;
import com.sprintership22.backend.model.User;
import com.sprintership22.backend.model.UserProjectObject;

public interface ProjectService {
	public Project saveProject(UserProjectObject userProjectObject);
	public Project getProject(int id);
	public List<Project> getAllProjects(int employeeID);
	public float setStatus(int projectID);
	public boolean addCollaborator(UserProjectObject userProjectObject);
	public boolean deleteCollaborator(UserProjectObject userProjectObject);
	public boolean deleteProject(Project project);
	public ArrayList<Project> findProjectByID(int id);
	public boolean verifyProject(Project project);
	public List<User> getCollaborators(User user, Project project);
}
