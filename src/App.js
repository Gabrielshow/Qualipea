import React from 'react';

import { About , Blog, Content, Footer, ContactUs, Header} from './container';
import { Navbar } from './components';
import { ThemeProvider } from './context/ThemeContext';


const App = () => {
  return (
    <ThemeProvider>
     <Navbar/>
     <Header/>
     <About/>
     <Content/>
     <Blog/>
     <ContactUs/>
     <Footer/>
    </ThemeProvider>
  );
}

export default App;
