import React from 'react';
import './Listing.css';
import { projectsData } from '../../assets/assets';

const Listings = () => {
  return (
    <div className="listings" id='listings'>
      <h2>Featured Listings</h2>
      <div className="listings-grid">
        {projectsData.map((item, index) => (
          <div className="listing-card" key={index}>
            <img src={item.image} alt={item.title} />
            <div className="listing-info">
              <h3>{item.title}</h3>
              <p>{item.location}</p>
              <span>{item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Listings;
