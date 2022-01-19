import { Button, Input } from 'reactstrap'
import React, { useState } from 'react'
import './UpdateProjectPopup.css'

function UpdateProjectPopup(props) {

	const tasks = [
		{
			key: 'task1',
			value: 'task1',
			isCompleted: false
		},
		{
			key: 'task2',
			value: 'task2',
			isCompleted: false
		},
		{
			key: 'task3',
			value: 'task3',
			isCompleted: false
		},
		{
			key: 'task4',
			value: 'task4',
			isCompleted: false
		}
	]

	const [taskList, setTaskList] = useState(tasks)

	const toggleCompleted = (position) => {

		taskList[position].isCompleted = !taskList[position].isCompleted
		const updatedTaskList = [...taskList]
		setTaskList(updatedTaskList)

	}

	const handleDoneButton = () => {
		props.setTrigger(false)
	}

	return (props.trigger) ? (
		<div className='updatePopup'>
			<div className='popupContent'>
				<button className='closeBtn' onClick={() => props.setTrigger(false)}>x</button>
				<h2>Update Project</h2>
				{taskList.map((task, index) => (
					<div 
						className='task-div' 
						key={task.key}
						style={{background: task.isCompleted ? "#98fb98" : "#ffcccb"}}
						onClick={() => toggleCompleted(index)}
						>
						{/* <Input 
							type='checkbox'
							onChange={() => toggleCompleted(index)}
							checked={task.isCompleted}
						/> */}
						<h5 className='task-name'>{task.value}</h5>
					</div>
				))} 
				<div className='doneBtn'><Button onClick={handleDoneButton}>DONE</Button></div>
			</div>
		</div>
	) : ''
}

export default UpdateProjectPopup