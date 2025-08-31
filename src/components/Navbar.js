import React, { useState } from 'react';
import './Navbar.css';
import logo from '../assets/Images/67f202294d93d2a7b90367ae_PAI_Logo_new.png';

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <div className="logo">
            <img src={logo} alt="Personal AI" className="logo-image" />
          </div>
        </div>
        
        {/* Hamburger Menu Button */}
        <button className="hamburger-menu" onClick={toggleMobileMenu}>
          <span className={`hamburger-line ${isMobileMenuOpen ? 'active' : ''}`}></span>
          <span className={`hamburger-line ${isMobileMenuOpen ? 'active' : ''}`}></span>
          <span className={`hamburger-line ${isMobileMenuOpen ? 'active' : ''}`}></span>
        </button>
        
        <div className={`navbar-menu ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <div className="navbar-item-dropdown">
            <button 
              className="navbar-item dropdown-trigger" 
              onClick={() => toggleDropdown('platform')}
            >
              Career Tools
            </button>
            {activeDropdown === 'platform' && (
              <div className="dropdown-menu">
                <div className="dropdown-section">
                  <h4>OUR PRODUCTS</h4>
                  <a href="#ai-training">Job SearchAI</a>
                  <a href="#ai-messaging">ATS Format</a>
                  <a href="#ai-agents">Resume Audit</a>
                  
                </div>
                <div className="dropdown-section">
                  <h4>OUR RESEARCH</h4>
                  <a href="#model-3">MODEL-3</a>
                  <a href="#model-2">MODEL-2</a>
                  <a href="#model-1">MODEL-1</a>
                  <a href="#personal-slm">Personal SLM</a>
                </div>
                <div className="dropdown-section">
                  <h4>CHOOSE PERSONAL AI</h4>
                  <a href="#trust">Trust & Transparency</a>
                  <a href="#accuracy">Non Biased Accuracy</a>
                  <a href="#asset">AI-as-an-Asset</a>
                  <a href="#privacy">Privacy & Safety</a>
                  <a href="#security">Security & Control</a>
                </div>
              </div>
            )}
          </div>
          
          <div className="navbar-item-dropdown">
            <button 
              className="navbar-item dropdown-trigger" 
              onClick={() => toggleDropdown('enterprise')}
            >
              Job Analytics
            </button>
            {activeDropdown === 'enterprise' && (
              <div className="dropdown-menu workforce-dropdown">
                <div className="dropdown-section">
                  <h4>USE CASES BY TEAM</h4>
                  <a href="#discover">Discover your AI Workforce</a>
                  <a href="#enterprises">Personal AI for Enterprises</a>
                </div>
                <div className="dropdown-section">
                  <h4>BLOG</h4>
                  <a href="#copilot-comparison">Microsoft Copilot vs Personal AI</a>
                  <a href="#salesforce-comparison">Salesforce Agentforce vs Personal AI Workforce</a>
                  <a href="#blog-articles">All Blog Articles</a>
                </div>
                <div className="dropdown-highlight">
                  <div className="academy-card">
                    <h4>Personal AI Academy</h4>
                    <p>Learn all about Personal AI with our new Personal AI Academy Lessons</p>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <a href="#customers" className="navbar-item">Resume Customization Engine</a>

          <a href="#customers" className="navbar-item">About us</a>
          
          <div className="navbar-item-dropdown">
            <button 
              className="navbar-item dropdown-trigger" 
              onClick={() => toggleDropdown('workforce')}
            >
              
            </button>
            {activeDropdown === 'workforce' && (
              <div className="dropdown-menu workforce-dropdown">
                <div className="dropdown-section">
                  <h4>USE CASES BY TEAM</h4>
                  <a href="#discover">Discover your AI Workforce</a>
                  <a href="#enterprises">Personal AI for Enterprises</a>
                </div>
                <div className="dropdown-section">
                  <h4>BLOG</h4>
                  <a href="#copilot-comparison">Microsoft Copilot vs Personal AI</a>
                  <a href="#salesforce-comparison">Salesforce Agentforce vs Personal AI Workforce</a>
                  <a href="#blog-articles">All Blog Articles</a>
                </div>
                <div className="dropdown-highlight">
                  <div className="academy-card">
                    <h4>Personal AI Academy</h4>
                    <p>Learn all about Personal AI with our new Personal AI Academy Lessons</p>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <div className="navbar-item-new">
           
            
          </div>
        </div>
        
        <div className={`navbar-actions ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          
          <button className="login-btn">LOG IN</button>
          <button className="get-started-btn">Get Started</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
