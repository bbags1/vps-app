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
        <img src="/Assets/logo.png" alt="Vancouver Property Services" />
      </Link>
      <div className="menu-container">
        <button className="menu-toggle" onClick={toggleMenu}>
          Menu
        </button>
        <ul className={`navbar-links ${isOpen ? "open" : ""}`}>
          <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/services" onClick={toggleMenu}>Services</Link></li>
          <li><Link to="/portfolio" onClick={toggleMenu}>Portfolio</Link></li>
          <li><Link to="/contact" onClick={toggleMenu}>Contact Us</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;