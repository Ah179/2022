import { Button } from 'reactstrap'
import React, { useState } from 'react'
import AddProjectPopup from './AddProjectPopup'
import './AddProject.css'

function AddProject() {
	const [addProjectButton, setAddProjectButton] = useState(false)

	return (
		<div className='updateProject'>
			<br></br>
			{/*<button className='addProjectBtn' variant="outline-dark" onClick={() => setAddProjectButton(true)}>Add Project</button>*/}
			<Button variant="outline-dark" onClick={() => setAddProjectButton(true)}>Add Project</Button>{' '}
			<AddProjectPopup trigger={addProjectButton} setTrigger={setAddProjectButton} />
		</div>
	)
}

export default AddProject