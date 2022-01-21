import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button'
import './Popup.css';

function Popup(props) {

	const project = props.project
	const projectId = props.projectId
	const[projectCollaborators, setCollaborators] = useState([])
	const employeeID = props.employeeID

	useEffect(() => {
		const firstName = "garbage"
		const lastName = "garbage"
		const companyRole = "garbage"
		const email = "garbage"
		const password = "garbage"
		
		const id = projectId
		const name = "garbage"
		const description = "garbage"
		const startTime = "garbage"
		const endTime = "garbage"
		const status = 0
		
		const user = {employeeID,firstName, lastName, companyRole, email, password}
		const project = {id, name, description, startTime, endTime, status}
		const userProjectObject = {user,project}

		console.log(userProjectObject)
		fetch("http://localhost:8080/project/getcollaborators", {
			method:"POST",
			headers:{
				"Content-Type":"application/json"},
				body:JSON.stringify(userProjectObject)
		})
		.then(res=>res.json())
		.then((result) => {
			console.log(result)
		})
	},[])

    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <Button variant="outline-dark" className="close-btn" onClick={() => props.setTrigger(false)}>x</Button>
                { props.children }
                <h3>Description</h3>
                <br/>
                <p>{project.description}</p>
				<h3>Collaborators</h3>
				<br/>
				{projectCollaborators.map((collaborator, index) => (
					<div 
						className='collaborator-div'
						key = {collaborator.employeeID}
						>
						<h5 className='collaborator-name'>{collaborator.firstName} {collaborator.lastName} - {collaborator.employeeID}</h5>

					</div>
				))}
                {/* <p>The project tasks go here.</p> */}
            </div>
        </div>
    ) : "";
}

export default Popup