import React from "react"
import {
	Button, 
	FormGroup,
	Input,
} from "reactstrap"
import '../../Pages/AddProjectFrom.css'

class AddCollaborator extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			defaultValue: '',
			value: this.props.addCollaboratorValue
		}

	}

	handleChange = (event) => {
		this.setState({
			value: event.target.value
		})
	}

	clearInput = () => {
		document.getElementById('collaboratorValue').value = ''
		this.setState({value: ''})
	}

	addCollaborator = () => {
		this.props.addCollaborator(this.state.value)
		this.clearInput()
	}

	render() {
		return (
			<div>
				<FormGroup className="taskInput">
					<Input 
						className="textInputBox"
						type='text' 
						id='collaboratorValue' 
						placeholder="Add Collaborator"
						onChange={this.handleChange}
						onSubmit={this.addCollaborator}
					/>
				<Button
					className="addBtn"
					onClick={this.addCollaborator}
					type="button"
					id='addBtn'>ADD</Button>
				</FormGroup>
			</div>
		)
	}
}

export default AddCollaborator