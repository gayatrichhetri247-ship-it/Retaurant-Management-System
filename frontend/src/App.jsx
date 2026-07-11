import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Pages/auth/Login'
import Signup from './components/Pages/auth/Signup'
import Forgot from './components/Pages/auth/Forgot'
import Home from './components/Pages/customer/Home'
import Verify from './components/Pages/auth/Verify'
import PasswordChange from './components/Pages/auth/PasswordChange'
import ProfileCard from './components/molecules/ProfileCard'



const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/login" element={<Login/>} />
      <Route path='/signup' element={<Signup/>} />
      <Route path='/forgot' element={<Forgot/>} />
      <Route path='/verify' element={<Verify/>} />
      <Route path='/newpassword' element={<PasswordChange/>} />
      <Route path='/profile' element={<ProfileCard/>} />

      <Route path='/home' element={<Home/>} />
    </Routes>
    
  )
}

export default App
