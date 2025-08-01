import React, { useState } from 'react';
import './Contact.css';
import { motion } from 'framer-motion';

const Contact = () => {
  const [status, setStatus] = useState("Send");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const form = new FormData(e.target);

    const res = await fetch("https://formspree.io/f/mnnzzrlb", {
      method: "POST",
      body: form,
      headers: {
        Accept: "application/json",
      },
    });

    if (res.ok) {
      setStatus("Sent!");
      e.target.reset();
    } else {
      setStatus("Failed. Try again");
    }
  };

  return (
    <motion.div 
    initial={{opacity:0, x:-200}}
      transition={{duration:1}}
      whileInView={{opacity:1, x:0}}
      viewport={{once:true}}
    className="contact-container" id='contact'>
      <h2>Contact Us</h2>
      
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Email Address" required />
        <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
        <button type="submit">{status}</button>
      </form>
    </motion.div>
  );
};

export default Contact;
