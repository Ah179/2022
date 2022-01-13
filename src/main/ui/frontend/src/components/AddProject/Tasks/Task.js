import React from 'react'
import '../AddProjectForm.css'

class Task extends React.Component {
	renderTask() {
		return this.props.task.value
	}

	deleteTask = () => {
		this.props.remove(this.props.index)
	}

	render() {
		return (
			<div className='list'>
				<span className='listText'>{this.renderTask()}</span>
				<button onClick={this.deleteTask} className='delBtn'> - </button>	
			</div>
		)
	}
}

export default Task