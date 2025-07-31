import React from 'react'
import { assets } from '../../assets/assets'
import './Hero.css'

const Hero = () => {
  return (
    <div className="hero" id='home'>
      <div className="hero-content">
        <h1>Find Your Dream Home</h1>
        <p>Search from thousands of properties across the country</p>
        <button><a href="#listings">Browse Listings</a></button>
      </div>
    </div>
  )
}

export default Hero