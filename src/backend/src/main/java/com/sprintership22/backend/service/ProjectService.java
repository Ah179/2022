package com.sprintership22.backend.service;

import com.sprintership22.backend.model.Project;
import com.sprintership22.backend.model.UserProjectObject;

public interface ProjectService {
	public Project saveProject(UserProjectObject userProjectObject);
	public boolean addCollaborator(UserProjectObject userProjectObject);
	public boolean deleteCollaborator(UserProjectObject userProjectObject);
	public boolean deleteProject(Project project);
	public boolean verifyProject(Project project);
}
