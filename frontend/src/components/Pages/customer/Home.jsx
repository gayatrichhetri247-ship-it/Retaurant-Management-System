import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>Home
      <Link to="/profile"><p>Profile</p></Link>
    </div>
  )
}

export default Home