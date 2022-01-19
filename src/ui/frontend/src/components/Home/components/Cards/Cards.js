import React, { useState } from 'react'
import Card from './CardUI'

function Cards(props)
{
    const [projects, setProjects] = useState([])

    React.useEffect(()=>{
        fetch("http://localhost:8080/project/getall")
        .then(res=>res.json())
        .then((result)=> {
            setProjects(result);
        })
    },[])

    return (
        <div className="container-fluid d-flex justify-content-center">
            <div className="row">
                    {projects.map(project=>(
                        <div className="col-md-4">
                        <Card title={project.name}
                        dur={project.startTime + " - " + project.endTime}
                        var="working on it"
                        now={100}
						setUpdateProjectPopupBtn = {props.setUpdateProjectPopupBtn}
                        />
                        </div>
                        ))
                    }
                    {/*
                        <Card title="Project 1"
                            dur="Project 1 duration goes here"
                            var="success"
                            now={100}
                            setUpdateProjectPopupBtn = {props.setUpdateProjectPopupBtn}
                        />
                    </div>
                    <div className="col-md-4">
                        <Card title="Project 2"
                            dur="Project 2 duration goes here"
                            var="warning"
                            now={60}
                            setUpdateProjectPopupBtn = {props.setUpdateProjectPopupBtn}
                        />
                    </div>
                    <div className="col-md-4">
                        <Card title="Project 3"
                            dur="Project 3 duration goes here"
                            var="warning"
                            now={20}
                            setUpdateProjectPopupBtn = {props.setUpdateProjectPopupBtn}
                        />
                    </div>*/}
            </div>
        </div>
    )
}

export default Cards