package com.sprintership22.backend.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties({"hibernateLazyInitializer"})
@Entity
@Table(name="user")
public class User 
{	
	@Id
	private int employeeID;
	
	private String firstName;
	private String lastName;
	private String companyRole;
	private String email;
	private String password;
	
	public User()
	{
		
	}
	
	public int getEmployeeID()
	{
		return this.employeeID;
	}
	
	public void setEmployeeID(int employeeID)
	{
		this.employeeID = employeeID;
	}
	
	public String getFirstName()
	{
		return this.firstName;
	}
	
	public void setFirstName(String firstName)
	{
		this.firstName = firstName;
	}
	
	public String getLastName()
	{
		return this.lastName;
	}
	
	public void setLastName(String lastName)
	{
		this.lastName = lastName;
	}
	
	public String getCompanyRole()
	{
		return this.companyRole;
	}
	
	public void setCompanyRole(String companyRole)
	{
		this.companyRole = companyRole;
	}
	
	public String getEmail()
	{
		return this.email;
	}
	
	public void setEmail(String email)
	{
		this.email = email;
	}
	
	public String getPassword()
	{
		return this.password;
	}
	
	public void setPassword(String password)
	{
		this.password = password;
	}

}
