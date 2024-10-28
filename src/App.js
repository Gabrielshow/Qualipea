import React from 'react';

import { About , Blog, Content, Footer, ContactUs, Hero} from './container';
import { Navbar } from './components';
import { ThemeProvider } from './context/ThemeContext';


const App = () => {
  return (
    <ThemeProvider>
     <Navbar/>
     <Hero/>
     <About/>
     <Content/>
     <Blog/>
     <ContactUs/>
     <Footer/>
    </ThemeProvider>
  );
}

export default App;
