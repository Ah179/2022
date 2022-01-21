//import "@progress/kendo-theme-material/dist/all.css";
import "./Home.css";
import Navbar from "./components/Navbar/Navbar";
import React, { useState, useEffect } from "react";
// import AddProjectPopup
//import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Cards from './components/Cards/Cards'
import AddProject from "./components/AddProject/AddProject";
import UpdateProjectPopup from "./components/UpdateProject/UpdateProjectPopup";
import { Button } from 'react-bootstrap'

function Home(props) {

	const [updateProjectPopupBtn, setUpdateProjectPopupBtn] = useState(false);
	const [addProjectButton, setAddProjectButton] = useState(false)
	const [projectId, setProjectId] = useState('')
	const [employeeID, setID] = useState('')
	const [count, setCount] = useState(0);
	const [users, setUser] = useState('')


	useEffect(()=>{
        fetch("http://localhost:8080/session/getsession")
        .then(res=>res.json())
        .then((result)=> {
        	console.log("HOME : "+result)
			setID(result)
			const employeeID = result
			const firstName = "garbage"
			const lastName = "garbage"
			const companyRole = "garbage"
			const email = "garbage"
			const password = "garbage"
			const user= {employeeID, firstName, lastName, companyRole, email, password}
			fetch("http://localhost:8080/user/getuser", {
                method:"POST",
                headers:{
                    "Content-Type":"application/json"},
                body:JSON.stringify(user)
            })
            .then(res=>res.json())
            .then((result2)=> {
                setUser(result2);
            })
        })

    }, []);

  return (
    <div className="Home">
		<div className="header">
			<Navbar />
		</div>
		<div className="main-dashboard">
			<h1 className="app-title">{users.firstName} {users.lastName}'s Project Dashboard</h1>
			<Cards employeeID={employeeID} setUpdateProjectPopupBtn={setUpdateProjectPopupBtn} setProjectId={setProjectId}/>
			<Button className="add-btn" variant="outline-dark" onClick={() => setAddProjectButton(true)}>Add Project</Button>
			{/* <AddProjectPopup employeeID={props.employeeID} trigger={addProjectButton} setTrigger={setAddProjectButton} /> */}
			<AddProject employeeID={employeeID} trigger={addProjectButton} setTrigger={setAddProjectButton} />
			{/* <UpdateProjectPopup trigger={updateProjectPopupBtn} setTrigger={setUpdateProjectPopupBtn} projectId={projectId}/> */}
		</div>  
      {/* <Button variant="outline-dark" onClick={() => setAddProjectButton(true)}>Add Project</Button>{' '} */}
    </div>
  );
}

function clicked() {
  alert('You clicked me!');
}

export default Home;