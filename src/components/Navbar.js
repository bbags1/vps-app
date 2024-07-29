import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <img src="/Assets/logo.png" alt="" style={{ width: '300px', height: 'auto' }} />
      </Link>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/contact">Contact Us</Link>
      </div>
    </nav>
  );
}

export default Navbar;