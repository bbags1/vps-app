import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <img src="/Assets/logo.png" alt="" style={{ width: '300px', height: 'auto' }} />
      </Link>
      <button className="menu-toggle" onClick={toggleMenu}>Menu</button>
      <div className={`navbar-links ${isOpen ? "open" : ""}`}>
        <Link to="/" onClick={toggleMenu}>Home</Link>
        <Link to="/services" onClick={toggleMenu}>Services</Link>
        <Link to="/portfolio" onClick={toggleMenu}>Portfolio</Link>
        <Link to="/contact" onClick={toggleMenu}>Contact Us</Link>
      </div>
    </nav>
  );
}

export default Navbar;