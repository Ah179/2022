package com.sprintership22.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sprintership22.backend.model.Session;
import com.sprintership22.backend.repository.SessionRepository;

@Service
public class SessionServiceImplementation implements SessionService{

	@Autowired
	SessionRepository sessionRepository;
	
	@Override
	public void saveSession(int user) {
		
		sessionRepository.deleteAll();
		sessionRepository.save(new Session(user));
		/*
		Session temp = sessionRepository.getById(1);
		
		if (sessionRepository.e == null)
		{
			sessionRepository.save(new Session(user));
		}
		else
		{
			temp.setCurrentUser(user);
			sessionRepository.save(temp);
		}
		*/
	}

	@Override
	public int getUser() {
		
		return sessionRepository.getById(1).getCurrentUser();
	}

}
