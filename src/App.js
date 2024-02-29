import React from 'react';

import { About , Blog, Content, Footer, ContactUs, Header} from './container';
import { Navbar } from './components';


const App = () => {
  return (
    <div className="App">
     <Navbar/>
     <Header/>
     <About/>
     <Content/>
     <Blog/>
     <ContactUs/>
     <Footer/>

    </div>
  );
}

export default App;
