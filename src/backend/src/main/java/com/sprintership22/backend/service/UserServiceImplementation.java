package com.sprintership22.backend.service;

import java.util.ArrayList;

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
	public ArrayList<User> findUserByID(int employeeID) {
		
		return userRepository.findUserByID(employeeID);
	}

	@Override
	public boolean verifyUser(User user) {
		
		ArrayList<User> temp1 = emailExists(user.getEmail());
		ArrayList<User> temp2 = findUserByID(user.getEmployeeID());
		
		if (temp1.size() == 1 || temp2.size() == 1)
		{
			return true;
		}
	
		return false;
	}
	
	@Override
	public ArrayList<User> emailExists(String email) {
		return userRepository.emailExists(email);
	}

	@Override
	public ArrayList<User> findUser(int employeeID, String password) {
		
		return userRepository.findUser(employeeID, password);
	}

	@Override
	public User loginUser(User user) {
		
		ArrayList<User> temp = findUser(user.getEmployeeID(), user.getPassword());
		
		if (temp.size() == 0)
		{
			return null;
		}
		
		return temp.get(0);
	}

	@Override
	public User getUser(int employeeID) {
		
		ArrayList<User> temp = userRepository.findUserByID(employeeID);
		
		if (temp.size() == 1)
		{
			return temp.get(0);
		}
		
		return null;
	}
}
