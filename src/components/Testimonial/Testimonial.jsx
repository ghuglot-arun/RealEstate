import React from "react";
import { testimonialsData } from "../../assets/assets";
import "./Testimonial.css";

const Testimonials = () => {
  return (
    <div className="testimonials" id="testimonials">
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
    </div>
  );
};

export default Testimonials;
