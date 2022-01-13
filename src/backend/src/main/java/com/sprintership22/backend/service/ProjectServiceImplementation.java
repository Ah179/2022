package com.sprintership22.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.sprintership22.backend.model.Project;
import com.sprintership22.backend.repository.ProjectRepository;

@Service
public class ProjectServiceImplementation implements ProjectService{

	@Autowired
	private ProjectRepository projectRepository;
	
	@Override
	public Project saveProject(Project project) {
		return projectRepository.save(project);
	}

}
