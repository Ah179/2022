//import "@progress/kendo-theme-material/dist/all.css";
import React from "react";
import { useState } from "react";
import "./Home.css";
import Navbar from "./components/Navbar/Navbar";
import Button from 'react-bootstrap/Button';

//import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Card from './components/Cards/Cards'

function Home() {
  return (
    <div className="Home">
      <Navbar />
      <h1 className="app-title">Project Dashboard</h1>
      <Card />
      <Button variant="outline-dark" onClick={clicked}>Add Project</Button>{' '}
    </div>
  );
}

export default Home;
