package com.sprintership22.backend.service;

import java.util.ArrayList;

import com.sprintership22.backend.model.User;

public interface UserService {
	public User saveUser(User user);
	public boolean deleteUser(User user);
	public boolean verifyUser(User user);
	public ArrayList<User> emailExists(String email);
	public ArrayList<User> findUser(String email, String password);
	public User loginUser(User user);
}
