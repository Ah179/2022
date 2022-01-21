package com.sprintership22.backend.service;

import java.util.ArrayList;

import com.sprintership22.backend.model.Session;

public interface SessionService {
	public ArrayList<Session> findIDZero(int sessionID);
	public void saveSession(int user);
	public int getUser();
}
