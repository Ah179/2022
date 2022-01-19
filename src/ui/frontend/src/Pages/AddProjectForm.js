import React, { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import {
	Button, 
	Form,
	FormGroup,
	Input,
	Label
} from "reactstrap"
import './AddProjectForm.css'

function AddProjectForm(props) {
	const employeeID = props.employeeID
	const [name, setProjectName] = useState('')
	const [id, setProjectId] = useState('')
	const [description, setProjectDesc] = useState('')
	const [startTime, setProjectStartDate] = useState('')
	const [endTime, setProjectEndDate] = useState('')
	const [projectCollaborators, setProjectCollaborators] = useState([])
	const [projectTasks, setProjectTasks] = useState([])
	
	const [collaboratorInput, setCollaboratorInput] = useState('')
	const [taskInput, setTaskInput] = useState('')

	const handleNameChange = (event) => {setProjectName(event.target.value)}

	const handleIdChange = (event) => {setProjectId(event.target.value)}

	const handleDescChange = (event) => {setProjectDesc(event.target.value)}

	const handleStartDateChange = (event) => {setProjectStartDate(event.target.value)}

	const handleEndDateChange = (event) => {setProjectEndDate(event.target.value)}

	const handleCollaboratorInputChange = (event) => {setCollaboratorInput(event.target.value)}

	const handleTaskInputChange = (event) => {setTaskInput(event.target.value)}

	function isInList(array, key) {
		return array.some(function(el) {
			return el.key === key
		}) 
	}

	const handleClickCreateProject = (event) => {
		event.preventDefault();
		const employeeID = 23
		const firstName = "Jane"
		const lastName = "Doe"
		const companyRole = "Mr. World Wide"
		const email = "test@pleasework.plz"
		const password = "test"
		const user= {employeeID, firstName, lastName, companyRole, email, password}
		const project={id, name, description, startTime, endTime}
		const userProjectObject = {user, project}
		console.log(userProjectObject)
		fetch("http://localhost:8080/project/add", {
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(userProjectObject)
        }).then(()=>{
            console.log("New project added")
        })

		/*
		const user = collaboratorInput.map((collaboratorInput)=>

		);*/
	}

	const addCollaborator = (event) => {
		event.preventDefault()

		//Input Validation
		if(collaboratorInput === '') {return}
		if(isInList(projectCollaborators, collaboratorInput) === true) {
			document.getElementById('collaboratorValue').value = ''
			return
		}

		const newCollaborator = {key: collaboratorInput, value: collaboratorInput}
		const newCollaboratorList = [...projectCollaborators, newCollaborator]

		setProjectCollaborators(newCollaboratorList)
		document.getElementById('collaboratorValue').value = ''
		setCollaboratorInput('')
	}

	const removeCollaborator = (index) => {
		const collaborators = projectCollaborators.slice()
		collaborators.splice(index, 1)
		setProjectCollaborators(collaborators)
	}

	const addTask = (event) => {
		event.preventDefault()

		//Input Validation
		if(taskInput === '') {return}
		if(isInList(projectTasks, taskInput) === true) {
			document.getElementById('taskValue').value = ''
			return
		}

		const newTask = {key: taskInput, value: taskInput, isCompleted: false}
		const newTaskList = [...projectTasks, newTask]

		setProjectTasks(newTaskList)
		document.getElementById('taskValue').value = ''
		setTaskInput('')	
	}

	const removeTask = (index) => {
		const tasks = projectTasks.slice()
		tasks.splice(index, 1)
		setProjectTasks(tasks)
	}

	return (
		<div className='AddProjectForm'>
 				<h2>Add Project</h2>
 				<Form className='addProjectForm'>
 					<FormGroup>
 						<Label for='name'>Project Name</Label>
 						<Input
							type='text'
							name='name'
							id='name'
							required
							onChange={(e) => handleNameChange(e)}
						/>
					</FormGroup>
					<FormGroup>
						<Label for='id'>Project ID</Label>
						<Input 
							type='number'
							name='id'
							id='id'
							required
							onChange={(e) => handleIdChange(e)}
						/>
					</FormGroup>
					<FormGroup>
						<Label for='description'>Project Description</Label>
						<Input
							type='textarea'
							name='desc'
							id='description'
							required
							onChange={(e) => handleDescChange(e)}
						/>
					</FormGroup>
					<FormGroup>
						<Label for='startTime'>Start Date</Label>
						<Input
							type='date'
							name="startDate"
							id='startTime'
							required
							onChange={(e) => handleStartDateChange(e)}
						/>
					</FormGroup>
					<FormGroup>
						<Label for='endTime'>End Date</Label>
						<Input
							type='date'
							name='endDate'
							id='endTime'
							required
							onChange={(e) => handleEndDateChange(e)}
						/>
					</FormGroup>
					<FormGroup>
						<Label>Collaborators</Label>
						<table>
							{projectCollaborators.map((collaborator, index) => (
								<tbody className='list' key={collaborator.key}>
									{/* <Collaborator index={index} collaborator={collaborator} remove={this.removeCollaborator} /> */}
									<tr>
										<td className="listText">{collaborator.value}</td>
										<td>
											<button onClick={() => removeCollaborator(index)} className="delBtn"> - </button>
										</td>
									</tr>
								</tbody>
							))}
						</table>
						<FormGroup className="listInput">
 							<Input 
								className="textInputBox"
								type='number' 
								id='collaboratorValue' 
								placeholder="Add Collaborator"
								onChange={(e) => handleCollaboratorInputChange(e)}
								// onSubmit={this.addCollaborator}
							/>
							<Button
								className="addBtn"
								onClick={(e) => addCollaborator(e)}
								type="button"
								id='addBtn'>ADD</Button>
						</FormGroup>
					</FormGroup>
					<FormGroup>
						<Label>Tasks</Label>
						<table>
							{projectTasks.map((task, index) => (
								<tbody className='list' key={task.key}>
									<tr>
										<td className="listText">{task.value}</td>
										<td>
											<button onClick={() => removeTask(index)} className="delBtn"> - </button>
										</td>
									</tr>
								</tbody>
							))}
						</table>
						<FormGroup className="listInput">
 							<Input 
								className="textInputBox"
								type='text' 
								id='taskValue' 
								placeholder="Add Task"
								onChange={(e) => handleTaskInputChange(e)}
								// onSubmit={this.addCollaborator}
							/>
							<Button
								className="addBtn"
								onClick={(e) => addTask(e)}
								type="button"
								id='addBtn'>ADD</Button>
						</FormGroup>
					</FormGroup>
					<Button onClick={handleClickCreateProject}>SUBMIT</Button>
				</Form>
			</div>
	)
}

export default AddProjectForm