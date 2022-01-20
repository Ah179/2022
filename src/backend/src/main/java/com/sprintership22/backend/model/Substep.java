package com.sprintership22.backend.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Substep {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
	
	private int projectID;
	private String name;
	//private String description;
	private boolean status;
	private boolean changed;
	
	/*
	private String  startTime;
	private String endTime;
	private String status;
	*/

	public Substep()
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
	
	public int getProjectID()
	{
		return this.projectID;
	}
	
	public void setProjectID(int projectID)
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
	
	/*
	public String getDescription()
	{
		return this.description;
	}
	
	public void setDescription(String description)
	{
		this.description = description;
	}
	*/
	
	public boolean getStatus()
	{
		return this.status;
	}
	
	public void setStatus(boolean status)
	{
		this.status = status;
	}
	
	public boolean getChanged()
	{
		return this.changed;
	}
	
	public void setChanged(boolean changed)
	{
		this.changed = changed;
	}
	
	/*
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
	*/
}
