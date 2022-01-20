import { Button } from 'reactstrap'
import React, { useState } from 'react'
import AddProjectPopup from './AddProjectPopup'
import AddProjectForm from './AddProjectForm'
import './AddProject.css'

function AddProject(props) {
	const [addProjectButton, setAddProjectButton] = useState(false)
	const employeeID = props.employeeID

	return (props.trigger) ? (
		<div className="addPopup">
			<div className="popupContent">
				<button className='closeBtn' onClick={() => props.setTrigger(false)}>x</button>
				<AddProjectForm employeeID={employeeID} setTrigger={props.setTrigger}/>
				{/* { props.children } */}
			</div>
		</div>
	) : ""
}

export default AddProject