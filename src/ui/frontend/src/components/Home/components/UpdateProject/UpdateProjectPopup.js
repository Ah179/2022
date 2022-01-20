import { Button, Input } from 'reactstrap'
import React, { useState, useEffect } from 'react'
import './UpdateProjectPopup.css'

function UpdateProjectPopUp(props) {

	const id = props.projectId

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

	const [taskList, setTaskList] = useState([])

	const toggleCompleted = (position) => {
		taskList[position].changed = !taskList[position].changed
		taskList[position].status = !taskList[position].status
		const updatedTaskList = [...taskList]
		setTaskList(updatedTaskList)
		console.log(taskList)
	}

	const handleDoneButton = () => {
		console.log(id)
		
		//Do something like this to send each task in the task list back to backend (this is pseudocode so it will need to be styled like )
		// taskList.map((task, index) => {
		// 	this.substep = {task.id, task.status}
		// })
		{taskList.map((substep) => (
			//console.log()
			//const substep = {id, projectID, name, description, status}
			console.log(substep),
			fetch("http://localhost:8080/substep/statuschange", {
            	method:"POST",
            	headers:{"Content-Type":"application/json"},
            	body:JSON.stringify(substep)
        	}).then(()=>{
            	console.log("Done")
        	})
		))}
		props.setTrigger(false)
	}

	useEffect(()=>{
		        const id = 2
				const name = "garbage"
				const description = "garbage"
				const startTime = "garbage"
				const endTime = "garbage"
				const status = 0
				const changed = 0;
		        const project= {id, name, description, startTime, endTime, status, changed}
		        console.log(project)
		        fetch("http://localhost:8080/substep/getall", {
		            method:"POST",
		            headers:{
		                "Content-Type":"application/json"},
		            body:JSON.stringify(project)
		        })
		        .then(res=>res.json())
		        .then((result)=> {
		            setTaskList(result);
		        })
		    },[])

	return (props.trigger) ? (
		<div className='updatePopup'>
			<div className='popupContent'>
				<button className='closeBtn' onClick={() => props.setTrigger(false)}>x</button>
				<h2>Update Project</h2>
				{taskList.map((task, index) => (
					<div 
						className='task-div' 
						key={task.key}
						>
						<Input 
							type='checkbox'
							onChange={() => toggleCompleted(index)}
							checked={task.status}
						/>
						<h5 className='task-name'>{task.name}</h5>
					</div>
				))} 
				<div className='doneBtn'><Button onClick={handleDoneButton}>DONE</Button></div>
			</div>
		</div>
	) : ''
}

export default UpdateProjectPopUp