import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <div className="content">
        <h1>Expert Bathroom Remodeling in Vancouver, WA</h1>
        <p>Welcome to Vancouver Property Services, your trusted partner for high-quality bathroom renovations!</p>
        <p>As independent, licensed contractors located in Vancouver, Washington, we specialize in:</p>
        <ul>
          <li>Residential bathroom remodeling</li>
          <li>Tile work</li>
          <li>Custom trim</li>
          <li>Flooring</li>
          <li>Home Remodeling</li>
        </ul>
        <p>Our focus on attention to detail and commitment to excellence ensures that your bathroom remodel will exceed your expectations.</p>
        <p>Transform your bathroom into a comfortable, stylish space with Vancouver Property Services.</p>
        <Link to="/contact" className="quote-button">Get a Free Quote Today!</Link>
      </div>
    </div>
  );
}

export default Home;