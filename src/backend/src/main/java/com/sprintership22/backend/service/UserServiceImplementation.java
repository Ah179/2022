package com.sprintership22.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.sprintership22.backend.model.User;
import com.sprintership22.backend.repository.UserRepository;

@Service
public class UserServiceImplementation implements UserService {
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private UserProjectsService userProjectService;
	
	@Override
	public User saveUser(User user) {
		if (verifyUser(user))
		{
			return null;
		}
		
		return userRepository.save(user);
	}

	@Override
	public boolean deleteUser(User user) 
	{
		if (!verifyUser(user))
		{
			return false;
		}
		
		userProjectService.deleteUserAndRelatedProjects(user.getEmployeeID());
		userRepository.delete(user);
		return true;
	}

	@Override
	public boolean verifyUser(User user) {
		return userRepository.existsById(user.getEmployeeID());
	}
	
}
