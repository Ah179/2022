import React, { useState } from "react";
import './Login.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useHistory } from "react-router-dom";
import {
  Button,
  Form,
  FormGroup,
  FormText,
  Input,
  Label,
} from 'reactstrap';

function Login(props) {
    const history = useHistory()
    const [employeeID, setEmployeeID] = useState('')
    const [password, setPassword] = useState('')
    const [temp, setTemp] = useState('')

  const handleClickLoginUser = (event) => {
    event.preventDefault();
  const firstName = "garbage"
	const lastName = "garbage"
	const companyRole = "garbage"
	const email = "garbage"
	const user= {employeeID, firstName, lastName, companyRole, email, password}
    console.log(user)
    fetch("http://localhost:8080/user/login", {
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(user)
        })
        .then(res=>res.json())
        .then((result)=>{
            if(result)
            {                               
                const currentUser = employeeID
                const session = {currentUser}
                console.log(session)
                fetch("http://localhost:8080/session/savesession", {
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(session)
                })
                .then(res=>res.json())
                .then((result2)=> {
                  console.log(result2)
                })
                props.setEmployeeID(employeeID)
                history.push("/Home")
                window.location.reload(false);
            } 
            else 
            {
              alert("Employee ID or Password is incorrect!");
            }
        })
  }

  return (
    <div className="fullPage">
      <div className="LoginPage">
        <Form className="form">
        <h2>Sign In </h2>
          <FormGroup>
            <Label for="employeeID">Employee ID</Label>
            <Input
              type="number"
              name="employeeID"
              id="employeeId"
              placeholder="Employee ID"
              onChange={(e) => setEmployeeID(e.target.value)}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              placeholder="********"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </FormGroup>
          <FormGroup>
         <Button onClick={handleClickLoginUser}>LOGIN</Button>
        </FormGroup>
        <FormText><ul><Link to={"./CreateAccount"}> Don't have an account? Create one here!</Link></ul></FormText>
      </Form>
    </div>
    </div>
    );
}

export default Login;