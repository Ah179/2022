// import './App.css';
// import { BrowserRouter as Router, Routes, 
//   Route, Navigate,} from "react-router-dom";
// import Login from './components/Login/Login';
// import CreateAccount from './components/Login/CreateAccount';
// import HomePage from './components/Homepage';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route exact path="/">
//           <Login/>
//         </Route>
//         <Route path="/CreateAccount" component={CreateAccount}/>
//         <Route path="/HomePage" component={HomePage}/>
//         <Navigate to="/" />
//       </Routes>
//     </Router>

//   );
// }

// export default App;
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