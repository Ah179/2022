package com.sprintership22.backend.model;

public class CreateUserProject {
	
	private User user;
	private Project project;

	public CreateUserProject()
	{
		
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
