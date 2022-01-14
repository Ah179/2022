import React from 'react'
import {
	Button,
	FormGroup,
	Input
} from 'reactstrap'
import '../../Pages/AddProjectForm.css'

class AddTask extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			defaultValue: '',
			value: this.props.addTaskValue
		}
	}

	handleChange = (event) => {
		this.setState({
			value: event.target.value
		})
	}

	clearInput = () => {
		document.getElementById('taskValue').value = ''
		this.setState({value: ''})
	}

	addTask = () => {
		console.log('adding task')
		this.props.addTask(this.state.value)
		this.clearInput()
	}

	onKeyPress = (event) => {
		if(event.charCode === 13) {
			console.log("Enter is pressed!!")
			this.props.addTask(this.state.value)
			this.clearInput()
		}
	}

	render() {
		return (
			<div>
				<FormGroup className='taskInput'>
					<Input 
						className='textInputBox'
						type='text'
						id='taskValue'
						placeholder='Add Task'
						onChange={this.handleChange}
						onKeyPress={this.onKeyPress}
					/>
					<Button
						className='addBtn'
						onClick={this.addTask}
						type='button'
						id='addBtn'>ADD</Button>
				</FormGroup>
			</div>
		)
	}

}

export default AddTask