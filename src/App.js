import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import servicesData from './data/servicesData'; // Ensure this import path is correct
import BathroomRemodelForm from './components/BathroomRemodelForm';
// Other imports remain the same

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Navigate replace to={`/portfolio/${servicesData[0].path}`} />} />
          <Route path="/portfolio/:serviceType" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/configure-bathroom" element={<BathroomRemodelForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;