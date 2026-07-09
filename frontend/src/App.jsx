import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Pages/auth/Login'
import Signup from './components/Pages/auth/Signup'
import Forgot from './components/Pages/auth/Forgot'
import VerifyOtp from './components/molecules/VerifyOtp'



const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/login" element={<Login/>} />
      <Route path='/signup' element={<Signup/>} />
      <Route path='/forgot' element={<Forgot/>} />
      <Route path='/verify' element={<VerifyOtp/>} />
    </Routes>
    
  )
}

export default App
