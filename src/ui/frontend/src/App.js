import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home.js';
import CreateAccount from './components/Login/CreateAccount';
import Login from './components/Login/Login';
import AddProjectForm from './Pages/AddProjectForm';

function App() {
  return (
    <Router>
    <div className="wrapper">
      <div>
        <Switch>
          <Route exact path= "/">
            <Login />
          </Route>
          <Route path= "/CreateAccount">
            <CreateAccount />
          </Route>
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/AddProject">
            <AddProjectForm />
          </Route>
        </Switch>
      </div>
    </div>
    </Router>

  );
}


export default App;

