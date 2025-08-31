import React, { useEffect, useRef, useState } from 'react';
import './AboutUs.css';
import ashwinImage from '../assets/Images/img2 (5).jpeg';
import nicoleImage from '../assets/Images/img1 (1).jpeg';

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
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

  return (
    <div className="about-us" ref={sectionRef}>
      <div className={`about-container ${isVisible ? 'animate-up' : ''}`}>
        {/* Header Section */}
        <div className="about-header">
<br/>
<br/>

          <p className="about-subtitle">Learn more about Mobius Services and our team</p>
        </div>

        {/* Our Founders Section */}
        <section className="founders-section">
          <h2 className="section-title">Our Founders</h2>
          <div className="founder-card">
            <div className="founder-image">
              <img src={ashwinImage} alt="Ashwin - Founder" />
            </div>
            <div className="founder-content">
              <h3 className="founder-name">Ashwin</h3>
              <p className="founder-role">Founder</p>
              <p className="founder-description">
                Ashwin is an accomplished senior executive with over 20 years of experience in cloud infrastructure and financial 
                services. With over 2 decades of experience at Google and JP Morgan, Ashwin held various sales and marketing roles. 
                Ashwin is an MBA holder from Yale University.
              </p>
              <p className="founder-description">
                While going through his job search journey and helping others do the same, he productized the approach. This was the 
                beginning of Mobius. Ashwin is passionate about benefiting others from his experiences and adding value to their job 
                search journey.
              </p>
              <p className="founder-description">
                Ashwin's vision with Mobius is to give job seekers a significant advantage in securing the roles of their dreams.
              </p>
              <a href="#" className="linkedin-link">📧 Ashwin's LinkedIn ↗</a>
            </div>
          </div>
        </section>

        {/* Our Executive Coaches Section */}
        <section className="coaches-section">
          <h2 className="section-title">Our Executive Coaches</h2>
          <div className="coach-card">
            <div className="coach-image">
              <img src={nicoleImage} alt="Nicole Lau - Executive Coach" />
            </div>
            <div className="coach-content">
              <h3 className="coach-name">Nicole Lau</h3>
              <p className="coach-role">Executive Coach</p>
              <p className="coach-description">
                In a competitive job market, your resume isn't just a document - it's a powerful tool that sets you apart. I help 
                professionals craft high-impact, ATS-friendly resumes that pass screenings and position them as top candidates worth 
                interviewing.
              </p>
              <p className="coach-description">
                With a B.S. in Business Administration from UC Berkeley and 7+ years of experience in AI-driven product strategy, I've 
                seen firsthand how the proper positioning opens doors. I can turn complex achievements into clear, compelling 
                narratives that grab attention. My targeted, results-driven approach helps clients confidently stand out and land roles 
                that truly match their skills and potential.
              </p>
              <p className="coach-description">
                Nicole is available for resume rebuilds, career coaching and interview preparation services.
              </p>
              <a href="#" className="linkedin-link">📧 Nicole Lau's LinkedIn ↗</a>
            </div>
          </div>
        </section>

        {/* Our Approach Section */}
        <section className="approach-section">
          <h2 className="section-title">Our Approach</h2>
          <p className="approach-intro">
            At <strong>Mobius Services</strong>, we help job seekers grow their careers with a simple three-step plan: Application Strategy, 
            Positioning Strategy, and Execution Strategy. This approach is about making your job hunt and career path clearer and more effective.
          </p>

          <div className="strategy-steps">
            <div className="strategy-step">
              <h3 className="step-title">1. Application Strategy</h3>
              <p className="step-description">
                First, we figure out the best job market strategy for you. This means understanding jobs, knowing what you're good at, and 
                finding where those two things meet. We help you focus on the jobs and fields where your skills and career goals line up well, 
                increasing your chances of finding the right job.
              </p>
            </div>

            <div className="strategy-step">
              <h3 className="step-title">2. Positioning Strategy</h3>
              <p className="step-description">
                Next, we help you look your best on paper and online. This involves ensuring your resume, LinkedIn, and other profiles tell a 
                strong, clear story about your career and why you're a great fit for the jobs you want. We work with you to make a narrative 
                that catches the attention of recruiters and hiring managers.
              </p>
            </div>

            <div className="strategy-step">
              <h3 className="step-title">3. Execution Strategy</h3>
              <p className="step-description">
                Lastly, we take action. We apply for many jobs for you, using our technology to find a good fit. We also help you network by 
                connecting you with hiring managers and leaders in your field. Our goal is to make things easier for you so you can focus on 
                getting ready for interviews and boosting your skills, while we handle the grunt work of the job search.
              </p>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values Section */}
        <section className="mvv-section">
          <div className="mvv-grid">
            <div className="mvv-card">
              <h3 className="mvv-title">Our Mission</h3>
              <p className="mvv-content">
                Mobius Services LLC aims to remove the angst from job searching and ensure all job seekers achieve success. Our AI-assisted methods and 
                recruiting expertise lets you focus on networking and upskilling while maximizing your chances of landing a job in record time.
              </p>
            </div>

            <div className="mvv-card">
              <h3 className="mvv-title">Our Vision</h3>
              <p className="mvv-content">
                Finding a new job shouldn't be difficult. Every individual deserves to maximize their value from new employment. We envision making job 
                searching a one-click, fully managed process, providing a seamless and efficient experience for all job seekers.
              </p>
            </div>

            <div className="mvv-card">
              <h3 className="mvv-title">Our Values</h3>
              <div className="values-list">
                <p><strong>Innovation:</strong> Continuously improving our services</p>
                <p><strong>Efficiency:</strong> Respecting our clients' time and effort</p>
                <p><strong>Shared Success:</strong> Measuring our success through yours</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact-section">
          <h2 className="section-title">Contact Us</h2>
          <div className="contact-info">
            <h3 className="company-name">Mobius Services LLC</h3>
            <p className="contact-address">329 41st Avenue, San Mateo, CA - 94403</p>
            <p className="contact-phone">Tel: 650-889-6026</p>
            <p className="contact-email">Email: <a href="mailto:intake@mobiusservices.me">intake@mobiusservices.me</a></p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
