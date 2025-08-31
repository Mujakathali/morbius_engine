import React, { useEffect, useState } from 'react';
import './JobAnalytics.css';

const JobAnalytics = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const dashboardCards = [
    {
      id: 1,
      icon: "📊",
      title: "Jobs Overview",
      description: "Total jobs posted, distribution by category, employment types, and seniority levels",
      buttonText: "View Dashboard",
      delay: 0.1
    },
    {
      id: 2,
      icon: "💰",
      title: "Compensation Analysis",
      description: "Salary ranges, compensation by company, role, and location insights",
      buttonText: "View Dashboard",
      delay: 0.2
    },
    {
      id: 3,
      icon: "📍",
      title: "Location Insights",
      description: "Job distribution by city, remote work trends, and geographic analysis",
      buttonText: "View Dashboard",
      delay: 0.3
    },
    {
      id: 4,
      icon: "🔧",
      title: "Skills & Requirements",
      description: "Most in-demand skills, technology stack trends, and skill requirements",
      buttonText: "View Dashboard",
      delay: 0.4
    },
    {
      id: 5,
      icon: "📈",
      title: "Market Trends",
      description: "Job posting trends over time, seasonal patterns, and market dynamics",
      buttonText: "View Dashboard",
      delay: 0.5
    },
    {
      id: 6,
      icon: "🤖",
      title: "AI Jobs Analysis",
      description: "Comprehensive AI job market analysis including role distribution, company hiring patterns, and specializations",
      buttonText: "View Dashboard",
      delay: 0.6
    }
  ];

  return (
    <div className="job-analytics">
      <div className="analytics-container">
        {/* Header Section */}
        <div className={`analytics-header ${isVisible ? 'slide-up' : ''}`}>
          <h1 className="analytics-title">Jobs Analytics Dashboard</h1>
          <p className="analytics-subtitle">
            Comprehensive insights into the 2025 job market. Analyze trends, compensation, 
            locations, skills, and opportunities across industries.
          </p>
        </div>

        {/* Dashboard Cards Grid */}
        <div className="dashboard-grid">
          {dashboardCards.map((card) => (
            <div 
              key={card.id}
              className={`dashboard-card ${isVisible ? 'slide-up' : ''}`}
              style={{ animationDelay: `${card.delay}s` }}
            >
              <div className="card-icon">
                {card.icon}
              </div>
              <div className="card-content">
                <h3 className="card-title">{card.title}</h3>
                <p className="card-description">{card.description}</p>
                <button className="dashboard-btn">{card.buttonText}</button>
              </div>
            </div>
          ))}
        </div>

        {/* About Section */}
        <div className={`about-data-section ${isVisible ? 'slide-up' : ''}`} style={{ animationDelay: '0.8s' }}>
          <h2 className="about-title">About This Data</h2>
          <p className="about-description">
            Our analytics are powered by comprehensive job market data, providing you with real-time 
            insights into employment trends, salary benchmarks, and skill demands across various 
            industries and locations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default JobAnalytics;
