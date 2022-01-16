package com.sprintership22.backend.repository;

import java.util.ArrayList;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.sprintership22.backend.model.Substep;

@Repository
public interface SubstepRepository extends JpaRepository<Substep, Integer>{
	
	@Query("SELECT u FROM Substep u WHERE u.projectID = ?1")
	ArrayList<Substep> getSubsteps(int projectID);
}
