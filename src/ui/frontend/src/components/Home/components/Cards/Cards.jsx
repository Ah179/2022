import React, { Component } from 'react'
import Card from './CardUI'

class Cards extends Component {
    render() {
        return (
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <Card title="Project 1"
                            dur="Project 1 duration goes here"
                            var="success"
                            now={100}
                        />
                    </div>
                    <div className="col-md-4">
                        <Card title="Project 2"
                            dur="Project 2 duration goes here"
                            var="warning"
                            now={60}
                        />
                    </div>
                    <div className="col-md-4">
                        <Card title="Project 3"
                            dur="Project 3 duration goes here"
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