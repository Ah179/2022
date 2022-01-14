package com.sprintership22.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.sprintership22.backend.model.UserProjects;


@Repository
public interface UserProjectsRepository extends JpaRepository<UserProjects, Integer>{

}
