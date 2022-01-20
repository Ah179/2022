import { Button, Input } from 'reactstrap'
import React, { useState, useEffect } from 'react'
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

	const projectId = ''
	const [taskList, setTaskList] = useState([])
	//const [substep, setSubstep] = useState()
	const [id, setID] = useState('')
	const [projectID, setProjectID] = useState('')
	const [name, setName] = useState('')
	const [description, setDescription] = useState('')
	const [status, setStatus] = useState('')

	const toggleCompleted = (position) => {

		taskList[position].isCompleted = !taskList[position].isCompleted
		const updatedTaskList = [...taskList]
		setTaskList(updatedTaskList)

	}

	const handleDoneButton = () => {
		props.setTrigger(false)
	}

	const handleClickChangeStatus = (event) => {
		event.preventDefault();
		const substep = {id, projectID, name, description, status}
		console.log(substep)
		fetch("http://localhost:8080/substep/statuschange", {
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(substep)
        }).then(()=>{
            console.log("Done")
        })
	}

	useEffect(()=>{
        const id = 2
		const name = "garbage"
		const description = "garbage"
		const startTime = "garbage"
		const endTime = "garbage"
		const status = 0
        const project= {id, name, description, startTime, endTime, status}
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
				{taskList.map((substep, index) => (
					<div 
						className='task-div' 
						key={substep.id}
						style={{background: substep.status ? "#98fb98" : "#ffcccb"}}
						//onClick={() => substep.status ? substep.status = false : substep.status = true}//toggleCompleted(index)}
						//onClick={() => setSubstep(substeps)}
						//onClick={() => {handleClickChangeStatus}}
						onClick={(event)=>{ setID(substep.id); setProjectID(substep.projectID); setName(substep.name); setDescription(substep.description); setStatus(substep.status); handleClickChangeStatus(event) }}
						>
						{/*<Input 
							type='checkbox'
							onChange={() => toggleCompleted(index)}
							checked={substep.status}
						/> */}
						<h5 className='task-name'>{substep.name}</h5>
					</div>
				))} 
				<div className='doneBtn'><Button onClick={handleDoneButton}>DONE</Button></div>
			</div>
		</div>
	) : ''
}

export default UpdateProjectPopup