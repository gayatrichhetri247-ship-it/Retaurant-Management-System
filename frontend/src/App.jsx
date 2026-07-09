import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Pages/auth/Login'
import Signup from './components/Pages/auth/Signup'


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/login" element={<Login/>} />
      <Route path='/signup' element={<Signup/>} />
    </Routes>
    
  )
}

export default App
