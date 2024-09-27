import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import './Portfolio.css';
import servicesData from '../data/servicesData';

// ... rest of the component code
function Portfolio() {
  const { serviceType } = useParams();
  const navigate = useNavigate();
  const service = servicesData.find(s => s.path === serviceType);
  const [images, setImages] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState('');

  useEffect(() => {
    if (!serviceType) {
      navigate(`/portfolio/${servicesData[0].path}`);
    } else {
      loadImages(serviceType);
    }
  }, [serviceType, navigate]);

  const loadImages = (serviceType) => {
    const context = require.context('../assets', false, /\.(png|jpe?g|svg)$/);
    const filteredImages = context.keys().filter(path => path.toLowerCase().includes(serviceType.toLowerCase()));
    setImages(filteredImages.map(path => context(path)));
  };

  const openModal = (imgSrc) => {
    setCurrentImg(imgSrc);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="portfolio">
      <div className="portfolio-nav">
        {servicesData.map((s) => (
          <Link key={s.path} to={`/portfolio/${s.path}`} className={`nav-link ${serviceType === s.path ? 'active' : ''}`}>
            {s.name}
          </Link>
        ))}
      </div>
      <h1>{service ? service.name : 'Service Not Found'}</h1>
      <div className="gallery">
      {images.map((img, index) => (
  <img
  key={index}
  src={img}
  alt={`${service ? service.name : 'No Image Available'}`}
  loading="lazy" // This enables native lazy loading
  onClick={() => openModal(img)}
/>
))}
      </div>
      {modalOpen && (
        <div className="modal" onClick={closeModal}>
          <span className="close">&times;</span>
          <img className="modal-content" src={currentImg} alt="Full Size" />
          <div className="caption">{service ? service.name : 'No Image Available'}</div>
        </div>
      )}
    </div>
  );
}

export default Portfolio;