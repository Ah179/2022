import React from 'react';
import img1 from '../assets/brightformlogo-removebg-preview.png'
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'
import 'bootstrap/dist/css/bootstrap.css';
import './card-style.css';
import ProgressBar from 'react-bootstrap/ProgressBar'
import Popup from './Popup'
import { useState } from 'react'
import UpdateProjectPopup from '../UpdateProject/UpdateProjectPopup';

function Card(props) {
    const [buttonPopup, setButtonPopup] = useState(false);
	const [updateProjectPopupBtn, setUpdateProjectPopupBtn] = useState(false)

    const handleClickDeleteProject = (event) => {
        console.log(props.project)
        fetch("http://localhost:8080/project/delete", {
            method:"POST",
            headers:{
                "Content-Type":"application/json"},
            body:JSON.stringify(props.project)
        })
        .then(res=>res.json())
        .then((result)=> {
            console.log(result)
        })
    }

    return (
        <div className="card text-center">
            <div className="overflow" onClick={() => setButtonPopup(true)}> 
                
            </div>
            <div className="card-body text-dark">
				<div>
					<Dropdown className="edit-dropdown">
						<Dropdown.Toggle variant="outline-success"></Dropdown.Toggle>
						<Dropdown.Menu>
							<Dropdown.Item href="#" onClick={() => setUpdateProjectPopupBtn(true)}>Update</Dropdown.Item>
							<Dropdown.Item href="#" onClick={handleClickDeleteProject}>Delete</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
				</div>
				<div onClick={() => setButtonPopup(true)}>
					<h4 className="card-title">{props.title}</h4>
					<p className="card-text text-secondary">{props.dur}</p>
					{/* <Button variant="outline-success" onClick={() => setButtonPopup(true)}>More Info</Button>{' '} */}
					<UpdateProjectPopup trigger={updateProjectPopupBtn} setTrigger={setUpdateProjectPopupBtn} projectId={props.projectId}/>
					<Popup trigger={buttonPopup} setTrigger={setButtonPopup} project={props.project} projectId={props.projectId} employeeID={props.employeeID}/>
					{/*<a href="#" className="btn btn-outline-success">Edit</a>*/}
					<ProgressBar className="card-progress" variant={props.var} now={props.now} />
					{/*<p className="card-text text-secondary">Status</p>*/}
				</div>
            </div>
        </div>
    );
}

export default Card;