import React from 'react';
import { Route, Routes } from 'react-router-dom'

import { Home } from './container';
import { Login, Signin, Dashboard  } from './components/admin';
// import { Signin } from './components/admin/signin/Signin.js';
import { ThemeProvider } from './context/ThemeContext';
// import { Dashboard } from './components/admin/admin/Dashboard.js'


const App = () => {
  return (
    <ThemeProvider>
     <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/admin/login" element={<Login/>}/>
     <Route path="/admin/signin" element={<Signin/>} />
     <Route path="/admin/dashboard" element={<Dashboard/>}/>
     </Routes>
    </ThemeProvider>
  );
}

export default App;
