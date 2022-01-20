import React from "react";
import Button from 'react-bootstrap/Button'
import './Popup.css';

function Popup(props) {

	const project = props.project

    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <Button variant="outline-dark" className="close-btn" onClick={() => props.setTrigger(false)}>Close</Button>
                { props.children }
                <h3>Description</h3>
                <p>{project.description}</p>
                <p>The project tasks go here.</p>
                <p>Project collaborators go here.</p>
            </div>
        </div>
    ) : "";
}

export default Popup