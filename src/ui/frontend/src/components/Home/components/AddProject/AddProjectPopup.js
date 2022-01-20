import React from "react"
import AddProjectForm from "../../../../Pages/AddProjectForm"
import './AddProject.css'

function AddProjectPopup(props) {

	return (props.trigger) ? (
		<div className="addPopup">
			<div className="popupContent">
				<button className='closeBtn' onClick={() => props.setTrigger(false)}>x</button>
				<AddProjectForm employeeID={props.employeeID} setTrigger={props.setTrigger}/>
				{/* { props.children } */}
			</div>
		</div>
	) : ""
}

export default AddProjectPopup