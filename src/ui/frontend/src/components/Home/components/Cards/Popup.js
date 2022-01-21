import React, { useState } from "react";
import Button from 'react-bootstrap/Button'
import './Popup.css';

function Popup(props) {

	const project = props.project
	const projectId = props.projectId
	const[projectCollaborators, setCollaborators] = useState([])

    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <Button variant="outline-dark" className="close-btn" onClick={() => props.setTrigger(false)}>x</Button>
                { props.children }
                <h3>Description</h3>
                <br/>
                <p>{project.description}</p>
				<h3>Collaborators</h3>
				<br/>
				{projectCollaborators.map((collaborator, index) => (
					<div 
						className='collaborator-div'
						key = {collaborator.employeeID}
						>
						<h5 className='collaborator-name'>{collaborator.firstName} {collaborator.lastName} - {collaborator.employeeID}</h5>

					</div>
				))}
                {/* <p>The project tasks go here.</p> */}
            </div>
        </div>
    ) : "";
}

export default Popup