package com.sprintership22.backend.model;

public class UserProjectObject {
	
	private User user;
	private Project project;

	public UserProjectObject(User user, Project project)
	{
		this.user = user;
		this.project = project;
	}
	
	public User getUser()
	{
		return this.user;
	}
	
	public void setUser(User user)
	{
		this.user = user;
	}
	
	public Project getProject()
	{
		return this.project;
	}
	
	public void setProject(Project project)
	{
		this.project = project;
	}
}
