import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Company Info Section */}
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="logo-icon">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 2L20 10H28L22 16L24 24L16 20L8 24L10 16L4 10H12L16 2Z" fill="white"/>
                </svg>
              </div>
              <span className="logo-text">Morbius Engine</span>
            </div>
            
            <div className="company-info">
              <p className="company-name">Mobius Services LLC</p>
              <p className="company-address">1875 Mission St Ste 103 #450</p>
              <p className="company-address">San Francisco, CA 94103</p>
              <p className="company-phone">650-889-6026</p>
              <p className="company-email">support@mobiusengine.ai</p>
            </div>
            
            <div className="connect-section">
              <h3 className="connect-title">Connect With Us</h3>
              <div className="social-icons">
                <a href="https://www.reddit.com/r/mobiusengine/" className="social-icon" target="_blank" rel="noopener noreferrer">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.238 15.348c.085-.084.085-.221 0-.306-.465-.462-1.194-.687-2.238-.687s-1.773.225-2.238.687c-.085.085-.085.222 0 .306.841.84 3.635.84 4.476 0zm-3.32-2.777c0-.584-.472-1.056-1.056-1.056-.583 0-1.056.472-1.056 1.056 0 .584.473 1.056 1.056 1.056.584 0 1.056-.472 1.056-1.056zm2.775 0c0-.584-.472-1.056-1.056-1.056-.584 0-1.056.472-1.056 1.056 0 .584.472 1.056 1.056 1.056.584 0 1.056-.472 1.056-1.056zm.193 8.68c-.002.058-.014.113-.035.165-.542 1.332-1.736 2.045-3.851 2.045-2.115 0-3.309-.713-3.851-2.045-.021-.052-.033-.107-.035-.165 0-.058.014-.113.035-.165.542-1.332 1.736-2.045 3.851-2.045 2.115 0 3.309.713 3.851 2.045.021.052.033.107.035.165zm8.794-8.68c0-1.036-.84-1.875-1.875-1.875-.493 0-.941.192-1.273.505-1.25-.906-2.97-1.490-4.886-1.565l.827-3.897 2.705.571c.014.702.595 1.27 1.305 1.27.722 0 1.312-.59 1.312-1.312s-.59-1.312-1.312-1.312c-.512 0-.956.294-1.171.721l-3.047-.644c-.11-.023-.225.029-.275.132l-.938 4.42c-1.947.06-3.698.636-4.965 1.549-.332-.313-.78-.505-1.273-.505-1.036 0-1.875.84-1.875 1.875 0 .817.526 1.513 1.26 1.770-.075.315-.115.644-.115.981 0 4.981 5.806 9.016 12.969 9.016s12.969-4.035 12.969-9.016c0-.337-.04-.666-.115-.981.734-.257 1.26-.953 1.26-1.770z"/>
                  </svg>
                </a>
                <a href="http://linkedin.com/company/mobiusservices/" className="social-icon" target="_blank" rel="noopener noreferrer">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Company Section */}
          <div className="footer-section">
            <h3 className="footer-section-title">Company</h3>
            <ul className="footer-links">
              <li><a href="#team">Team</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#threats">Threats</a></li>
              <li><a href="#partners">Partners</a></li>
              <li><a href="#press">Press</a></li>
              <li><a href="#privacy">Privacy Notice</a></li>
              <li><a href="#cookie">Cookie Notice</a></li>
              <li><a href="#terms">Terms of Service</a></li>
            </ul>
          </div>

          {/* Our Product Section */}
          <div className="footer-section">
            <h3 className="footer-section-title">Our Product</h3>
            <ul className="footer-links">
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#insights">Insights</a></li>
              <li><a href="#trust">Trust Center</a></li>
              <li><a href="#help">Help Center</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#community">Community Guidelines</a></li>
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#consent">Consent Notice</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <p className="copyright">© 2023 Mobius Services LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
