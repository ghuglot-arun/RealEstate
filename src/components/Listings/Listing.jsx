import React from 'react';
import './Listing.css';
import { projectsData } from '../../assets/assets';
import { motion } from 'framer-motion';

const Listings = () => {
  return (
    <motion.div
     initial={{opacity:0, x:-200}}
      transition={{duration:1}}
      whileInView={{opacity:1, x:0}}
      viewport={{once:true}}
    className="listings" id='listings'>
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
    </motion.div>
  );
};

export default Listings;
