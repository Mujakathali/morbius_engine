import React, { useEffect, useRef, useState } from 'react';
import './WhyChooseUsSection.css';

const WhyChooseUsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLeftVisible, setIsLeftVisible] = useState(false);
  const [isRightVisible, setIsRightVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Stagger the animations
          setTimeout(() => {
            setIsLeftVisible(true);
          }, 300);
          setTimeout(() => {
            setIsRightVisible(true);
          }, 600);
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
    <section className={`why-choose-us-section ${isVisible ? 'animate-up' : ''}`} ref={sectionRef}>
      <div className="why-choose-us-container">
        <div className={`left-content ${isLeftVisible ? 'slide-in-left' : ''}`}>
          <h2 className="why-choose-us-title">Why Choose Us</h2>
          <p className="why-choose-us-description">
            Our platform combines expert executive coach domain expertise with our
            proprietary AI tech to deliver results.
          </p>
          
          <div className="features-list">
            <div className="feature-item">
              <div className="feature-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="2"/>
                  <path d="M6 10l2 2 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span>Proprietary LLM for advanced resume customization</span>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="2"/>
                  <path d="M6 10l2 2 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span>Human Executive Coaches review and refinement</span>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="2"/>
                  <path d="M6 10l2 2 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span>ATS-compatible formatting and optimization</span>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="2"/>
                  <path d="M6 10l2 2 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span>Direct email delivery of your customized resume</span>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="2"/>
                  <path d="M6 10l2 2 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span>Advanced keyword optimization for job descriptions</span>
            </div>
          </div>
          
          <button className="try-it-now-btn">
            Try It Now →
          </button>
        </div>
        
        <div className={`right-content ${isRightVisible ? 'slide-in-right' : ''}`}>
          <div className="dashboard-mockup">
            <div className="mockup-header">
              <div className="mockup-controls">
                <div className="control-dot red"></div>
                <div className="control-dot yellow"></div>
                <div className="control-dot green"></div>
              </div>
            </div>
            
            <div className="mockup-content">
              <div className="progress-section">
                <div className="progress-header">
                  <div className="progress-icon">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="8" r="6" stroke="#3b82f6" strokeWidth="2"/>
                      <path d="M5 8l2 2 4-4" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="progress-text">AI Analysis in Progress</span>
                </div>
                
                <div className="progress-bar">
                  <div className="progress-fill"></div>
                </div>
                
                <div className="progress-steps">
                  <div className="step-item">
                    <span className="step-label">Original Resume</span>
                    <span className="step-status">AI Optimized</span>
                  </div>
                </div>
              </div>
              
              <div className="review-section">
                <div className="review-header">
                  <div className="review-icon">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="8" r="6" stroke="#10b981" strokeWidth="2"/>
                      <path d="M5 8l2 2 4-4" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="review-content">
                    <span className="review-title">Executive Coach Review</span>
                    <span className="review-subtitle">Human expertise applied</span>
                  </div>
                  <span className="review-status">Complete</span>
                </div>
              </div>
              
              <div className="delivery-section">
                <div className="delivery-header">
                  <span className="delivery-title">Ready for Delivery</span>
                  <div className="delivery-icon">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <rect x="2" y="3" width="12" height="10" rx="1" stroke="#6b7280" strokeWidth="1.5"/>
                      <path d="M2 4l6 4 6-4" stroke="#6b7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
