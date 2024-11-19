import React from 'react';
import { Navbar } from '../../components';
import Hero from '../Hero/Hero';
import ContactUs from '../ContactUs/ContactUs';
import Footer from '../Footer/Footer';
import About from '../About/About';
// import Content from '../Content/Content';

const Home = () => {
  return (
    <>
     <Navbar/>
     <Hero/>
     <About/>
     <ContactUs/>
     <Footer/>
    </>
  )
}

export default Home;