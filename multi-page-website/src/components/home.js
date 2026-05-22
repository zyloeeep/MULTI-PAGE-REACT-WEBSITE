import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="hero">
      <h1>Good day! I'm <br /><span>Cielo Geneblazo Seco</span></h1>
      <p>Welcome to my website!</p>
      <div className="btn-group">
        <button className="primary" onClick={() => navigate('/about')}>About →</button>
        <button className="secondary" onClick={() => navigate('/contact')}>Contact →</button>
      </div>
    </div>
  );
}