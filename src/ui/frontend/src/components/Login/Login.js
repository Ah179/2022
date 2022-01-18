import React, { useState } from "react";
import {Component} from 'react';
import './Login.css'
import Auth0ProviderWithHistory from '../../auth/auth0Provider';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import {
  Button,
  Form,
  FormGroup,
  FormText,
  Input,
  Label,
} from 'reactstrap'; 

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employeeID: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
  } 
  handleChange = (event) => {
    console.log(event.target);

    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;

    this.setState({
      [name]: value,
    });

    this.validate(event);
  };
  //THIS PORTION SHOULD SEND BACK INFO TO DATA BASE
  submitForm(e) {
    e.preventDefault();
    // if (!this.validate(e)){
    //   if(!this.state.employeeID){
    //     alert("Employee ID is required");
    //   }
    //   if (!this.state.password){
    //     alert("Password is required");
    //   }
    // }
    fetch('http://loclalhost:8080/user/add', {
           method: 'POST',
    //Convert React state to JSON & Sends it as the POST body
         body: JSON
    }).then(function(response){
      console.log(response)
      return response.json();
    })
     
    console.log(`Employee ID: ${this.state.employeeID}`);
  }

  // validate(e) {
  //   const employeeID = this.state.employeeID;
  //   const password = this.state.password;
  //   const errors = {};
  //   const formIsValid = true;
  //   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    
  //   if(!employeeID){
  //     formIsValid = false;
  //     errors.employeeID = "Employee ID is required";
  //   }
  //   if(!password){
  //     formIsValid = false;
  //     errors.password = "Password is required";
  //   }
  //   this.setState({ errors: errors });
  //   return formIsValid;
  // }

  render() {
    const {employeeID, password} = this.state;
    return (  
    <Auth0ProviderWithHistory>
      <div className="LoginPage">
        <h2>Sign In</h2>
        <pre>{JSON.stringify}</pre>
        <Form className="form" onSubmit={this.submitForm}>
          <FormGroup>
            <Label for="employeeID">Employee ID</Label>
            <Input
              type="number"
              name="employeeID"
              id="employeeId"
              placeholder="Employee ID"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              placeholder="********"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
         <Link to={'./Home'}><Button type="submit">LOGIN</Button></Link>
        </FormGroup>
        <FormText><ul><Link to={"./CreateAccount"}> Don't have an account? Create one here!</Link></ul></FormText>
      </Form>
    </div>
    </Auth0ProviderWithHistory>
    );
  }
};

export default Login;