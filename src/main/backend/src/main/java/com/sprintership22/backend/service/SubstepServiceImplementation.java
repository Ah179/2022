package com.sprintership22.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.sprintership22.backend.model.Substep;
import com.sprintership22.backend.repository.SubstepRepository;

@Service
public class SubstepServiceImplementation implements SubstepService{

	@Autowired
	private SubstepRepository substepRepository;
	
	@Override
	public Substep saveSubstep(Substep substep) {
		return substepRepository.save(substep);
	}

}
