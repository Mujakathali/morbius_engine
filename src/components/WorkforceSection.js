import React, { useEffect, useRef, useState } from 'react';
import jamesAvatar from '../assets/Images/img1 (1).jpeg';
import sir from '../assets/Images/img1.jpeg';
import './WorkforceSection.css';

const WorkforceSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [showPersona, setShowPersona] = useState(false);
  const [showCoachingCard, setShowCoachingCard] = useState(false);
  const sectionRef = useRef(null);

  const fullText = "Work one-on-one with our experienced executive coaches to craft a winning application strategy designed just for you. Through personalized guidance and proven techniques, our coaches help you highlight your strengths, position your experience effectively, and align every application with your career goals. With expert support at every step, you’ll gain the confidence and clarity needed to stand out and land the opportunities you deserve.";
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
      // Show coaching card immediately when section becomes visible
      setShowCoachingCard(true);

      // Start typewriter effect only when user navigates to this section
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
    <section className="workforce-section" ref={sectionRef}>
      <div className="workforce-container">
        <div className={`workforce-header ${isVisible ? 'animate-up' : ''}`}>
          <p className="workforce-subtitle">Strategy Coaching Session</p>
          <h2 className="workforce-title">Personalized guidance from experienced executive coaches</h2>
        </div>

        <div className="workforce-content">
          <div className="workforce-left-section">
            <div className={`persona-card nicole-persona ${isVisible ? 'slide-in-left' : ''}`}>
              <div className="persona-info">
                <h3 className="persona-name">Nicole</h3>
                <p className="persona-role">Executive Coach</p>
              </div>
              <div className="persona-avatar">
                <img src={jamesAvatar} alt="Nicole - Executive Coach" />
              </div>
            </div>
          </div>

          <div className="workforce-center-section">
            <div className={`expanding-container ${typedText ? 'expanded' : ''}`}>
              <p className="typewriter-text">{typedText}</p>
              <span className="cursor">|</span>
            </div>

            <div className={`coaching-session-card ${showCoachingCard ? 'slide-up' : ''}`}>
              <div className="coaching-header">
                <div className="coaching-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="9" cy="7" r="4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="m22 21-3-3m0 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="coaching-title">
                  <h3>Strategy Coaching Session</h3>
                  <p>Expert guidance</p>
                </div>
              </div>

              <div className="coaching-coaches">
                <div className="coach-item">
                  <div className="coach-avatar">
                    <img src={jamesAvatar} alt="Nicole" />
                  </div>
                  <div className="coach-info">
                    <h4>Nicole - Executive Coach</h4>
                    <p>Resume & Career Strategy</p>
                  </div>
                </div>

                <div className="coach-item">
                  <div className="coach-avatar">
                    <img src={sir} alt="Rob" />
                  </div>
                  <div className="coach-info">
                    <h4>Rob - Executive Coach</h4>
                    <p>Leadership & Hiring Expert</p>
                  </div>
                </div>
              </div>

              <div className="coaching-features-combined">
                <div className="feature-item">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" fill="#059669" />
                  </svg>
                  <span>Application strategy review</span>
                </div>
                <div className="feature-item">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" fill="#059669" />
                  </svg>
                  <span>Career path optimization</span>
                </div>
                <div className="feature-item">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" fill="#059669" />
                  </svg>
                  <span>Interview preparation</span>
                </div>
              </div>
            </div>

            <div className="book-coaching-container">
              <button className="book-coaching-btn">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 1v14M1 8h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
                Book Coaching Session
              </button>
            </div>
          </div>

          <div className="workforce-right-section">
            <div className="workforce-image-container">

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkforceSection;
