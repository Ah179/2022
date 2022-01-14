package com.sprintership22.backend.service;

import com.sprintership22.backend.model.User;

public interface UserService {
	public User saveUser(User user);
	public boolean deleteUser(User user);
	public boolean verifyUser(User user);
}
