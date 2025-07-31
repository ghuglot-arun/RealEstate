// src/components/About/About.jsx
import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about" id='about'>
      <div className="about-container">
        <h2>About Us</h2>
        <p>
          At DreamHome Realty, we believe finding a home should be exciting, not stressful. 
          Whether you're buying your first home, investing in property, or selling a cherished space, 
          we’re here to guide you with trust, clarity, and experience.
        </p>
        <p>
          With years of market knowledge and a passion for helping people, we aim to match 
          every client with the perfect place to call home.
        </p>
      </div>
    </section>
  );
};

export default About;
