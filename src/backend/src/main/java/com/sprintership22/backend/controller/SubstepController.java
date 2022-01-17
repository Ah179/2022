package com.sprintership22.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sprintership22.backend.model.Project;
import com.sprintership22.backend.model.Substep;
import com.sprintership22.backend.service.SubstepService;

@RestController
@RequestMapping("/substep")
@CrossOrigin
public class SubstepController {

	@Autowired
	private SubstepService substepService;
	
	@PostMapping("/add")
	public String add(@RequestBody Substep substep) {
		
		substepService.saveSubstep(substep);
		
		return "new substep is added";
	}
	
	@PostMapping("/delete")
	public String delete(@RequestBody Substep substep) {
		
		substepService.deleteSubstep(substep);
		
		return "substep is deleted";
	}
	
	@PostMapping("/deleteproject")
	public String deleteproject(@RequestBody Project project) {
		
		substepService.deleteProjectAndRelatedSubsteps(project.getID());
		
		return "project is deleted";
	}
	
}
