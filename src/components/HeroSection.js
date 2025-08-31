import React, { useEffect, useState } from 'react';
import img1_1 from '../assets/Images/img1 (1).jpeg';
import img1 from '../assets/Images/img1.jpeg';
import img2_5 from '../assets/Images/img2 (5).jpeg';
import './HeroSection.css';

const HeroSection = () => {
  const [currentPersonaSet, setCurrentPersonaSet] = useState(0);
  const [cycleCount, setCycleCount] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [threadVisible, setThreadVisible] = useState(false);
  const [threadBroken, setThreadBroken] = useState(false);

  const imageMap = {
    'img1 (1).jpeg': img1_1,
    'img1.jpeg': img1,
    'img2 (5).jpeg': img2_5,
  };

  const personaSets = [
    {
      persona1: {
        name: "Ashwin, CEO & Founder",
        description: "Founder of MobiusEngine.ai with 20+ years at Google, JP Morgan, and an MBA from Yale, focused on empowering job seekers to land dream roles.",
        photo: "img2 (5).jpeg"
      },
      persona2: {
        name: "Nicole, Executive Coach",
        description: "Executive Coach at Mobius, specializing in resume builds and career strategy with 7+ years of AI-driven product experience.",
        photo: "img1 (1).jpeg"
      }
    },
    {
      persona1: {
        name: "Ashwin, CEO & Founder",
        description: "Founder of mobiusengine.ai with over 2 decades of experience at Google and JP Morgan.",
        photo: "img2 (5).jpeg"
      },
      persona2: {
        name: "Rob Rosen",
        description: "Executive Coach at Mobius with leadership experience at Amazon, Google, and more, specializing in career advancement and hiring strategy.",
        photo: "img1.jpeg"
      }
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      const textItems = document.querySelectorAll('.rotating-text .text-item');
      const animatedDot = document.querySelector('.animated-dot');
      let currentIndex = 0;
      let rotationCount = 0;

      if (textItems.length === 0 || !animatedDot) return;

      // Set initial state - first item active and dot positioned
      textItems[0].classList.add('active');
      animatedDot.classList.add('pos-1');

      const rotateText = () => {
        if (rotationCount >= 2) return; // Stop after 2 rotations (3 total states)

        // Exit current item (slides up and fades out)
        textItems[currentIndex].classList.add('exit');
        textItems[currentIndex].classList.remove('active');

        // Move to next item
        currentIndex = (currentIndex + 1) % textItems.length;
        rotationCount++;

        // Move dot to next position
        animatedDot.classList.remove('pos-1', 'pos-2', 'pos-3');
        animatedDot.classList.add(`pos-${currentIndex + 1}`);

        // Trigger persona container change and thread break at the same time
        setThreadBroken(true);
        setIsTransitioning(true);
        setTimeout(() => {
          setCurrentPersonaSet((prev) => (prev + 1) % personaSets.length);
          setCycleCount(prev => prev + 1);

          setTimeout(() => {
            setIsTransitioning(false);
            // Rejoin thread effect
            setTimeout(() => {
              setThreadBroken(false);
            }, 300);
          }, 100);
        }, 500);

        // After exit animation, show next item
        setTimeout(() => {
          // Remove exit class from previous item
          textItems.forEach(item => item.classList.remove('exit'));

          // Add active class to current item (slides up from bottom)
          textItems[currentIndex].classList.add('active');
        }, 300);
      };

      // Start rotation after 5 seconds, then every 3 seconds
      const startTimer = setTimeout(() => {
        rotateText();
        const interval = setInterval(rotateText, 3000);

        // Clear interval after 2 rotations, then return to first and stay
        setTimeout(() => {
          clearInterval(interval);
          // Return to first text item and stay there
          setTimeout(() => {
            textItems.forEach(item => item.classList.remove('active', 'exit'));
            textItems[0].classList.add('active');
            animatedDot.classList.remove('pos-1', 'pos-2', 'pos-3');
            animatedDot.classList.add('pos-1');
            // Reset persona to first set
            setCurrentPersonaSet(0);
            setCycleCount(0);
          }, 300);
        }, 6000);
      }, 5000);

      return () => clearTimeout(startTimer);
    }, 500);

    return () => clearTimeout(timer);
  }, [personaSets.length]);

  // Thread visibility effect on page load
  useEffect(() => {
    const threadTimer = setTimeout(() => {
      setThreadVisible(true);
    }, 1000);

    return () => clearTimeout(threadTimer);
  }, []);

  return (
    <section className="hero-section">
      {/* Top Left Corner Curve */}
      <div className={`corner-curve corner-curve-left ${threadVisible ? 'visible' : ''} ${threadBroken ? 'broken' : ''}`}>
        <svg className="curve-svg" viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg">
          <path
            className="curve-path"
            d="M20,50 Q80,120 40,200 Q10,280 70,360"
            stroke="url(#curveGradientLeft)"
            strokeWidth="2"
            fill="none"
          />
          <defs>
            <linearGradient id="curveGradientLeft" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff69b4" />
              <stop offset="50%" stopColor="#ff1493" />
              <stop offset="100%" stopColor="#dc143c" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Top Right Corner Curve */}
      <div className={`corner-curve corner-curve-right ${threadVisible ? 'visible' : ''} ${threadBroken ? 'broken' : ''}`}>
        <svg className="curve-svg" viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg">
          <path
            className="curve-path"
            d="M280,50 Q220,120 260,200 Q290,280 230,360"
            stroke="url(#curveGradientRight)"
            strokeWidth="2"
            fill="none"
          />
          <defs>
            <linearGradient id="curveGradientRight" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff69b4" />
              <stop offset="50%" stopColor="#ff1493" />
              <stop offset="100%" stopColor="#dc143c" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="static-text">Land Job Interviews<br /><span className="">10X Faster</span></span>
              <span className="rotating-text">
                <span className="text-item text-item-1">
                  AI Precision<br />+ Human Expertise
                </span>
                <span className="text-item text-item-2">
                  Resumes That<br />Win Offers
                </span>
                <span className="text-item text-item-3">
                  Accelerate Your<br />Career Growth
                </span>
                <span className="animated-dot">.</span>
              </span>
            </h1>

            <p className="hero-description">
              Go beyond AI-generated resumes with the power of AI and human expertise. Our platform delivers ATS-compliant, expert-reviewed resumes tailored to every role, helping you stand out, land interviews faster, and accelerate your career growth.
            </p>
            <div className="hero-buttons">
              <button
                className="hero-btn hero-btn-get-started"
                onClick={() => {
                  const nextSection = document.querySelector('.team-section, .knowledge-section, .next-section');
                  if (nextSection) {
                    nextSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Get Started
              </button>
            </div>
          </div>

          <div className="hero-personas" data-persona-set={currentPersonaSet}>
            <div className={`persona-container persona-container-1 ${isTransitioning ? 'slide-out' : ''}`}>
              <div className="persona-image-card persona-1">
                <img src={imageMap[personaSets[currentPersonaSet].persona1.photo]} alt={personaSets[currentPersonaSet].persona1.name} className="persona-photo-img" />
              </div>
              <div className="persona-info-card">
                <div className="persona-name">{personaSets[currentPersonaSet].persona1.name}</div>
                <div className="persona-description">
                  {personaSets[currentPersonaSet].persona1.description}
                </div>
              </div>
            </div>

            <div className={`persona-container persona-container-2 ${isTransitioning ? 'slide-out' : ''}`}>
              <div className="persona-image-card persona-2">
                <img src={imageMap[personaSets[currentPersonaSet].persona2.photo]} alt={personaSets[currentPersonaSet].persona2.name} className="persona-photo-img" />
              </div>
              <div className="persona-info-card">
                <div className="persona-name">{personaSets[currentPersonaSet].persona2.name}</div>
                <div className="persona-description">
                  {personaSets[currentPersonaSet].persona2.description}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-background-elements">
        <div className="bg-circle bg-circle-1"></div>
        <div className="bg-circle bg-circle-2"></div>
      </div>
    </section>
  );
};

export default HeroSection;
