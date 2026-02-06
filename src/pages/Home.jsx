import React from 'react';
import '../App.css'; 
import profileImg from '../assets/profile.jpg';

const Home = () => {
  return (
    <section className="home-wrapper">
      {/* Background Shapes - Animations in App.css */}
      <div className="moving-orbs">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
      </div>

      <div className="home-container">
        <div className="glass-card">
          <div className="home-content-grid">
            
            <div className="hero-text-area">
              <span className="status-pill">Available for Projects</span>
              <h1 className="hero-title">Stalin E</h1>
              <h2 className="role-typing">Full Stack Developer & React Developer</h2>
               
              <p className="hero-description">
                Building high-end digital experiences using the <strong>MERN Stack</strong>. 
                Focused on clean code and user-centric design.
              </p>

              <div className="skill-tags">
                <span className="tag">React</span>
                <span className="tag">Node.js</span>
                <span className="tag">Express</span>
                <span className="tag">MongoDB</span>
              </div>

              <div className="button-group">
                <a href="/contact" className="btn-main">Get In Touch</a>
                
              </div>
              
              <div className="contact-info-footer">
                 <span>📍 Coimbatore, India</span>
                 <span>📧 estalin25cse@gmail.com</span>
              </div>
            </div>

            <div className="hero-visual">
              <div className="profile-mask">
                <img src={profileImg} alt="Stalin E" className="profile-img-main" />
                <div className="floating-badge">8.04 </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;