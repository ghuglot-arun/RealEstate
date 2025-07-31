import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <div className="footer">
      <img src={assets.logo_dark} alt="Logo" />
      <p>© {new Date().getFullYear()} Real Estate Co. All rights reserved.</p>
      <div className="footer-links">
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </div>
    </div>
  );
};

export default Footer;

