package com.sprintership22.backend.repository;

import java.util.ArrayList;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.sprintership22.backend.model.Session;

@Repository
public interface SessionRepository extends JpaRepository<Session, Integer> {
	
	@Query("SELECT u FROM Session u WHERE u.sessionID = ?1")
	ArrayList<Session> findIDZero(int sessionID);
}
