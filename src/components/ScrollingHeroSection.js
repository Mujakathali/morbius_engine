import React, { useEffect, useRef, useState } from 'react';
import './ScrollingHeroSection.css';
import img1_1 from '../assets/Images/img1 (1).jpeg';
import img1 from '../assets/Images/img1.jpeg';
import img2_5 from '../assets/Images/img2 (5).jpeg';

const ScrollingHeroSection = () => {
  const sectionRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const sectionTop = rect.top;
        const sectionHeight = rect.height;
        const windowHeight = window.innerHeight;
        
        // Calculate scroll progress within this section
        const scrollProgress = Math.max(0, Math.min(1, (windowHeight - sectionTop) / (windowHeight + sectionHeight)));
        setScrollY(scrollProgress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate transform values - first line from left, second line from right
  const centerProgress = Math.min(1, scrollY * 2); // Faster centering
  const firstLineTransform = `translateX(${-100 + (centerProgress * 100)}%)`;
  const secondLineTransform = `translateX(${100 - (centerProgress * 100)}%)`;

  return (
    <section className="scrolling-hero-section" ref={sectionRef}>
      <div className="scrolling-hero-container">
        {/* Background decorative elements */}
        <div className="bg-curve bg-curve-left"></div>
        <div className="bg-curve bg-curve-right"></div>
        
        {/* Top tagline */}
        <div className="hero-tagline">
          <span>PRECISE. PRIVATE. POWERFUL.</span>
        </div>

        {/* Animated text lines */}
        <div className="animated-text-container">
          {/* First line - comes from left */}
          <div 
            className="text-line first-line"
            style={{ transform: firstLineTransform }}
          >
            <div className="text-content">
              <span className="text-word">Land Your Dream Job</span>
            </div>
          </div>
          
          {/* Second line - comes from right */}
          <div 
            className="text-line second-line"
            style={{ transform: secondLineTransform }}
          >
            <div className="text-content">
              <span className="text-word">with AI + Human Expertise</span>
            </div>
          </div>
        </div>

        {/* Get Started button */}
        <div className="hero-cta">
          <button className="get-started-btn">Get Started</button>
        </div>
      </div>
    </section>
  );
};

export default ScrollingHeroSection;
