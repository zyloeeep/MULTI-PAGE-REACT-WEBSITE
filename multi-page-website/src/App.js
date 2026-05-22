import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        {/* Navbar */}
        <header className="page-header">
          <div className="sphere-logo"></div>
          <nav className="nav-links">
            <Link to="/">HOME</Link>
            <Link to="/about">ABOUT</Link>
            <Link to="/contact">CONTACT</Link>
          </nav>
        </header>
      <div>    
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;