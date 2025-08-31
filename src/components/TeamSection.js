import React, { useEffect, useRef, useState } from 'react';
import './TeamSection.css';
import valerieAvatar from '../assets/Images/img2 (5).jpeg';
import image81 from '../assets/Images/81st.png';
import image82 from '../assets/Images/82nd.png';

const TeamSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState('');
  const sectionRef = useRef(null);

  const fullText = "Let our experts handle your job applications from start to finish. We find relevant opportunities, customize your applications, and submit them on your behalf.";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
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

  useEffect(() => {
    if (isVisible) {
      let currentIndex = 0;
      const typeInterval = setInterval(() => {
        if (currentIndex <= fullText.length) {
          setTypedText(fullText.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(typeInterval);
        }
      }, 50);

      return () => clearInterval(typeInterval);
    }
  }, [isVisible, fullText]);

  return (
    <section className="team-section" ref={sectionRef}>
      <div className="team-container">
        <div className={`team-header ${isVisible ? 'animate-up' : ''}`}>
          <p className="team-subtitle">Expert Job Application Service</p>
          <h2 className="team-title">End-to-end assistance</h2>
        </div>
        
        <div className="team-content">
          <div className="team-text-section">
            <div className={`expanding-container ${typedText ? 'expanded' : ''}`}>
              <p className="typewriter-text">{typedText}</p>
              <span className="cursor">|</span>
            </div>
          </div>
        </div>
        
        <div className={`job-service-container ${isVisible ? 'slide-up' : ''}`}>
          <div className="job-service-header">
            <div className="job-service-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
                <path d="M8 21l4-7 4 7M9 9h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="job-service-title">
              <h3>Expert Job Application Service</h3>
              <p>End-to-end assistance</p>
            </div>
          </div>
          
          <div className="job-service-video-container">
            <div className="video-wrapper">
              <iframe 
                src="https://www.youtube.com/embed/H9pAthzb6M0" 
                title="Mobius Job Application Service"
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
                className="job-service-video"
              ></iframe>
            </div>
          </div>
        </div>
        
        <button className="start-applying-btn">
          Start Applying →
        </button>
      </div>
    </section>
  );
};

export default TeamSection;
