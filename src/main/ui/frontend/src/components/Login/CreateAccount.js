import React from "react";
import {Component} from 'react';
import './Login.css'
import Auth0ProviderWithHistory from '../../auth/auth0Provider';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import {
  Button,
  Container,
  Form,
  FormGroup,
  FormText,
  Input,
  Label,
  Navbar
} from 'reactstrap'; 
import LoginNavbar from '../Navbar/LoginNavbar'
import profile from '../Images/brightform.png'

class CreateAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    const {email, password} = this.state;
    return (  
    <Auth0ProviderWithHistory>
      <div className="LoginPage">
        <h2>Create Account</h2>
        <Form className="form">
          <FormGroup>
            <Label for="exampleEmail">Employee ID</Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="example@brightform.com"
            />
            <FormText>Your Employee ID is your Employee Email.</FormText>
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              placeholder="********"
            />
          </FormGroup>
          <FormGroup>
         <Button>LOGIN</Button>
        </FormGroup>
        <FormText><ul><Link to={"./CreateAccount.js"}> Don't have an account? Create one here!</Link></ul></FormText>
      </Form>
    </div>
    </Auth0ProviderWithHistory>
    );
  }
};

export default CreateAccount;