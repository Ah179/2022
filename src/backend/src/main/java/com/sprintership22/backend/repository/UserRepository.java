package com.sprintership22.backend.repository;

import java.util.ArrayList;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.sprintership22.backend.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
	
	@Query("SELECT u FROM User u WHERE u.email = ?1")
	ArrayList<User> emailExists(String email);
	
	@Query("SELECT u FROM User u WHERE u.employeeID = ?1 AND u.password = ?2")
	ArrayList<User> findUser(int employeeID, String password);
	
	@Query("SELECT u FROM User u WHERE u.employeeID = ?1")
	ArrayList<User> findUserByID(int employeeID);
}
