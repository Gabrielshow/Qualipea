import React from 'react';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { Home } from './container';
// import { Login, Signin, Dashboard  } from './components';
import { Login } from './components/admin/Login/Login.js';
import { Signin } from './components/admin/Signin/Signin.js';
import { Dashboard } from './components/admin/Dashboard/Dashboard.js';
import { ThemeProvider } from './context/ThemeContext';
// import { Dashboard } from './components/admin/admin/Dashboard.js'


const App = () => {
  return (
    <ThemeProvider>
    <Router>
     <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/admin/login" element={<Login/>}/>
     <Route path="/admin/signin" element={<Signin/>} />
     <Route path="/admin/dashboard" element={<Dashboard/>}/>
     </Routes>
    </Router>
    </ThemeProvider>
  );
}

export default App;
