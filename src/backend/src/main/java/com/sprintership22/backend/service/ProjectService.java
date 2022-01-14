package com.sprintership22.backend.service;

import com.sprintership22.backend.model.Project;
import com.sprintership22.backend.model.User;

public interface ProjectService {
	public Project saveProject(User user, Project project);
	public void deleteProject(Project project);
}
