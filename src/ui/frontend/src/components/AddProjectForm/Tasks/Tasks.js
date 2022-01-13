import React from 'react'
import AddTask from './AddTask'
import Task from './Task'

class Tasks extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			addTaskValue: '',
			tasks: []
		}
	}

	addNewTask = (value) => {
		if(value) {
			var newTask = {
				key: value,
				value: value,
				isDone: false
			}

			this.setState((prevState) => ({
				tasks: [...prevState.tasks, newTask]
			}))
		}
		else {console.log("Please add a task")}
	}

	handleRemove = (index) => {
		const tasks = this.state.tasks.slice()
		tasks.splice(index, 1)
		this.setState({tasks})
	}

	render() {
		return (
			<table className='tasksTable'>
				<tbody>
					{this.state.tasks.map((task, index) => (
						<tr key={task.key}>
							<Task index={index} task={task} remove={this.handleRemove} />
						</tr>
					))}
					<tr>
						<td colSpan='4' className='taskText'>
							<AddTask addTask={this.addNewTask} addTaskValue={this.state.addTaskValue} />
						</td>
					</tr>
				</tbody>
			</table>
		)
	}
}

export default Tasks