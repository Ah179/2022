import React from "react";
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
//import axios from 'axios';

class CreateAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employeeID: '',
      firstname:'',
      last_name:'',
      companyRole: '',
      email: '',
      password: '',
      validate: {
        emailState: '',
      },
    };
    this.handleChange = this.handleChange.bind(this);
  } 
  handleChange = (event) => {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;

    this.setState({
      [name]: value,
    });
  };
  validateEmail(e) {
    const emailRex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const { validate } = this.state;

    if (emailRex.test(e.target.value)) {
      validate.emailState = 'has-success';
    } else {
      validate.emailState = 'has-danger';
    }

    this.setState({ validate });
  }
  //THIS PORTION SHOULD SEND BACK INFO TO DATA BASE
  submitForm(e) {
    e.preventDefault();
    console.log(`Email: ${this.state.email}`);
  }
  render() {
    const {employeeID,firstname,last_name,companyRole,email, password} = this.state;
    return (  
    <Auth0ProviderWithHistory>
      <div className="LoginPage">
        <h2>Create Account</h2>
        <Form className="form" onSubmit={this.submitForm}>
          <FormGroup>
            <Label for= "examplefirstname">First Name</Label>
            <Input 
              type="text"
              name="FirstName"
              id="examplefirstname"
              placeholder="John"
              onChange={this.handleChange}/>
            <Label for = "examplelastname">Last Name</Label>
            <Input 
              type ="text"
              name="lastname"
              id="lastname"
              placeholder="Smith"
              onChange={this.handleChange}/>
          </FormGroup> 
          <FormGroup>
            <Label for ="exampleID">Employee ID </Label>
            <Input 
              type ="number"
              name="number"
              id="exampleID"
              placeholder="Employee ID"
              onChange={this.handleChange}/>
          </FormGroup>
          <FormGroup>
            <Label for="examplecompanyRole">Company Role</Label>
            <Input 
              type ="text"
              name="compnayRole"
              id="companyRole"
              placeholder="Software Engineer"
              onChange={this.handleChange}/>
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Employee Email</Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="example@brightform.com"
              onChange={this.handleChange}/>
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              placeholder="********"
              onChange={this.handleChange}/>
          </FormGroup>
          <FormGroup>
         <Link to={"/Home"}><Button type="submit">Sign Up</Button></Link>
        </FormGroup>
         <FormText><ul><Link to={"/"}> Already have an account? Click here!</Link></ul></FormText>
      </Form>
    </div>
    </Auth0ProviderWithHistory>
    );
  }
};

export default CreateAccount;
