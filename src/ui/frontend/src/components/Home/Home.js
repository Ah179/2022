//import "@progress/kendo-theme-material/dist/all.css";
import "./Home.css";
import Navbar from "./components/Navbar/Navbar";
import React, { useState } from "react";
// import AddProjectPopup
//import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Cards from './components/Cards/Cards'
import AddProject from "./components/AddProject/AddProject";
import UpdateProjectPopup from "./components/UpdateProject/UpdateProjectPopup";

function Home(props) {

	const [updateProjectPopupBtn, setUpdateProjectPopupBtn] = useState(false);
	const [projectId, setProjectId] = useState('')
	const employeeID = props.employeeID

  return (
    <div className="Home">
		<div className="header">
			<Navbar />
		</div>
		<div className="main-dashboard">
			<h1 className="app-title">Project Dashboard</h1>
			<Cards employeeID={employeeID} setUpdateProjectPopupBtn={setUpdateProjectPopupBtn} setProjectId={setProjectId}/>
			<AddProject employeeID={employeeID}/>
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