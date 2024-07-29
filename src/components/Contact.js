import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact Mark</h1>
      <div className="contact-details">
        <p><strong>Email:</strong> <a href="mailto:vancouverps@comcast.net">vancouverps@comcast.net</a></p>
        <p><strong>Phone:</strong> <a href="tel:+13603268353">(360) 326 8353</a></p>
      </div>
    </div>
  );
}

export default Contact;