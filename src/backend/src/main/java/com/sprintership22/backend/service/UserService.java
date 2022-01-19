package com.sprintership22.backend.service;

import java.util.ArrayList;

import com.sprintership22.backend.model.User;

public interface UserService {
	public User saveUser(User user);
	public boolean deleteUser(User user);
	public ArrayList<User> findUserByID(int employeeID);
	public boolean verifyUser(User user);
	public ArrayList<User> emailExists(String email);
	public ArrayList<User> findUser(int employeeID, String password);
	public User loginUser(User user);
}
