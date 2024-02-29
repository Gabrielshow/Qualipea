import React from 'react';
import { images } from '../../constants';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
      <img src={images.logo1} alt="logo" />
      </div>
      <ul className="navbar-links">
      <li className="p-opensans"> <a href="#home">Home</a></li>
      <li className="p-opensans"> <a href ="#about">About</a></li>
      <li className="p-opensans"> <a href = "blog">Blog</a></li>
      <li className="p-opensans"> <a href = "ContactUs">Contact Us</a></li>
      <li className="p-opensans"> <a href = "Footer">Footer</a></li>


      </ul>
    </nav>
  );
}

export default Navbar
