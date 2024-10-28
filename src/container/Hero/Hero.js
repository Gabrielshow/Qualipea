import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';
import peaImage from '../../assets/pea.svg'; // Adjust the path as needed

const Hero = () => {
  // Animation variants
  const shake = {
    shake: {
      x: [0, -10, 10, -10, 0], // Shake effect
      transition: { duration: 0.5, repeat: Infinity }
    }
  };

  const slideIn = {
    hidden: { opacity: 0, y: 50 }, // Start hidden
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } // Slide in
  };

  return (
    <div className="container">
      <motion.div
        className="image-container"
        variants={shake}
        initial="shake"
        animate="shake"
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
          Discover the power of affordable, healthy peas that enhance your meals and nourish your family. At Qualipea, we are dedicated to providing high-quality beans that are accessible to all. Join us in promoting wholesome eating for a healthier, happier community. Experience the difference with Qualipea—where quality meets affordability.
        </p>
      </motion.div>
    </div>
  );
}

export default Hero;
