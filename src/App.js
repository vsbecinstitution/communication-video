import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { useState } from 'react';
// import { auth } from './firebase';
// import Home from "./Home"
import Login from './Login';
// import Register from './Register';
// import AdminLogin from "./Adminlogin"
// import Admin from "./Admin"



function App() {
  

  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        
      </Routes>
    </Router>
  );
}

export default App;