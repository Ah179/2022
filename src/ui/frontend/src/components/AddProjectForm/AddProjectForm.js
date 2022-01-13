import React, { Component } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import {
	Button, 
	Form,
	FormGroup,
	Input,
	Label
} from "reactstrap"
import './AddProjectForm.css'
import Collaborators from "./Collaborators/Collaborators"
import Tasks from './Tasks/Tasks'

class AddProjectForm extends Component {
	constructor(props) {
		super(props)

		this.state = {
			name: '',
			projectId: '',
			desc: '',
			startDate: '',
			endDate: '',
			collaborators: [],
			tasks: []
		}

		//this.handleInputChange = this.handleInputChange.bind(this)
		this.addCollaborator = this.addCollaborator.bind(this)
		this.addTask = this.addTask.bind(this)
	}

	// handleInputChange(event) {
	// 	const target = event.target
	// 	const value = target.type === 'checkbox' ? target.checked : target.value
	// 	const name = target.name

	// 	this.setState({
	// 		[name]: value
	// 	})

	// 	console.log(`${this.state.name} 
	// 				${this.state.projectId} 
	// 				${this.state.desc} 
	// 				${this.state.startDate}
	// 				${this.state.endDate}`)
	// }

	addCollaborator(event) {
		if(this.collaboratorInput !== '') {
			var newCollaborator = {
				key: this.collaboratorInput.value,
				value: this.collaboratorInput.value
			}

			this.setState((prevState) => ({
				collaborators: [...prevState.collaborators, newCollaborator]
			}))

			this.collaboratorInput.value = ''
		}

		console.log(this.state.collaborators)
		event.preventDefault()
	}

	addTask(event) {
		if(this.taskInput !== '') {
			var newTask = {
				key: this.taskInput.value,
				value: this.taskInput.value
			}

			this.setState((prevState) => ({
				tasks: [...prevState.tasks, newTask]
			}))

			this.taskInput.value = ''
		}

		event.preventDefault()
	}

	render() {
		return (
		
			<div className='AddProjectForm'>
				<h2>Add Project</h2>
				<Form className='addProjectForm'>
					<FormGroup>
						<Label for='projectName'>Name</Label>
						<Input
							type='text'
							name='name'
							id='projectName'
						/>
					</FormGroup>
					<FormGroup>
						<Label for='projectId'>Project ID</Label>
						<Input 
							type='number'
							name='projectId'
							id='projectId'
						/>
					</FormGroup>
					<FormGroup>
						<Label for='projectDesc'>Description</Label>
						<Input
							type='textarea'
							name='desc'
							id='projectDesc'
						/>
					</FormGroup>
					<FormGroup>
						<Label for='projectStartDate'>Start Date</Label>
						<Input
							type='date'
							name="startDate"
							id='projectStartDate'
						/>
					</FormGroup>
					<FormGroup>
						<Label for='projectEndDate'>End Date</Label>
						<Input
							type='date'
							name='endDate'
							id='projectEndDate'
						/>
					</FormGroup>
					<FormGroup>
						<Label>Collaborators</Label>
						<Collaborators />
					</FormGroup>
					<FormGroup>
						<Label>Tasks</Label>
						<Tasks />
					</FormGroup>
					<Button>SUBMIT</Button>
				</Form>
			</div>
		)
	}
}

export default AddProjectForm