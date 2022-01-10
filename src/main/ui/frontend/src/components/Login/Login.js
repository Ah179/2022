import React from "react";
import Auth0ProviderWithHistory from '../../auth/auth0Provider';
import LoginButton from './LoginButton';
import profile from '../Images/brightform.png'

const Login = () => {
    return (
    <Auth0ProviderWithHistory>
    <div className='login-main'>
      <div className='sub-login'>
        <div>
          <div className='imgs'>
            <div className='container-img'>
                <img src = {profile} alt ='profile'></img>
                //The profile image is NOT IT, 
                  Looking like a whole mess 
            </div>
          </div>
            <h1>Login Page</h1>
            <div>
            //Insert more images, EMPLOYEE ID, PASSWORD
            </div>
                <LoginButton />
        </div>
      </div>
    </div>
    </Auth0ProviderWithHistory>
    );
};

export default Login;