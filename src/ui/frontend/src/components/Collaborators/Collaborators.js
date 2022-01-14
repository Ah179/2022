import React, { Component } from 'react'
import AddCollaborator from './AddCollaborator'
import Collaborator from './Collaborator'


class Collaborators extends Component {
	
	constructor(props) {
		super(props)

		this.state = {
			addCollaboratorValue: '',
			collaborators: []
		}
	}

	addNewCollaborator = (value) => {
		if(value) {
			var newCollaborator = {
				key: value,
				value: value,
				isDone: false
			}

			this.setState((prevState) => ({
				collaborators: [...prevState.collaborators, newCollaborator]
			}))
		}
		else {
			console.log("Please add a collaborator")
		}
	}

	handleRemove = (index) => {
		const collaborators = this.state.collaborators.slice()
		collaborators.splice(index, 1)
		this.setState({collaborators})
	}

	render() {

		return (
			<table className="collaboratorsTable">
				<tbody>
					{this.state.collaborators.map((collaborator, index) => (
						<tr key={collaborator.key}>
							<Collaborator index={index} collaborator={collaborator} remove={this.handleRemove} />
						</tr>
					))}
					<tr>
						<td colSpan='4' className='collaboratorText'>
							<AddCollaborator addCollaborator={this.addNewCollaborator} addCollaboratorValue={this.state.addCollaboratorValue} />
						</td>
					</tr>
				</tbody>
			</table>
		)
	}
}

export default Collaborators