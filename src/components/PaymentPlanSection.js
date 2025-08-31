import React, { useEffect, useRef, useState } from 'react';
import './PaymentPlanSection.css';

const PaymentPlanSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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

  return (
    <section className="payment-plan-section" ref={sectionRef}>
      <div className="payment-plan-container">
        <div className={`payment-plan-header ${isVisible ? 'animate-up' : ''}`}>
          <h2 className="payment-plan-title">Choose Your Plan</h2>
          <p className="payment-plan-subtitle">
            We care. Our pricing has no subscription, no hassle, no hidden fees.<br/>
            Simple to understand.
          </p>
        </div>
        
        <div className={`pricing-cards ${isVisible ? 'slide-up' : ''}`}>
          {/* Free Plan */}
          <div className="pricing-card">
            <div className="card-header">
              <div className="star-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <h3 className="plan-name">2 Free Resumes</h3>
              <div className="plan-price">
                <span className="price">$0</span>
              </div>
              <p className="plan-description">Try before you buy</p>
            </div>
            
            <div className="card-features">
              <div className="feature-item">
                <span className="feature-icon">✓</span>
                <span>2 customizations free</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">✓</span>
                <span>Basic AI resume review</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">✓</span>
                <span>AI + compatible formatting</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">✓</span>
                <span>Email delivery</span>
              </div>
            </div>
            
            <button className="plan-button plan-button-free">Start Free</button>
          </div>

          {/* Custom Resumes Plan */}
          <div className="pricing-card">
            <div className="card-header">
              <div className="star-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <h3 className="plan-name">25 Custom Resumes</h3>
              <div className="plan-price">
                <span className="price">$25</span>
              </div>
              <p className="plan-description">For occasional job seekers</p>
            </div>
            
            <div className="card-features">
              <div className="feature-item">
                <span className="feature-icon">✓</span>
                <span>25 Customized Resumes</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">✓</span>
                <span>Expert resume review</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">✓</span>
                <span>Proprietary LLM customization</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">✓</span>
                <span>ATS-compatible formatting</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">✓</span>
                <span>Standard support</span>
              </div>
            </div>
            
            <button className="plan-button plan-button-popular">Get Started</button>
          </div>

          {/* Consultation Plan */}
          <div className="pricing-card">
            <div className="card-header">
              <div className="star-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <h3 className="plan-name">Consultation with Nicole</h3>
              <div className="plan-price">
                <span className="price">$50</span>
              </div>
              <p className="plan-description">Speak to our Executive coach</p>
            </div>
            
            <div className="card-features">
              <div className="feature-item">
                <span className="feature-icon">✓</span>
                <span>15 minute zoom session with Nicole</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">✓</span>
                <span>Application strategy advice</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">✓</span>
                <span>Resume audit and feedback</span>
              </div>
            </div>
            
            <button className="plan-button plan-button-popular">Get Started</button>
          </div>

          {/* Student Plan */}
          <div className="pricing-card pricing-card-student">
            <div className="student-badge">STUDENT OFFER</div>
            <div className="card-header">
              <div className="star-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <h3 className="plan-name">Student Plan</h3>
              <div className="plan-price">
                <span className="price-crossed">$40</span>
                <span className="price">$0</span>
                <span className="price-period">/week</span>
              </div>
              <p className="plan-description">Special offer for students</p>
            </div>
            
            <div className="card-features">
              <div className="feature-item">
                <span className="feature-icon">✓</span>
                <span>10 customizations per week</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">✓</span>
                <span>Proprietary LLM customization</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">✓</span>
                <span>Expert resume review</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">✓</span>
                <span>ATS-compatible formatting</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">✓</span>
                <span>Job email roundup</span>
              </div>
            </div>
            
            <button className="plan-button plan-button-student">Get Student Access</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentPlanSection;
