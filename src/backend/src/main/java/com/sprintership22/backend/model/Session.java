package com.sprintership22.backend.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="session")
public class Session {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private int sessionID;
	
	private int currUser;
	
	public Session(int currUser)
	{
		this.currUser = currUser;
	}
	
	public Session()
	{
	}
	
	public int getSessionID()
	{
		return this.sessionID;
	}
	
	public void setSessionID(int sessionID)
	{
		this.sessionID = sessionID;
	}
	
	public int getCurrentUser()
	{
		return this.currUser;
	}
	
	public void setCurrentUser(int currUser)
	{
		this.currUser = currUser;
	}
}
