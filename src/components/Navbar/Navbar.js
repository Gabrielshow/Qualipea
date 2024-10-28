import React, { useState } from 'react';
import { images } from '../../constants';
import ThemeToggle from '../Theme/ThemeToggle';
import { FaBars, FaTimes } from 'react-icons/fa'; // Importing hamburger and close icons
import { motion } from 'framer-motion'; // Import Framer Motion
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false); // State for mobile menu

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen); // Toggle mobile menu
  };

  const menuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: 'auto', transition: { duration: 0.3 } },
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={images.logo1} alt="logo" />
      </div>

      <div className="desktop-menu-container">
        <ul className={`navbar-links ${isMobileMenuOpen ? '' : 'open'}`}>
          <li className="p-opensans"><a href="#about">About</a></li>
        <li className="p-opensans"><a href="#blog">Blog</a></li>
        <li className="p-opensans"><a href="#contact">Contact Us</a></li>
        <li className="p-opensans"><a href="#footer">Footer</a></li>
        </ul>
        <ThemeToggle />
      </div>
      
    </nav>
  );
}

export default Navbar;
