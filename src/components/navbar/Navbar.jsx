import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">🏡AG - Estate</div>

      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#listings">Listings</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#about">About</a></li>
      </ul>

      <div className="navbar-cta">
        <button className="btn-login">Login</button>
        <button className="btn-signup">Sign Up</button>
      </div>
    </nav>
  )
}

export default Navbar
