import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button'
import './Popup.css';

function Popup(props) {

	const project = props.project
	const projectId = props.projectId
	const [projectCollaborators, setCollaborators] = useState([])
	const [projectTasks, setTasks] = useState([])
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
			setCollaborators(result)
			console.log(result)
			console.log("DONE IN POPUP")
		})

		fetch("http://localhost:8080/substep/getall", {
			method:"POST",
			headers:{
				"Content-Type":"application/json"},
				body:JSON.stringify(project)
		})
		.then(res=>res.json())
		.then((result) => {
			setTasks(result)
			console.log(result)
			console.log("DONE IN POPUP2")
		})
	},[]);

    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <Button variant="outline-dark" className="close-btn" onClick={() => props.setTrigger(false)}>x</Button>
                { props.children }
                <h4>Description</h4>
                <p>{props.project.description}</p>
				<h3>Collaborators</h3>
				{projectCollaborators.map((collaborator, index) => (
					<div 
						className='list-div'
						key = {collaborator.employeeID}
						>
						<h5 className='list-name'>{collaborator.employeeID} - {collaborator.companyRole} - {collaborator.firstName} {collaborator.lastName} - {collaborator.email}</h5>

					</div>
				))}
				<br/>
				<h4>Tasks</h4>
				{projectTasks.map((task, index) => (
					<div 
						className='list-div'
						key = {task.id}
						>
						<h5 className='list-name'>{task.name}</h5>
					</div>
				))}
            </div>
        </div>
    ) : "";
}

export default Popup