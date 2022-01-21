package com.sprintership22.backend.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="session")
public class Session {
	
	@Id
	//@GeneratedValue(strategy = GenerationType.IDENTITY)
    private int sessionID;
	
	private int currUser;
	
	public Session(int sessionID, int currUser)
	{
		this.sessionID = sessionID;
		this.currUser = currUser;
	}
	
	public Session()
	{
		//this.sessionID = 0;
	}
	
	public int getSessionID()
	{
		return this.sessionID;
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
