import React from 'react';
// import { images } from '../../constants';
import { motion } from 'framer-motion';
import ThemeToggle from '../Theme/ThemeToggle';
import './mobileNavbar.css';

const MobileNavbar = ({ isOpen, toggleMobileMenu }) => {
  const menuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: 'auto', transition: { duration: 0.3 } },
  };

  return (
    <div className="mobile-menu-container">
      {/* <ThemeToggle /> */}

      <motion.ul
        className={`navbar-links ${isOpen ? 'open' : ''}`}
        variants={menuVariants}
        initial="hidden"
        animate={isOpen ? 'visible' : 'hidden'}
      >
        <li className="p-opensans"><a href="#about">About</a></li>
        <li className="p-opensans"><a href="#blog">Blog</a></li>
        <li className="p-opensans"><a href="#contact">Contact Us</a></li>
        <li className="p-opensans"><a href="#footer">Footer</a></li>
      </motion.ul>
    </div>
  );
}

export default MobileNavbar;
