import React from 'react'
import Button from './components/atoms/Button'
import InputBox from './components/atoms/InputBox'
import Google from './components/atoms/Google'
import GoogleLogin from './components/molecules/GoogleLogin'
import LoginForm from './components/molecules/LoginForm'
import SignupForm from './components/molecules/SignupForm'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'


const App = () => {
  return (
    <div className='flex items-center justify-center h-screen'>
      {/* <Button text="Login"
      type='button'
      className='bg-red-600 border border-red-700 hover:bg-red-700'
       /> */}
      {/* <InputBox/> */}
      {/* <Google/> */}
      {/* <GoogleLogin/> */}
      {/* <Login/> */}
      <Signup/>
      {/* <LoginForm/> */}
      {/* <SignupForm/> */}
      {/* <Email color="red"/> */}
      
    </div>
  )
}

export default App
