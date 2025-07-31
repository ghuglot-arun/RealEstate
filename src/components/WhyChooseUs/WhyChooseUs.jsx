import React from 'react';
import './WhyChooseUs.css';
import { FaCheckCircle, FaUsers, FaHandshake, FaShieldAlt } from 'react-icons/fa';

const WhyChooseUs = () => {
  return (
    <div className="why-choose-us">
      <h2>Why Choose Us</h2>
      <p className="subtitle">What makes us the most trusted real estate partner</p>

      <div className="reasons-grid">
        <div className="reason-card">
          <FaUsers className="reason-icon" />
          <h3>Expert Agents</h3>
          <p>Our team has deep knowledge of the local market and years of industry experience.</p>
        </div>

        <div className="reason-card">
          <FaHandshake className="reason-icon" />
          <h3>Personalized Service</h3>
          <p>We understand your unique needs and offer tailored solutions to match.</p>
        </div>

        <div className="reason-card">
          <FaCheckCircle className="reason-icon" />
          <h3>Verified Listings</h3>
          <p>All our properties are thoroughly verified and updated regularly.</p>
        </div>

        <div className="reason-card">
          <FaShieldAlt className="reason-icon" />
          <h3>Trusted & Secure</h3>
          <p>We prioritize transparency, security, and trust in all our deals.</p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
