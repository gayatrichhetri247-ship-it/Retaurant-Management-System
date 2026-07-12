import React, { useEffect, useState } from 'react'
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
import Reservations from './components/Pages/customer/Reservation'
import ProtectedAdmin from './components/Pages/admin/ProtectedAdmin'
import Dashboard from './components/Pages/admin/Dashboard'
import FoodManagement from './components/Pages/admin/FoodManagement'
import UserManagement from './components/Pages/admin/UserManagement'
import OrderManagement from './components/Pages/admin/OrderManagement'
import AddFood from './components/Pages/admin/AddFood'

import { useDispatch, useSelector } from 'react-redux'
import { getUser } from './api/auth.services'
import { AuthSuccess } from './redux/features/authSlice'
import Foods from './components/Pages/customer/Food'
import EditFood from './components/Pages/admin/EditFood'
import Cart from './components/organisms/Cart'

const App = () => {
  const { user, isAuthenticated } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

useEffect(() => {
  const fetchUser = async () => {
    try {
      const data = await getUser();
      dispatch(AuthSuccess(data.user));
    } catch (error) {
      console.error(error);
    }
  };

  fetchUser();
}, [dispatch]);

  return (
    <>
      {/* 2. Place Header outside Routes so it renders on every page */}
      <Header/>
      
      {/* 3. Your routes container */}
      <Routes>
        {/* Pass setUser to Login so Google/Form login can update the global state */}
        <Route path="/" element={<Login  />} />
        <Route path="/login" element={<Login  />} />
        
        <Route path='/signup' element={<Signup />} />
        <Route path='/forgot' element={<Forgot />} />
        <Route path='/verify' element={<Verify />} />
        <Route path='/newpassword' element={<PasswordChange />} />
        <Route path='/profile' element={<ProfileCard user={user} />} />
        <Route path='/home' element={<Home user={user} />} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/reservations' element={<Reservations/>} />
        <Route path='/menu' element={<Foods/>} />
        <Route path='/cart' element={<Cart/>} />

         <Route element={<ProtectedAdmin />}>
          <Route path="/admin" element={<Dashboard />}>
            <Route index element={<FoodManagement />} />
            <Route path="food-management" element={<FoodManagement />} />
            <Route path="user-management" element={<UserManagement />} />
            <Route path="order-management" element={<OrderManagement />} />
            <Route path="add-food" element={<AddFood />} />
            <Route path="edit-food" element={<EditFood />} />
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App