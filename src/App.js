import LoginButton from './components/LoginButton';
import Profile from './components/Profile';
import LogoutButton from './components/LogoutButton';
import { useAuth0 } from '@auth0/auth0-react';
import './App.css';

function App() {
  const { isLoading, error } = useAuth0();
  return (
    <main className='main' >
     <h1>Auth0 User Login App </h1>
      { error && <p>Authentication Error</p>}
      { !error && isLoading && <p>Loading .....</p>}
       {!error && !isLoading && (
       <>
     <LoginButton/>
     <Profile/>
     <LogoutButton/>
       </>
       )}
      <form>
      
      </form>
     
    </main>
  );
}

export default App;
