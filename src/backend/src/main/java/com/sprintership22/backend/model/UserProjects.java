package com.sprintership22.backend.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="userprojects")
public class UserProjects {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
	
	private int userID;
	private int projectID;
	
	public UserProjects(int userID, int projectID)
	{
		this.userID = userID;
		this.projectID = projectID;
	}
	
	public int getUserID()
	{
		return this.userID;
	}
	
	public void setUserID(int userID)
	{
		this.userID = userID;
	}
	
	public int getProjectID()
	{
		return this.projectID;
	}
	
	public void setProjectID(int projectID)
	{
		this.projectID = projectID;
	}
}