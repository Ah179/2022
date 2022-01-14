import React from 'react';
import img1 from '../assets/brightformlogo-removebg-preview.png'
import Button from 'react-bootstrap/Button'
import './card-style.css';
import ProgressBar from 'react-bootstrap/ProgressBar'

const Card = props => {
    return (
        <div className="card text-center">
            <div className="overflow">
                
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text text-secondary">{props.desc}</p>
                <p className="card-text text-secondary">{props.collab}</p>
                <Button variant="outline-success" onClick={clicked}>Edit</Button>{' '}
                {/*<a href="#" className="btn btn-outline-success">Edit</a>*/}
                <ProgressBar className="card-progress" variant={props.var} now={props.now} />
                {/*<p className="card-text text-secondary">Status</p>*/}
            </div>
        </div>
    );
}

function clicked() {
    alert('You clicked me!');
}

export default Card;