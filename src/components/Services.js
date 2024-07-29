import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';
import servicesData from '../data/servicesData';

function Services() {
  return (
    <div className="services">
      <h1>Our Services</h1>
      <div className="services-list">
        {servicesData.map(service => (
          <div className="service-card" key={service.path}>
            <Link to={`/portfolio/${service.path}`}>
              <img src={service.image} alt={service.name} />
              <h2>{service.name}</h2>
              <p>{service.description}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;