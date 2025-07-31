import React from 'react'
import Navbar from "../../../src/components/navbar/Navbar"
import Footer from '../../components/Footer/Footer'
import './Home.css'
import headerImg from '../../assets/header_img.png'
import Hero from '../../components/Hero/Hero'
import Listings from '../../components/Listings/Listing'
import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs'
import Contact from '../../components/Contact/Contact'
import About from '../../components/About/About'
import Testimonials from '../../components/Testimonial/Testimonial'
const Home = () => {
  return (
    <>
      <Navbar />
      <section className="hero">
        <img src={headerImg} alt="Hero" className="hero-img" />
        <Hero />
      </section>

      <About />

      
      <section className="featured-listings">
        
        <Listings />
      </section>

      {/* Why Choose Us */}
      <section className="why-choose">
        <WhyChooseUs />
      </section>
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default Home
