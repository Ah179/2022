package com.sprintership22.backend.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sprintership22.backend.model.Session;
import com.sprintership22.backend.repository.SessionRepository;

@Service
public class SessionServiceImplementation implements SessionService{

	@Autowired
	SessionRepository sessionRepository;
	
	@Override
	public ArrayList<Session> findIDZero(int sessionID) {
		return sessionRepository.findIDZero(sessionID);
	}
	
	@Override
	public void saveSession(int user) {
		
		ArrayList<Session> temp1 = findIDZero(0);
		
		if (temp1.size() == 0)
		{
			sessionRepository.save(new Session(0, user));
		}
		else
		{
			//System.out.println("WHYYY : "+sessionRepository.getById(0));
			Session temp2 = temp1.get(0);
			temp2.setCurrentUser(user);
			sessionRepository.save(temp2);
		}
	}

	@Override
	public int getUser() {
		
		ArrayList<Session> temp = findIDZero(0);
		
		if (temp.size() == 1)
		{
			return sessionRepository.getById(0).getCurrentUser();
		}
		
		return -1;
	}
}
