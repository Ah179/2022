import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import App from './components/Home/App.js';
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
          <Route path="/Home">
            <App />
          </Route>
        </Switch>
      </div>
    </div>
    </Router>

  );
}


export default App;

