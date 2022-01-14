//import "@progress/kendo-theme-material/dist/all.css";
import "./Home.css";
import Navbar from "./components/Navbar/Navbar";
import React from "react";
// import AddProjectPopup
//import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Card from './components/Cards/Cards'
import AddProject from "./components/AddProject/AddProject";

function Home() {
  return (
    <div className="Home">
      <Navbar />
      <h1 className="app-title">Project Dashboard</h1>
      <Card />
	  <AddProject />
      {/* <Button variant="outline-dark" onClick={() => setAddProjectButton(true)}>Add Project</Button>{' '} */}
    </div>
  );
}

function clicked() {
  alert('You clicked me!');
}

export default Home;