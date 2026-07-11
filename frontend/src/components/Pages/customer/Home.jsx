import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../organisms/Header'

const Home = () => {
  return (
    <div>
      <Link to="/profile"><p>Profile</p></Link>
    </div>
  )
}

export default Home