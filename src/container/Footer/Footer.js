import React from 'react'
import { FaXTwitter, FaSquareInstagram, FaSquareThreads } from 'react-icons/fa6';
import { FaFacebook } from 'react-icons/fa';
import { images } from '../../constants';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer-nav">
      <div className="footer-logo">
        <img src={images.logo1} alt="Qualipea"/>
      </div>
      <div className="footer-links">
      <a href="#Twitter"> <FaXTwitter size={24} className="icon" /> </a>
      <a href="#Instagram"> <FaSquareInstagram size={24} className="icon" /> </a>
      <a href="#Facebook"> <FaFacebook size={24} className="icon" /> </a>
      <a href="#Threads"> <FaSquareThreads size={24} className="icon" /> </a>
      </div>

      <p> &copy;  {currentYear} <span>Qualipea</span>. All rights reserved.</p>
    </div>
  )
}

export default Footer
