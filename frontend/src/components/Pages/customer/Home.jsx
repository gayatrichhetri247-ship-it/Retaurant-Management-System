import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../organisms/Header'
import RestaurantHero from '../../organisms/HeroSection'
import ActiveMenuHighlights from '../../organisms/ActiveMenuHighlights'
import PromoOffersSection from '../../organisms/PromoOfferSection'
import TopRatedFoodsSection from '../../organisms/TopRatedFoodSection'
import Footer from '../../organisms/Footer'


const Home = () => {
  return (
    <div>
      <RestaurantHero/>
      <ActiveMenuHighlights/>
      <PromoOffersSection/>
      <TopRatedFoodsSection/>
      <Footer/>
    </div>
  )
}

export default Home