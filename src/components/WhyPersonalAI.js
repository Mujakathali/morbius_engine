import React, { useEffect, useRef, useState } from 'react';
import './WhyPersonalAI.css';
import centerImage from '../assets/Images/4th.png';

const WhyPersonalAI = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDashboardVisible, setIsDashboardVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Initially hide the section
    const section = sectionRef.current;
    if (section) {
      section.style.display = 'none';
    }

    // Listen for Model3 animation completion
    const handleModel3Complete = () => {
      if (section) {
        section.style.display = 'flex';
      }
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Delay dashboard animation
            setTimeout(() => {
              setIsDashboardVisible(true);
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
    };

    // Wait for Model3 animation to complete before showing
    window.addEventListener('model3AnimationComplete', handleModel3Complete);

    return () => {
      window.removeEventListener('model3AnimationComplete', handleModel3Complete);
    };
  }, []);

  return (
    <section className="why-personal-ai-section" ref={sectionRef}>
      <div className="why-personal-ai-container">
        <div className={`why-personal-ai-content ${isVisible ? 'animate-up' : ''}`}>
          <h2 className="large-h2">Analyze Job Market </h2>
          <p className="center-align">
          Get comprehensive insights into current market trends and opportunities
          Our AI analyzes thousands of job postings to identify trending skills, salary ranges, and emerging opportunities in your field
          </p>
        </div>
        
        
        
        <div className={`dashboard-container ${isDashboardVisible ? 'slide-up' : ''}`}>
          <div className="dashboard-header">
            <div className="dashboard-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 3v18h18" stroke="currentColor" strokeWidth="2"/>
                <path d="M7 12l3-3 2 2 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="7" cy="12" r="1" fill="currentColor"/>
                <circle cx="10" cy="9" r="1" fill="currentColor"/>
                <circle cx="12" cy="11" r="1" fill="currentColor"/>
                <circle cx="17" cy="6" r="1" fill="currentColor"/>
              </svg>
            </div>
            <div className="dashboard-title">
              <h3>Market Analysis Dashboard</h3>
              <p>Real-time insights</p>
            </div>
          </div>
          
          <div className="dashboard-content">
            <div className="dashboard-metric">
              <h4># of new jobs posted that pay $250K/year or more</h4>
              <p className="dashboard-subtitle">Companies with the most high-salary job postings in May 2025</p>
              <button className="refresh-btn">Refresh Data</button>
            </div>
            
            <div className="scrollable-content">
              <div className="company-bubbles">
                <div className="bubble bubble-google">
                  <span className="company-logo">G</span>
                  <span className="company-name">Google</span>
                  <span className="job-count">247</span>
                </div>
                <div className="bubble bubble-microsoft">
                  <span className="company-logo">MS</span>
                  <span className="company-name">Microsoft</span>
                  <span className="job-count">189</span>
                </div>
                <div className="bubble bubble-apple">
                  <span className="company-logo">🍎</span>
                  <span className="company-name">Apple</span>
                  <span className="job-count">156</span>
                </div>
                <div className="bubble bubble-meta">
                  <span className="company-logo">f</span>
                  <span className="company-name">Meta</span>
                  <span className="job-count">134</span>
                </div>
                <div className="bubble bubble-amazon">
                  <span className="company-logo">a</span>
                  <span className="company-name">Amazon</span>
                  <span className="job-count">98</span>
                </div>
                <div className="bubble bubble-netflix">
                  <span className="company-logo">N</span>
                  <span className="company-name">Netflix</span>
                  <span className="job-count">76</span>
                </div>
                <div className="bubble bubble-tesla">
                  <span className="company-logo">T</span>
                  <span className="company-name">Tesla</span>
                  <span className="job-count">65</span>
                </div>
                <div className="bubble bubble-nvidia">
                  <span className="company-logo">N</span>
                  <span className="company-name">NVIDIA</span>
                  <span className="job-count">54</span>
                </div>
                <div className="bubble bubble-salesforce">
                  <span className="company-logo">S</span>
                  <span className="company-name">Salesforce</span>
                  <span className="job-count">43</span>
                </div>
                <div className="bubble bubble-uber">
                  <span className="company-logo">U</span>
                  <span className="company-name">Uber</span>
                  <span className="job-count">32</span>
                </div>
              </div>
              
              <div className="dashboard-footer">
                <div className="footer-logo">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="32" height="32" rx="8" fill="#6b7280"/>
                    <path d="M8 12h16M8 16h16M8 20h10" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className="footer-text">
                  <p className="footer-brand">MobiusEngine.ai</p>
                  <a href="https://www.mobiusengine.ai" className="footer-link">https://www.mobiusengine.ai</a>
                  <p className="footer-rights">All rights reserved.</p>
                </div>
              </div>
            </div>
            
            <div className="dashboard-actions">
              <button className="explore-trends-btn">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 2v12h12" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M5 9l2-2 1.5 1.5 3.5-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Explore Trends
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyPersonalAI;
