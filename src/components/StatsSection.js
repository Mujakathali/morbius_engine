import React, { useEffect, useRef, useState } from 'react';
import './StatsSection.css';

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState({
    efficiency: 0,
    hours: 0,
    cost: 0
  });
  const sectionRef = useRef(null);

  const finalStats = {
    efficiency: 50,
    hours: 13,
    cost: 20
  };

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

  useEffect(() => {
    if (isVisible) {
      // Animate efficiency percentage
      let efficiencyCount = 0;
      const efficiencyInterval = setInterval(() => {
        if (efficiencyCount <= finalStats.efficiency) {
          setAnimatedStats(prev => ({ ...prev, efficiency: efficiencyCount }));
          efficiencyCount++;
        } else {
          clearInterval(efficiencyInterval);
        }
      }, 30);

      // Animate hours saved
      let hoursCount = 0;
      const hoursInterval = setInterval(() => {
        if (hoursCount <= finalStats.hours) {
          setAnimatedStats(prev => ({ ...prev, hours: hoursCount }));
          hoursCount++;
        } else {
          clearInterval(hoursInterval);
        }
      }, 80);

      // Animate cost reduction
      let costCount = 0;
      const costInterval = setInterval(() => {
        if (costCount <= finalStats.cost) {
          setAnimatedStats(prev => ({ ...prev, cost: costCount }));
          costCount++;
        } else {
          clearInterval(costInterval);
        }
      }, 60);

      return () => {
        clearInterval(efficiencyInterval);
        clearInterval(hoursInterval);
        clearInterval(costInterval);
      };
    }
  }, [isVisible]);

  return (
    <section className="stats-section" ref={sectionRef}>
      <div className="stats-container">
        <div className={`stats-header ${isVisible ? 'animate-up' : ''}`}>
          <h2 className="stats-title">
            Our customers have experienced significant<br />
            boosts in efficiency and ROI.
          </h2>
        </div>
        
        <div className="stats-content">
          <div className={`stat-item efficiency ${isVisible ? 'animate-up' : ''}`}>
            <div className="stat-number efficiency-number">
              {animatedStats.efficiency}%
            </div>
            <div className="stat-label">Efficiency Increase</div>
          </div>
          
          <div className={`stat-item hours ${isVisible ? 'animate-up' : ''}`}>
            <div className="stat-number hours-number">
              {animatedStats.hours}+
            </div>
            <div className="stat-label">Hours Saved Weekly</div>
          </div>
          
          <div className={`stat-item cost ${isVisible ? 'animate-up' : ''}`}>
            <div className="stat-number cost-number">
              ${animatedStats.cost}k
            </div>
            <div className="stat-label">Monthly Cost Reduction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
