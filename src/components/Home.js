import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>Expert Bathroom Remodeling in Vancouver, WA</h1>
          <p>Welcome to Vancouver Property Services, your trusted partner for high-quality bathroom renovations!</p>
          <Link to="/contact" className="cta-button">Get a Free Quote Today!</Link>
        </div>
      </div>
      <div className="content-section">
        <div className="services-overview">
          <h2>Our Specialties</h2>
          <ul>
            <li>Residential bathroom remodeling</li>
            <li>Custom tile work</li>
            <li>Trim installation</li>
            <li>Flooring solutions</li>
            <li>Comprehensive home improvements</li>
          </ul>
        </div>
        <div className="about-us">
          <h2>Why Choose Us?</h2>
          <p>Our focus on attention to detail and commitment to excellence ensures that your bathroom remodel will exceed your expectations. Transform your bathroom into a comfortable, stylish space with Vancouver Property Services.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;