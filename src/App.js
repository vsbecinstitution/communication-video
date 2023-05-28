import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { auth } from './firebase';
import Home from "./Home"
import Login from './Login';
import Register from './Register';
import AdminLogin from "./Adminlogin"
import Admin from "./Admin"




function App() {
  

  return (
    
    <Router>
      <Routes>
        <Route path="/communication-video" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path = "/home" element = {<Home/>}/>
        <Route path = "/adminlogin" element = {<AdminLogin/>}/>
        <Route path = "/admin" element = {<Admin/>}/>
      </Routes>
    </Router>
  );
}

export default App;