package com.sprintership22.backend.repository;

import java.util.ArrayList;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.sprintership22.backend.model.Project;

@Repository
public interface ProjectRepository extends JpaRepository<Project, Integer>{
	
	@Query("SELECT u FROM Project u WHERE u.id = ?1")
	ArrayList<Project> findProjectByID(int id);
}
