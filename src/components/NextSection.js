import React, { useEffect, useRef, useState } from 'react';
import sixthImage from '../assets/Images/6th.png';
import ashwinAvatar from '../assets/Images/img2 (5).jpeg';
import nicoleAvatar from '../assets/Images/img1 (1).jpeg';
import './NextSection.css';

const NextSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState('');
  const sectionRef = useRef(null);

  const fullText = "Work with our expert team to build a compelling resume from scratch. Combines AI insights with human expertise for maximum impact.";

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
    <section className="next-section" ref={sectionRef}>
      <div className="next-container">
        <div className={`next-header ${isVisible ? 'animate-up' : ''}`}>
          <p className="next-subtitle">Build Resume</p>
          <h2 className="next-title">Personalized resume creation with professional experts</h2>
        </div>

        <div className="next-content">
          <div className="next-text-section">
            <div className={`persona-card reese-persona ${isVisible ? 'slide-in-left' : ''}`}>
              <div className="persona-info">

                <h3 className="persona-name">Ashwin</h3>
                <p className="persona-role">Resume experts available</p>
              </div>
              <div className="persona-avatar">
                <img src={ashwinAvatar} alt="Ashwin - Resume Expert" />
              </div>
            </div>

            <div className="next-text-container">
              <div className={`expanding-container ${typedText ? 'expanded' : ''}`}>
                <p className="typewriter-text">{typedText}</p>
                <span className="cursor">|</span>
              </div>

              {/* Resume Creation Container */}
              <div className={`resume-creation-card ${isVisible ? 'slide-up' : ''}`}>
                <div className="resume-header">
                  <div className="resume-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <circle cx="9" cy="7" r="4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="m22 21-3-3m0 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="resume-title">
                    <h3>Personalized Resume Creation</h3>
                    <p>Expert team & AI insights</p>
                  </div>
                </div>

                <div className="resume-experts">
                  <div className="expert-avatars">
                    <img src={ashwinAvatar} alt="Ashwin" className="expert-avatar" />
                    <img src={nicoleAvatar} alt="Nicole" className="expert-avatar expert-avatar-overlap" />
                  </div>
                  <div className="expert-info">
                    <h4>Ashwin & Nicole</h4>
                    <p>Resume experts available</p>
                  </div>
                </div>

                <div className="resume-features-combined">
                  <div className="feature-item">
                    <span>✓ Personalized consultation</span>
                  </div>
                  <div className="feature-item">
                    <span>✓ Industry-specific expertise</span>
                  </div>
                  <div className="feature-item">
                    <span>✓ ATS optimization guarantee</span>
                  </div>
                </div>
              </div>

              <button className="get-expert-help-btn">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 1v14M1 8h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
                Get Expert Help →
              </button>
            </div>
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default NextSection;
