package com.sprintership22.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
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

}
