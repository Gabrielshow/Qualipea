import React from 'react';

import { About , Blog, Content, Footer, ContactUs, Header} from './container';
import { Navbar } from './components';
import { ThemeProvider } from './context/ThemeContext';


const App = () => {
  return (
    <ThemeProvider>

    <div className="App">
     <Navbar/>
     <Header/>
     <About/>
     <Content/>
     <Blog/>
     <ContactUs/>
     <Footer/>

    </div>
    </ThemeProvider>
  );
}

export default App;
