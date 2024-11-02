import React from 'react';
import Router, { Route, RouterProvider, Routes } from 'react-router-dom'

import { About , Blog, Content, Footer, ContactUs, Hero} from './container';
import { Navbar } from './components';
import { ThemeProvider } from './context/ThemeContext';


const App = () => {
  return (
    <Router>
    <ThemeProvider>
     <Navbar/>
     <Hero/>
     {/* <About/> */}
     {/* <Content/> */}
     {/* <Blog/> */}
     <ContactUs/>
     <Footer/>
    </ThemeProvider>
    </Router>
  );
}

export default App;
