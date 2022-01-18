package com.sprintership22.backend.repository;

import java.util.ArrayList;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.sprintership22.backend.model.UserProjects;

@Repository
public interface UserProjectsRepository extends JpaRepository<UserProjects, Integer> {

	
	@Query("SELECT u FROM UserProjects u WHERE u.userID = ?1 AND u.projectID = ?2")
	ArrayList<UserProjects> findUserProjectID(int userID, int projectID);
	
	@Query("SELECT u FROM UserProjects u WHERE u.userID = ?1")
	ArrayList<UserProjects> getUserAndRelatedProjects(int userID);
	
	@Query("SELECT u FROM UserProjects u WHERE u.projectID = ?1")
	ArrayList<UserProjects> getProjectAndRelatedUsers(int projectID);
	
}
