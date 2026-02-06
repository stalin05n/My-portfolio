import React from 'react';
import '../App.css';

const About = () => {
  return (
    <section className="about-page">
      <div className="container">
        <h2 className="section-title slide-up">About Me</h2>
        
        {/* Main Grid Layout with Spacing */}
        <div className="about-layout">
          
          {/* Card 1: Professional Bio */}
          <div className="glass-card bio-card fade-in">
            <div className="card-header">
              <span className="icon">🚀</span>
              <h3>Who I Am</h3>
            </div>
            <p>
              I am a highly motivated **Full Stack Developer** currently based in **Coimbatore**. 
              I am an enthusiastic learner specialized in developing modern web applications using the **MERN stack**. 
              My focus is on creating responsive, user-friendly projects and solving real-world problems.
            </p>
            <div className="strengths-tags">
              <span className="s-tag">Problem Solver</span>
              <span className="s-tag">Quick Learner</span>
            </div>
          </div>

          {/* Card 2: Academic Background */}
          <div className="glass-card education-card fade-in">
            <div className="card-header">
              <span className="icon">🎓</span>
              <h3>Academic Background</h3>
            </div>
            <div className="edu-content">
              <h4>BE in Computer Science and Engineering</h4>
              <p>Christ the King Engineering College</p>
              <div className="cgpa-wrapper">
                <span className="badge pink-badge">8.04 CGPA (Till 6th Sem)</span>
              </div>
            </div>
          </div>

          {/* Card 3: Professional Certifications */}
          <div className="glass-card cert-card fade-in">
            <div className="card-header">
              <span className="icon">🏆</span>
              <h3>Certifications</h3>
            </div>
            <ul className="cert-list">
              <li>
                <strong>Cloud Infrastructure:</strong> Oracle Certified Foundations Associate
              </li>
              <li>
                <strong>Automation Testing:</strong> Selenium Tools - Infosys Springboard
              </li>
              <li>
                <strong>Web Development:</strong> Full Stack Training - IBM SkillsBuild
              </li>
            </ul>
          </div>

          {/* Card 4: Languages/Communication */}
          <div className="glass-card language-card fade-in">
            <div className="card-header">
              <span className="icon">💬</span>
              <h3>Communication</h3>
            </div>
            <p>I am fluent in multiple languages, enabling effective collaboration.</p>
            <div className="flex-badges">
              <span className="badge-glass">Tamil (Native)</span>
              <span className="badge-glass">English (Professional)</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;