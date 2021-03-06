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

const Card = props => {
    const [buttonPopup, setButtonPopup] = useState(false);

    return (
        <div className="card text-center">
            <div className="overflow">
                
            </div>
            <div className="card-body text-dark">
                <Dropdown className="edit-dropdown">
                    <Dropdown.Toggle variant="outline-success"></Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#" onClick={() => props.setUpdateProjectPopupBtn(true)}>Update</Dropdown.Item>
                        <Dropdown.Item href="#">Delete</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <h4 className="card-title">{props.title}</h4>
                <p className="card-text text-secondary">{props.dur}</p>
                <Button variant="outline-success" onClick={() => setButtonPopup(true)}>More Info</Button>{' '}
                <Popup trigger={buttonPopup} setTrigger={setButtonPopup} project={props.project}>
                    
                </Popup>
                {/*<a href="#" className="btn btn-outline-success">Edit</a>*/}
                <ProgressBar className="card-progress" variant={props.var} now={props.now} />
                {/*<p className="card-text text-secondary">Status</p>*/}
            </div>
        </div>
    );
}

export default Card;