package com.sprintership22.backend.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Substep {
	
	@Id
	private int projectID;
	
	private String name;
	private String description;
	private String  startTime;
	private String endTime;
	private String status;

	public Substep()
	{
		
	}
	
	public int getProjectID()
	{
		return this.projectID;
	}
	
	public void setID(int projectID)
	{
		this.projectID = projectID;
	}
	
	public String getName()
	{
		return this.name;
	}
	
	public void setName(String name)
	{
		this.name = name;
	}
	
	public String getDescription()
	{
		return this.description;
	}
	
	public void setDescription(String description)
	{
		this.description = description;
	}
	
	public String getStartTime()
	{
		return this.startTime;
	}
	
	public void setStartTime(String startTime)
	{
		this.startTime = startTime;
	}
	
	public String getEndTime()
	{
		return this.endTime;
	}
	
	public void setEndTime(String endTime)
	{
		this.endTime = endTime;
	}
	
	public String getStatus()
	{
		return this.status;
	}
	
	public void setStatus(String status)
	{
		this.status = status;
	}
}
