import React from 'react'
import { FaXTwitter, FaSquareInstagram, FaSquareThreads } from 'react-icons/fa6';
import { FaFacebook } from 'react-icons/fa';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="nav">
      <div className="logo">
        <img src={images.logo2} alt="Qualipea" className="image"/>
      </div>
      <div className="links">
      <a href="#Twitter"> <FaXTwitter size={24} className="icon" /> </a>
      <a href="#Instagram"> <FaSquareInstagram size={24} className="icon" /> </a>
      <a href="#Facebook"> <FaFacebook size={24} className="icon" /> </a>
      <a href="#Threads"> <FaSquareThreads size={24} className="icon" /> </a>
      </div>

      <p className="copy"> &copy;  {currentYear} <span className="green">Qualipea</span>. All rights reserved.</p>
    </div>
  )
}

export default Footer
