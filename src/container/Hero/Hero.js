import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';
import peaImage from '../../assets/pea.svg'; // Adjust the path as needed

const Hero = () => {
  // Animation variants
  const rotate = {
    initial: { rotate: -75 }, // Start from -90 degrees
    animate: {
      rotate: [0, -75], // Rotate to -90 degrees then back
      transition: { duration: 2 },
    },
  };

  const slideIn = {
    hidden: { opacity: 0, y: 50 }, // Start hidden
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }, // Slide in
  };

  return (
    <div className="container">
      <motion.div
        className="image-container"
        initial="initial"
        animate="animate"
        variants={rotate}
      >
        <img className="hero-image" src={peaImage} alt="Pea" />
      </motion.div>
      <motion.div
        className="text-container"
        variants={slideIn}
        initial="hidden"
        animate="visible"
      >
        <h2 className="hero-title">
          Transform Your Plate with Qualipea.
        </h2>
        <p className="hero-paragraph">
          Discover the power of affordable, healthy peas that enhance your meals and nourish your family. 
        </p>
      </motion.div>
    </div>
  );
}

export default Hero;
