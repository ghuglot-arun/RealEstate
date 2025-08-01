import React from "react";
import { testimonialsData } from "../../assets/assets";
import "./Testimonial.css";
import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <motion.div 
    initial={{opacity:0, x:100}}
      transition={{duration:1}}
      whileInView={{opacity:1, x:0}}
      viewport={{once:true}}
    className="testimonials" id="testimonials">
      <h2>What Our Clients Say</h2>
      <div className="testimonials-container">
        {testimonialsData.map((item, index) => (
          <div className="testimonial-card" key={index}>
            <img src={item.image} alt={item.alt} />
            <h3>{item.name}</h3>
            <p className="title">{item.title}</p>
            <div className="stars">
              {"⭐".repeat(item.rating)}
            </div>
            <p className="text">"{item.text}"</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Testimonials;
