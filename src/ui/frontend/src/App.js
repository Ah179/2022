import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import CreateAccount from './components/Login/CreateAccount';


import Login from './components/Login/Login';

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
        </Switch>
      </div>
    </div>
    </Router>

  );
}


export default App;

