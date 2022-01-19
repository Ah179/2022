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
      lastname:'',
      companyRole: '',
      email: '',
      password: '',
      validate: {
        emailState: '',
      },
    };
    this.employeeID = this.employeeID.bind(this);
    this.firstname = this.firstname.bind(this);
    this.lastname = this.lastname.bind(this);
    this.companyRole = this.companyRole.bind(this);
    this.email = this.email.bind(this);
    this.password = this.password.bind(this);

  } 
  // handleChange = (event) => {
  //   const { target } = event;
  //   const value = target.type === 'checkbox' ? target.checked : target.value;
  //   const { name } = target;

  //   this.setState({
  //     [name]: value,
  //   });
  // };
  employeeID(event){
    this.setState({employeeID: event.target.value})
  }

  firstname(event){
    this.setState({firstname: event.target.value})
  }

  lastname(event){
    this.setState({lastname: event.target.value})
  }

  companyRole(event){
    this.setState({companyRole: event.target.value})
  }

  email(event){
    this.setState({email: event.target.value})
  }

  password(event){
    this.setState({password: event.target.value})
  }
  
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
    // console.log(`Email: ${this.state.email}`);
    
      // alert('Your account has been created' + this.state);
      fetch('http://loclalhost:8080/user/add', {
             method: 'POST',
           //Convert React state to JSON & Sends it as the POST body
         headers: {
           'Accept' : 'application/json',
           'Content-Type' : 'application/json'
         },
           body: JSON.stringify({
            employeeID : this.state.employeeID,
            firstname : this.state.firstname,
            lastname : this.state.lastname,
            companyRole : this.state.companyRole,
            email : this.state.email,
            password : this.state.password,
           })
      }).then((Response) => Response.json()).then((Result) =>{
<<<<<<< HEAD
        if (Result == 'new user is added'){
          this.props.history.push('/Home')
            this.props.history.push('/Home');
        }
=======
        if (Result == 'new user is added') {
			  this.props.setEmployeeID(this.state.employeeID)
			  this.props.history.push('/Home');
		  }   
>>>>>>> master
        else 
          alert('Un-authenticated User!')
      })
  }
  render() {
    //const {employeeID,firstname,lastname,companyRole,email, password} = this.state;
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
              onChange={this.firstname}
              required
              />
            <Label for = "examplelastname">Last Name</Label>
            <Input 
              type ="text"
              name="lastname"
              id="lastname"
              placeholder="Smith"
              onChange={this.lastname}
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
              onChange={this.employeeID}
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
              onChange={this.companyRole}
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
              onChange={this.email}
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
              onChange={this.password}
              required
              />
          </FormGroup>
          <FormGroup>
         <Button type="submit" onClick={this.submitForm}>Sign Up</Button>
        </FormGroup>
         <FormText><ul><Link to={"/"}> Already have an account? Click here!</Link></ul></FormText>
      </Form>
    </div>
    </Auth0ProviderWithHistory>
    );
  }
};

export default CreateAccount;
