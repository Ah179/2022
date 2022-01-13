package com.sprintership22.backend.model;

import javax.persistence.Entity;
import javax.persistence.Id;
//import javax.persistence.GeneratedValue;
//import javax.persistence.GenerationType;

@Entity
public class User 
{
	
	@Id
	//@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int employee_id;
	private String first_name;
	private String last_name;
	private String company_role;
	private String password;
	
	public User()
	{
		
	}
	
	public int getEmployeeID()
	{
		return this.employee_id;
	}
	
	public void setEmployeeID(int employee_id)
	{
		this.employee_id = employee_id;
	}
	
	public String getFirstName()
	{
		return this.first_name;
	}
	
	public void setFirstName(String first_name)
	{
		this.first_name = first_name;
	}
	
	public String getLastName()
	{
		return this.last_name;
	}
	
	public void setLastName(String last_name)
	{
		this.last_name = last_name;
	}
	
	public String getCompanyRole()
	{
		return this.company_role;
	}
	
	public void setCompanyRole(String company_role)
	{
		this.company_role = company_role;
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
