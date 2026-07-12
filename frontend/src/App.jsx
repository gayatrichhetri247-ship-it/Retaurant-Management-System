import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
 // Adjust this import path to match your folder structure
import Login from './components/Pages/auth/Login'
import Signup from './components/Pages/auth/Signup'
import Forgot from './components/Pages/auth/Forgot'
import Home from './components/Pages/customer/Home'
import Verify from './components/Pages/auth/Verify'
import PasswordChange from './components/Pages/auth/PasswordChange'
import ProfileCard from './components/molecules/ProfileCard'
import Header from './components/organisms/Header'
import Contact from './components/Pages/customer/Contact'

const App = () => {
  // 1. Define global authentication state
  const [user, setUser] = useState(null);

  return (
    <>
      {/* 2. Place Header outside Routes so it renders on every page */}
      <Header user={user} setUser={setUser} />
      
      {/* 3. Your routes container */}
      <Routes>
        {/* Pass setUser to Login so Google/Form login can update the global state */}
        <Route path="/" element={<Login setUser={setUser} />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        
        <Route path='/signup' element={<Signup />} />
        <Route path='/forgot' element={<Forgot />} />
        <Route path='/verify' element={<Verify />} />
        <Route path='/newpassword' element={<PasswordChange />} />
        <Route path='/profile' element={<ProfileCard user={user} />} />
        <Route path='/home' element={<Home user={user} />} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </>
  )
}

export default App