import React from 'react';
import '../App.css';

const Experience = () => {
  return (
    <section className="container">
      <h2 className="section-title">Experience</h2>
      
      {/* Nxtlogic Internship */}
      <div className="card border-highlight">
        <div className="card-header">
          <h3>Full Stack Developer Intern</h3>
          <span className="badge gold-badge">Certificate of Merit</span>
        </div>
        <p className="company-name">Nxtlogic Software Solutions</p>
        <p className="duration">June 2025 - July 2025</p>
        
        <ul className="experience-list">
          <li>Developed and maintained responsive web applications using the <strong>MERN stack</strong> (MongoDB, Express.js, React, Node.js).</li>
          <li>Designed and implemented RESTful APIs to connect front-end components with back-end databases.</li>
          <li>Optimized application performance and improved UI/UX design patterns.</li>
          <li>Collaborated with senior developers to troubleshoot and debug complex software issues.</li>
        </ul>
        <div className="tech-stack">
          <span>React</span> <span>Node.js</span> <span>MongoDB</span> <span>REST API</span>
        </div>
      </div>

      {/* Brainery Spot Internship */}
      <div className="card">
        <h3>Web Development Intern</h3>
        <p className="company-name">Brainery Spot Technology, Coimbatore</p>
        <p className="duration">March 2, 2024 - March 11, 2024</p>
        
        <ul className="experience-list">
          <li>Learned core web technologies including <strong>HTML5, CSS3, and JavaScript (ES6+)</strong>.</li>
          <li>Assisted in building static and dynamic web pages with focus on cross-browser compatibility.</li>
          <li>Gained hands-on experience with version control systems like <strong>Git and GitHub</strong>.</li>
          <li>Participated in daily stand-up meetings to discuss project progress and milestones.</li>
        </ul>
        <div className="tech-stack">
          <span>HTML</span> <span>CSS</span> <span>JavaScript</span> <span>Git</span>
        </div>
      </div>
    </section>
  );
};

export default Experience;