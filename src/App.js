import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ScrollingHeroSection from './components/ScrollingHeroSection';

import Model3Section from './components/Model3Section';
import WhyPersonalAI from './components/WhyPersonalAI';
import WorkforceSection from './components/WorkforceSection';
import NextSection from './components/NextSection';
import KnowledgeSection from './components/KnowledgeSection';
import ImageGallerySection from './components/ImageGallerySection';
import TeamSection from './components/TeamSection';
import PaymentPlanSection from './components/PaymentPlanSection';
import StatsSection from './components/StatsSection';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import AboutUs from './components/AboutUs';
import JobAnalytics from './components/JobAnalytics';
import CareerTools from './components/CareerTools';
import Footer from './components/Footer';
import './App.css';

// Home Page Component
const HomePage = () => {
  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleSmoothScroll = (e) => {
      const href = e.target.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    // Add event listeners to all anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', handleSmoothScroll);
    });

    // Cleanup event listeners
    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleSmoothScroll);
      });
    };
  }, []);

  return (
    <main>
      <section id="home">
        <HeroSection />
      </section>
      
      <Model3Section />
      <section id="why-personal-ai">
        <WhyPersonalAI />
      </section>
      <WorkforceSection />
    
      <section id="platform">
        <NextSection />
      </section>
      <KnowledgeSection />
      <ImageGallerySection />
      <TeamSection />
      <PaymentPlanSection />
      <StatsSection />
      <WhyChooseUsSection />
      <ScrollingHeroSection />
    </main>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/job-analytics" element={<JobAnalytics />} />
          <Route path="/career-tools" element={<CareerTools />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
