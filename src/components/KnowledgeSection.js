import React, { useEffect, useRef, useState } from 'react';
import './KnowledgeSection.css';
import darrenAvatar from '../assets/Images/img1.jpeg';
import knowledgeImage from '../assets/Images/71st.png';

const KnowledgeSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState('');
  const sectionRef = useRef(null);

  const fullText = "for each job application with AI precision and human review Tailor your resume for each job application with AI precision and human review";

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
    <section className="knowledge-section" ref={sectionRef}>
      <div className="knowledge-container">
        <div className={`knowledge-header ${isVisible ? 'animate-up' : ''}`}>
          <p className="knowledge-subtitle">Customize Resume</p>
          <h2 className="knowledge-title">Tailor your resume </h2>
        </div>
        
        <div className="knowledge-content">
          <div className="knowledge-text-section">
            <div className="knowledge-text-container">
              <div className={`expanding-container ${typedText ? 'expanded' : ''}`}>
                <p className="typewriter-text">{typedText}</p>
                <span className="cursor">|</span>
              </div>
              
              {/* Resume Customization Engine Container */}
              <div className={`customization-engine-card ${isVisible ? 'slide-up' : ''}`}>
                <div className="engine-header">
                  <div className="engine-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="engine-title">
                    <h3>Resume Customization Engine</h3>
                    <p>AI-powered optimization</p>
                  </div>
                </div>

                <div className="engine-video-container">
                  <div className="youtube-embed-container">
                    <iframe
                      src="https://www.youtube.com/embed/ZNyuKTDzXkw"
                      title="Resume Customization Engine Demo"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="youtube-iframe"
                    ></iframe>
                  </div>
                </div>
              </div>

              <div className="start-customizing-container">
                <button className="start-customizing-btn">
                  Start customizing →
                </button>
              </div>
            </div>
          </div>
          
          
        </div>
      </div>
    </section>
  );
};

export default KnowledgeSection;
