import React, { useState } from 'react';
import { images } from '../../constants';
import ThemeToggle from '../Theme/ThemeToggle';
import { FaBars, FaTimes } from 'react-icons/fa'; // Importing hamburger and close icons
import { motion } from 'framer-motion'; // Import Framer Motion
import MobileNavbar from '../mobileNavbar/mobileNavbar'; // Corrected import

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false); // State for mobile menu

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen); // Toggle mobile menu
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

      {/* Mobile Menu Toggle */}
      <div className="hamburger" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <FaTimes size={30} color="white" /> : <FaBars size={30} color="white" />}
      </div>

      {/* Render Mobile Navbar on small screens */}
      {isMobileMenuOpen && (
        <MobileNavbar isOpen={isMobileMenuOpen} toggleMobileMenu={toggleMobileMenu} />
      )}
    </nav>
  );
}

export default Navbar;
