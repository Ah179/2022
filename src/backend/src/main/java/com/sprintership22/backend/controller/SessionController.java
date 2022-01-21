package com.sprintership22.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sprintership22.backend.model.Session;
import com.sprintership22.backend.service.SessionService;

@RestController
@RequestMapping("/session")
@CrossOrigin
public class SessionController {
	
	@Autowired
	SessionService sessionService;
	
	@PostMapping("/savesession")
	public String savesession(@RequestBody Session session)
	{
	
		sessionService.saveSession(session.getCurrentUser());
		return "saved session";
	}
	
	@PostMapping("/getsession")
	public int getsession()
	{
	
		return sessionService.getUser();
	}

}
