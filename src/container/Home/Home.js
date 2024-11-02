import React from 'react';
import { About , Blog, Content, Footer, ContactUs, Hero} from './container';
import { Navbar } from './components';

const Home = () => {
  return (
    <>
     <Navbar/>
     <Hero/>
     <ContactUs/>
     <Footer/>
    </>
  )
}

export default Home;