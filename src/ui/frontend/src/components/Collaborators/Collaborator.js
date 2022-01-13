import React from "react"
import '../../Pages/AddProjectFrom.css'

class Collaborator extends React.Component {

	renderCollaborator() {
		return this.props.collaborator.value
	}

	deleteCollaborator = () => {
		this.props.remove(this.props.index)
	}

	render() {
		return (
				<React.Fragment>
					<div className="list">
						<td className="listText">{this.renderCollaborator()}</td>
						<td>
							<button onClick={this.deleteCollaborator} className="delBtn"> - </button>
						</td>
					</div>
				</React.Fragment>
		)
	}
}

export default Collaborator