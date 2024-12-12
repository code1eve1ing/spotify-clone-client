import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/clerk-react'
import './App.css'
import { Button } from './components/ui/button'

function App() {

  return (
    <>
     <header>
      <SignedOut>
        <SignInButton >
            <Button className='m-6'>Sign in</Button>
          </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
    </>
  )
}

export default App
