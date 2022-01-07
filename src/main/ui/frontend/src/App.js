import logo from './logo.svg';
import './App.css';
import Auth0ProviderWithHistory from './auth/auth0Provider';
import LoginButton from './components/LoginButton';
import profile from './Images/brightform.png'

function App() {
  return (
    <Auth0ProviderWithHistory>
    {/* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> */}
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
        </div>
      </div>
    </div>
    <LoginButton />
    </Auth0ProviderWithHistory>
  );
}

export default App;
