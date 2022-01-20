package com.sprintership22.backend.service;

import java.util.ArrayList;

import com.sprintership22.backend.model.Substep;

public interface SubstepService {
	public Substep saveSubstep(Substep substep);
	public void deleteSubstep(Substep substep);
	public ArrayList<Substep> getSubsteps(int projectID);
	public void deleteProjectAndRelatedSubsteps(int projectID);
	public void modifyStatus(int id);
}
