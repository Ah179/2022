import React, { useState, useEffect  } from 'react'
import Card from './CardUI.js'
import UpdateProjectPopup from '../UpdateProject/UpdateProjectPopup';

function Cards (props)
{
    //const employeeID = props.employeeID
    const [projects, setProjects] = useState([])
    const [employeeID, setID] = useState('')
    const [updateProjectPopupBtn, setUpdateProjectPopupBtn] = useState(false)

    useEffect(()=>{
        //const employeeID = 4
        fetch("http://localhost:8080/session/getsession")
        .then(res=>res.json())
        .then((result)=> {
        	console.log("CARDS : "+result)
			setID(result)
            const employeeID = result
            const firstName = "garbage"
            const lastName = "garbage"
            const companyRole = "garbage"
            const email = "garbage"
            const password = "garbage"
            //console.log("CARDS employeeID = "+props.employeeID)
            const user= {employeeID, firstName, lastName, companyRole, email, password}
            console.log(user)
            console.log("CARDS 2 = "+employeeID)
            fetch("http://localhost:8080/project/getall", {
                method:"POST",
                headers:{
                    "Content-Type":"application/json"},
                body:JSON.stringify(user)
            })
            .then(res=>res.json())
            .then((result2)=> {
                setProjects(result2);
            })
            })
    }, []);

    return (
        <div className="container-fluid d-flex justify-content-center">
            <div className="row">
            {/*<UpdateProjectPopup trigger={updateProjectPopupBtn} setTrigger={setUpdateProjectPopupBtn} projectId={props.projectId}/>*/}
                {projects.map(project=>(
                    <div className="col-md-4">
                        <Card title={project.name}
                        dur={project.startTime + " - " + project.endTime}
                        var="working on it"
                        now={project.status}
						project={project}
						projectId={project.id}
						employeeID={employeeID}
					    setUpdateProjectPopupBtn = {props.setUpdateProjectPopupBtn}
					    //setUpdateProjectPopupBtn = {props.setUpdateProjectPopupBtn}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Cards