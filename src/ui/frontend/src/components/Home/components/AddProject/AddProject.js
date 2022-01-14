import { Button } from 'reactstrap'
import React, { useState } from 'react'
import AddProjectPopup from './AddProjectPopup'
import './AddProject.css'

function AddProject() {
	const [addProjectButton, setAddProjectButton] = useState(false)

	return (
		<div className='updateProject'>
			<br></br>
			<button className='addProjectBtn' onClick={() => setAddProjectButton(true)}>Add Project</button>
			<AddProjectPopup trigger={addProjectButton} setTrigger={setAddProjectButton} />
		</div>
	)
}

export default AddProject