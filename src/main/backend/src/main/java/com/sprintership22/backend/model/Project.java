package com.sprintership22.backend.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Project {
	
	@Id
	private int id;
	private String name;
	private String description;
	private String  start_time;
	private String end_time;
	private String status;
	
	public Project()
	{
		
	}
	
	public int getID()
	{
		return this.id;
	}
	
	public void setID(int id)
	{
		this.id = id;
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
		return this.start_time;
	}
	
	public void setStartTime(String start_time)
	{
		this.start_time = start_time;
	}
	
	public String getEndTime()
	{
		return this.end_time;
	}
	
	public void setEndTime(String end_time)
	{
		this.end_time = end_time;
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
