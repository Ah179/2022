import React, { Component } from 'react'
import Card from './CardUI'

class Cards extends Component {
    render() {
        return (
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <Card title="Project 1"
                            desc="Project 1 description goes here"
                            collab="Project 1 collaborators go here"
                            var="success"
                            now={100}
                        />
                    </div>
                    <div className="col-md-4">
                        <Card title="Project 2"
                            desc="Project 2 description goes here"
                            collab="Project 2 collaborators go here"
                            var="warning"
                            now={60}
                        />
                    </div>
                    <div className="col-md-4">
                        <Card title="Project 3"
                            desc="Project 3 description goes here"
                            collab="Project 3 collaborators go here"
                            var="warning"
                            now={20}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Cards;