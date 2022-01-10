import React from "react";
import './Login.css'
import Auth0ProviderWithHistory from '../../auth/auth0Provider';
import LoginButton from './LoginButton';
import profile from '../Images/brightform.png'

const Login = () => {
    return (
    <Auth0ProviderWithHistory>
     <div className='main'>
      <div className='sub-login'>
        <div>
          <div className='imgs'>
            <div className='container-img'>
                <img src = {profile} alt ='profile'></img>
            </div>
            </div>
            <div>
              <h1>Login Page</h1>
              <div>
                <input type='text' placeholder="Employee ID" className="ID"></input>
              </div>
            </div>
                <LoginButton />
        </div>
      </div>
    </div> 
    </Auth0ProviderWithHistory>
    );
};

export default Login;