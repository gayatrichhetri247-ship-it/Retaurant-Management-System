import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../organisms/Header'
import RestaurantHero from '../../organisms/HeroSection'
import ActiveMenuHighlights from '../../organisms/ActiveMenuHighlights'

const Home = () => {
  return (
    <div>
      <RestaurantHero/>
      <ActiveMenuHighlights/>
    </div>
  )
}

export default Home