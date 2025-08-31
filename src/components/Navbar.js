import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
          <Link to="/" className="logo">
            <img src={logo} alt="Personal AI" className="logo-image" />
          </Link>
        </div>
        
        {/* Hamburger Menu Button */}
        <button className="hamburger-menu" onClick={toggleMobileMenu}>
          <span className={`hamburger-line ${isMobileMenuOpen ? 'active' : ''}`}></span>
          <span className={`hamburger-line ${isMobileMenuOpen ? 'active' : ''}`}></span>
          <span className={`hamburger-line ${isMobileMenuOpen ? 'active' : ''}`}></span>
        </button>
        
        <div className={`navbar-menu ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <Link 
            to="/career-tools"
            className="navbar-item"
          >
            Career Tools
          </Link>
          
          <Link 
            to="/job-analytics"
            className="navbar-item"
          >
            Job Analytics
          </Link>
          
          <a href="#customers" className="navbar-item">Resume Customization Engine</a>

          <Link to="/about" className="navbar-item">About us</Link>
          
          <button className="login-btn">LOG IN</button>
          <a href="#why-personal-ai" className="get-started-btn">Get Started</a>
        </div>
        
        <div className={`navbar-actions ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
