import React, { useEffect, useState } from 'react';
import './CareerTools.css';
import jobMarketAnalysis from '../assets/Images/Career tool/job-market-analysis.svg';
import careerCoaching from '../assets/Images/Career tool/career-coaching.svg';
import resumeBuilder from '../assets/Images/Career tool/resume-builder.svg';
import resumeCustomization from '../assets/Images/Career tool/resume-customization.svg';
import jobSearch from '../assets/Images/Career tool/job-search.svg';
import jobApplication from '../assets/Images/Career tool/job-application.svg';

const CareerTools = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);
  const careerCards = [
    {
      id: 1,
      image: jobMarketAnalysis,
      title: "Analyze Job Market",
      description: "Get comprehensive insights into current market trends, salary ranges, and high-demand skills in your industry.",
      buttonText: "Explore Market Trends",
      buttonColor: "#3b82f6",
      delay: 0.1
    },
    {
      id: 2,
      image: careerCoaching,
      title: "Get Coaching on Application Strategy",
      description: "Work with experienced executive coaches to develop a winning application strategy tailored to your career goals.",
      buttonText: "Book Coaching",
      buttonColor: "#10b981",
      delay: 0.2
    },
    {
      id: 3,
      image: resumeBuilder,
      title: "Build Resume",
      description: "Work with our expert team to build a compelling resume from scratch with AI insights and human expertise.",
      buttonText: "Get Expert Help",
      buttonColor: "#f59e0b",
      delay: 0.3
    },
    {
      id: 4,
      image: resumeCustomization,
      title: "Customize Resume",
      description: "Our AI analyzes job descriptions and customizes your resume to match specific requirements and company culture.",
      buttonText: "Start Customizing",
      buttonColor: "#3b82f6",
      delay: 0.4
    },
    {
      id: 5,
      image: jobSearch,
      title: "Search for Jobs",
      description: "JobSearchAI is our proprietary semantic search technology that understands what you mean, not just what you type.",
      buttonText: "Find Jobs",
      buttonColor: "#8b5cf6",
      delay: 0.5
    },
    {
      id: 6,
      image: jobApplication,
      title: "Apply for Jobs",
      description: "Let our experts handle your job applications from start to finish, optimizing and submitting them on your behalf.",
      buttonText: "Start Applying",
      buttonColor: "#10b981",
      delay: 0.6
    }
  ];

  return (
    <div className="career-tools">
      <div className="career-container">
        {/* Header Section */}
        <div className={`career-header ${isVisible ? 'slide-up' : ''}`}>
          <h1 className="career-title">All Career Tools, one platform.</h1>
          <p className="career-subtitle">
            Use the Mobius career tools to enhance your resume, track your job search, and 
            land a job you love.
          </p>
        </div>

        {/* Career Cards Grid */}
        <div className="career-grid">
          {careerCards.map((card) => (
            <div 
              key={card.id} 
              className={`career-card ${isVisible ? 'slide-up' : ''}`}
              style={{ animationDelay: `${card.delay}s` }}
            >
              <div className="card-image">
                <img src={card.image} alt={card.title} />
              </div>
              <div className="card-content">
                <h3 className="card-title">{card.title}</h3>
                <p className="card-description">{card.description}</p>
                <button 
                  className="career-btn"
                  style={{ backgroundColor: card.buttonColor }}
                >
                  {card.buttonText} →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CareerTools;
