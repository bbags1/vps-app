import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <div className="content">
        <h1>Welcome to Vancouver Property Services!</h1>
        <p>We are independent, licensed contractors located in Vancouver Washington</p>
        <p>We specialize in residential bathroom remodeling, tile work, trim, flooring, and all things required to turn your home into the comfortable space it should be.</p>
        <p>We focus on the little details and doing things the right way.</p>
        <p>Give us a call today to find out how we can assist you in your home service needs!</p>
        <ul>
          <li><Link to="/contact" className="quote-button">Contact Us</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Home;