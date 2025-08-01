import React from 'react'
import { assets } from '../../assets/assets'
import './Hero.css'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <div  className="hero" id='home'>
      <motion.div
      initial={{opacity:0, y:100}}
      transition={{duration:1.5}}
      whileInView={{opacity:1, y:0}}
      viewport={{once:true}}
      className="hero-content">
        <h1>Find Your Dream Home</h1>
        <p>Search from thousands of properties across the country</p>
        <button><a href="#listings">Browse Listings</a></button>
      </motion.div>
    </div>
  )
}

export default Hero