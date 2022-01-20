import React, { useState, useEffect  } from 'react'
import Card from './CardUI.js'

function Cards (props)
{
    const employeeID = props.employeeID
    const [projects, setProjects] = useState([])

    useEffect(()=>{
        //const employeeID = 4
		const firstName = "garbage"
		const lastName = "garbage"
		const companyRole = "garbage"
		const email = "garbage"
		const password = "garbage"
        console.log("CARDS employeeID = "+props.employeeID)
        const user= {employeeID, firstName, lastName, companyRole, email, password}
        console.log(user)
        fetch("http://localhost:8080/project/getall", {
            method:"POST",
            headers:{
                "Content-Type":"application/json"},
            body:JSON.stringify(user)
        })
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
                        now={project.status}
						project={project}
					    setUpdateProjectPopupBtn = {props.setUpdateProjectPopupBtn}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Cards