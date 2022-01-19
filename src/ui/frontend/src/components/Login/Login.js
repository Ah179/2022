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
    //const employeeID = 0
  const firstName = "garbage"
	const lastName = "garbage"
	const companyRole = "garbage"
	const email = "garbage"
	const user= {employeeID, firstName, lastName, companyRole, email, password}
    console.log(user)
    //this.props.push("/Home");
    fetch("http://localhost:8080/user/login", {
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(user)
        })
        .then(res=>res.json())
        .then((result)=>{
            setTemp(result)
            console.log(temp)

            if(temp)
            {
                this.props.setEmployeeID(this.state.employeeID)
                history.push("/Home");
            }
        })
  }
  // const handleClickMove = (e) => {
  //   history.push("/Home");
  // }

  return (  
      <div className="LoginPage">
        <h2>Sign In </h2>
        <Form className="form" onLoad={handleClickLoginUser}>
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
              //onChange={(event) => setPassword('password', event.target.value)}
              //onChange={(e) => handleEndDateChange(e)}
              required
            />
          </FormGroup>
          <FormGroup>
         <Button type="submit" onClick={handleClickLoginUser}>LOGIN</Button>
         {/* <Button onClick={handleClickMove}>TRY ME</Button> */}
        </FormGroup>
        <FormText><ul><Link to={"./CreateAccount"}> Don't have an account? Create one here!</Link></ul></FormText>
      </Form>
    </div>
    );
}

export default Login;