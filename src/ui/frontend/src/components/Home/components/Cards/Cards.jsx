import React, { Component } from 'react'
import Card from './CardUI'

class Cards extends Component {
    //const[projects, setProjects]=React.useState([])
    //const projects = [];

    /*
    constructor()
    {
        super();
        const projects = [];
    }*/
    
   
    state = {
        projects: []
    };

    user = {
        firstName: 'Harper',
        lastName: 'Perez'
      };

    /*
    user = {
        employeeID:0,
		firstName:"garbage",
		lastName:"garbage",
		companyRole:"garbage",
		email:"garbage",
		password:"garbage"
    };*/

    componentDidMount() {
        //const user= {employeeID, firstName, lastName, companyRole, email, password}
        /*
        console.log(user)
        fetch("http://localhost:8080/project/getall", {
            method:"GET",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(user)
        }).then(response => response.json())
        .then(res => {
            this.setState(() => {
                const temp = res.results;

                return {
                    projects: temp
                }
            })
        })

        var url = new URL("http://localhost:8080/project/getall");
        for (let k in this.data) {
        url.searchParams.append(k, this.data[k]);
        }*/

        //console.log(url);

        let temp = {}

        fetch("http://localhost:8080/project/getall")
        .then(response => response.json())
        .then(res => {
            this.setState(() => {
                temp = res.results;

                return {
                    projects: temp
                }
            })
        })

        console.log("Done");
        //console.log(temp[0].name);
    }

    render() {
        return (
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                <div className="col-md-4">
                        {this.state.projects && this.state.projects.length && this.state.projects.map(project=>(
                            <Card title={project.name}
                            dur={project.startTime + " - " + project.endTime}
                            var="working on it"
                            now={100}
							setUpdateProjectPopupBtn={this.props.setUpdateProjectPopupBtn}
                        />
                            ))
                        }
                        </div>
                    {/*
                        <Card title="Project 1"
                            dur="Project 1 duration goes here"
                            var="success"
                            now={100}
							setUpdateProjectPopupBtn={this.props.setUpdateProjectPopupBtn}
                        />
                    </div>
                    <div className="col-md-4">
                        <Card title="Project 2"
                            dur="Project 2 duration goes here"
                            var="warning"
                            now={60}
							setUpdateProjectPopupBtn={this.props.setUpdateProjectPopupBtn}
                        />
                    </div>
                    <div className="col-md-4">
                        <Card title="Project 3"
                            dur="Project 3 duration goes here"
                            var="warning"
                            now={20}
							setUpdateProjectPopupBtn={this.props.setUpdateProjectPopupBtn}
                        />
                    </div>*/}
                </div>
            </div>
        );
    }
}

export default Cards;