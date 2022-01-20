package com.sprintership22.backend.service;

import java.util.ArrayList;

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
	
	@Override
	public void deleteSubstep(Substep substep) {
		substepRepository.delete(substep);
	}
	
	@Override
	public ArrayList<Substep> getSubsteps(int projectID) {
		return substepRepository.getSubsteps(projectID);
	}
	
	@Override
	public void deleteProjectAndRelatedSubsteps(int projectID) {
		
		ArrayList<Substep> temp = getSubsteps(projectID);
		
		for (int i = 0; i < temp.size(); i++)
		{
			substepRepository.delete(temp.get(i));
		}
	}

	@Override
	public void modifyStatus(int id) {
		
		Substep temp = substepRepository.getById(id);
		
		if(temp.getStatus())
		{
			temp.setStatus(false);
		}
		else
		{
			temp.setStatus(true);
		}
		
		substepRepository.save(temp);
	}

}
