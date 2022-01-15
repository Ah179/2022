package com.sprintership22.backend.service;

import com.sprintership22.backend.model.CreateUserProject;
import com.sprintership22.backend.model.Project;

public interface ProjectService {
	public Project saveProject(CreateUserProject createProject);
	public void deleteProject(Project project);
}
