import logo from './logo.svg';
import './App.css';
import Auth0ProviderWithHistory from './auth/auth0Provider';
import LoginButton from './components/LoginButton';

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
    <LoginButton />
    </Auth0ProviderWithHistory>
  );
}

export default App;
