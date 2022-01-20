import React, { useState } from "react";
import './Login.css'
import Auth0ProviderWithHistory from '../../auth/auth0Provider';
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
//import axios from 'axios';

function CreateAccount (props) {

    const history = useHistory();
    const [employeeID, setEmployeeID] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [companyRole, setCompanyRole] = useState('')
    const [email, setEmail] = useState('')
    const [temp, setTemp] = useState('')

    // this.employeeID = this.employeeID.bind(this);
    // this.firstname = this.firstname.bind(this);
    // this.lastname = this.lastname.bind(this);
    // this.companyRole = this.companyRole.bind(this);
    // this.email = this.email.bind(this);
    // this.password = this.password.bind(this);

  const handleClickCreateUser = (event) => {
    event.preventDefault();

    const user = {employeeID, firstName, lastName, companyRole, email, password}
    console.log(user)
    
    fetch("http://localhost:8080/user/add", {
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(user)
        })
        .then(res=>res.json())
        .then((result)=>{
            setTemp(result)
            console.log(temp)

            if(temp == "new user project is added")
            {
                this.props.setEmployeeID(this.state.employeeID)

                history.push("/Home");
            } else {
              alert("All fields must be filled in")
            }
        })
  }
   
  return (  
    <Auth0ProviderWithHistory>
      <div className="LoginPage">
        <h2>Create Account</h2>
        <Form className="form" >
          <FormGroup>
            <Label for= "examplefirstname">First Name</Label>
            <Input 
              type="text"
              name="FirstName"
              id="examplefirstname"
              placeholder="John"
              onChange={(e) => setFirstName(e.target.value)}
              required
              />
            <Label for = "examplelastname">Last Name</Label>
            <Input 
              type ="text"
              name="lastname"
              id="lastname"
              placeholder="Smith"
              onChange={(e) => setLastName(e.target.value)}
              required
              />
          </FormGroup> 
          <FormGroup>
            <Label for ="exampleID">Employee ID </Label>
            <Input 
              type ="number"
              name="number"
              id="exampleID"
              placeholder="Employee ID"
              onChange={(e) => setEmployeeID(e.target.value)}
              required
              />
          </FormGroup>
          <FormGroup>
            <Label for="examplecompanyRole">Company Role</Label>
            <Input 
              type ="text"
              name="compnayRole"
              id="companyRole"
              placeholder="Software Engineer"
              onChange={(e) => setCompanyRole(e.target.value)}
              required
              />
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Employee Email</Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="example@brightform.com"
              onChange={(e) => setEmail(e.target.value)}
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
         <Button type="submit" onClick={handleClickCreateUser}>Sign Up</Button>
        </FormGroup>
         <FormText><ul><Link to={"/"}> Already have an account? Click here!</Link></ul></FormText>
      </Form>
    </div>
    </Auth0ProviderWithHistory>
    );
};

export default CreateAccount;
