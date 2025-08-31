import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ScrollingHeroSection from './components/ScrollingHeroSection';
import BrandLogos from './components/BrandLogos';
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
import Footer from './components/Footer';
import './App.css';

function App() {
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
    <div className="App">
      <Navbar />
      <main>
        <section id="home">
          <HeroSection />
        </section>
        <BrandLogos />
        <Model3Section />
        <WhyPersonalAI />
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
      <Footer />
    </div>
  );
}

export default App;
