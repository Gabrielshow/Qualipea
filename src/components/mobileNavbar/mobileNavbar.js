import React from 'react';
import { images } from '../../constants'
import { FaBars, FaTimes } from 'react-icons/fa'; // Importing hamburger and close icons
import { motion } from 'framer-motion'; // Import Framer Motion
import ThemeToggle from '../Theme/ThemeToggle';
import './mobileNavbar.css';

const mobileNavbar = () => {
  return (
    <div>
    <div className="mobile-menu-container">
        <div className="hamburger" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes size={30} color="white" /> : <FaBars size={30} color="white" />}
        </div>
        <ThemeToggle />
      </div>

      <motion.ul
        className={`navbar-links ${isMobileMenuOpen ? 'open' : ''}`}
        variants={menuVariants}
        initial="hidden"
        animate={isMobileMenuOpen ? 'visible' : 'hidden'}
      >
        <li className="p-opensans"><a href="#about">About</a></li>
        <li className="p-opensans"><a href="#blog">Blog</a></li>
        <li className="p-opensans"><a href="#contact">Contact Us</a></li>
        <li className="p-opensans"><a href="#footer">Footer</a></li>
      </motion.ul>
    </div>
  )
}

export default mobileNavbar