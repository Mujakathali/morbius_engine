import React from 'react';
import './BrandLogos.css';

const BrandLogos = () => {
  const brands = [
    'AMES SPORTS',
    'ARC\'TERYX', 
    'ARMSTRONG LEE & BAKER',
    'BNI',
    'COCOLAB',
    'COMCAST'
  ];

  return (
    <section className="brand-logos-section">
      <div className="brand-logos-container">
        <div className="brand-logos-track">
          {/* First set of brands */}
          {brands.map((brand, index) => (
            <div key={`brand-1-${index}`} className="brand-logo">
              {brand}
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {brands.map((brand, index) => (
            <div key={`brand-2-${index}`} className="brand-logo">
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandLogos;
