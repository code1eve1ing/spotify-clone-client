import { AuthenticateWithRedirectCallback } from '@clerk/clerk-react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import AuthCallbackPage from './pages/authCallback/AuthCallbackPage.tsx';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route
          path='/sso-callback'
          element={<AuthenticateWithRedirectCallback signUpForceRedirectUrl={'/auth-callback'} />}
        />
        <Route path='/auth-callback' element={<AuthCallbackPage />} />
        <Route />
      </Routes>
      {/* <header>
      <SignedOut>
        <SignInButton >
            <Button className='m-6'>Sign in</Button>
          </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header> */}
    </>
  )
}

export default App
