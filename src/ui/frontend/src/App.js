import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home.js';
import CreateAccount from './components/Login/CreateAccount';
import Login from './components/Login/Login';


function App() {
  const [employeeID, setEmployeeID] = useState('')
  console.log("employeeID = "+employeeID)

  return (
    <Router>
    <div className="wrapper">
      <div>
        <Switch>
          <Route exact path= "/">
            <Login setEmployeeID={setEmployeeID}/>
          </Route>
          <Route path= "/CreateAccount">
            <CreateAccount setEmployeeID={setEmployeeID} />
          </Route>
          <Route path="/Home">
            <Home employeeID={employeeID} />
          </Route>
        </Switch>
      </div>
    </div>
    </Router>

  );
}


export default App;

