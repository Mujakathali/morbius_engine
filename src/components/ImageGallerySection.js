import React, { useEffect, useRef, useState } from 'react';
import './ImageGallerySection.css';
import jobSearchImage from '../assets/Images/jobsearchai.png';

const ImageGallerySection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isContainerVisible, setIsContainerVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Delay container animation
          setTimeout(() => {
            setIsContainerVisible(true);
          }, 500);
        }
      },
      {
        threshold: 0.3,
        rootMargin: '-50px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="image-gallery-section" ref={sectionRef}>
      <div className="image-gallery-container">
        <div className={`image-gallery-content ${isVisible ? 'animate-up' : ''}`}>
          <h2 className="large-h2">Search for Jobs</h2>
          <p className="center-align">
            AI-powered job search portal<br/>
            JobSearchAI is our proprietary semantic search technology built to cut through the noise. It understands what you mean, not just what you type.
          </p>
        </div>
        
        <div className={`job-search-container ${isContainerVisible ? 'slide-up' : ''}`}>
          <div className="job-search-header">
            <div className="job-search-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 8.5C21 5.46243 18.5376 3 15.5 3H8.5C5.46243 3 3 5.46243 3 8.5C3 11.5376 5.46243 14 8.5 14H15.5C18.5376 14 21 11.5376 21 8.5Z" stroke="currentColor" strokeWidth="2"/>
                <path d="M9 9L15 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="job-search-title">
              <h3>AI Job Search Portal</h3>
              <p>Personalized matches</p>
            </div>
          </div>
          
          <div className="job-search-image-container">
            <img src={jobSearchImage} alt="Job Search AI Portal" className="job-search-image" />
          </div>
        </div>
        
        <button className="find-jobs-btn">
          Find Jobs →
        </button>
      </div>
    </section>
  );
};

export default ImageGallerySection;
