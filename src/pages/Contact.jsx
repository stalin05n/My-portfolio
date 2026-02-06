import React from 'react';
import '../App.css';

const Contact = () => {
  return (
    <section className="contact-wrapper">
      <div className="container">
        <h2 className="section-title slide-up">Get In Touch</h2>
        <p className="section-subtitle">Have a project in mind? Let's build something amazing together.</p>

        <div className="contact-grid">
          {/* Left Side: Contact Info */}
          <div className="contact-info-panel fade-in">
            <div className="glass-card info-card">
              <h3>Contact Information</h3>
              <div className="info-item">
                <span className="icon">📧</span>
                <div>
                  <p className="label">Email Me</p>
                  <a href="mailto:estalin25cse@gmail.com" className="value">estalin25cse@gmail.com</a>
                </div>
              </div>

              <div className="info-item">
                <span className="icon">📍</span>
                <div>
                  <p className="label">Location</p>
                  <p className="value">Coimbatore, Tamil Nadu, India</p>
                </div>
              </div>

              <div className="social-stack">
                <p className="label">Follow Me</p>
                <div className="social-pills">
                  <a href="https://github.com/stalin05n" target="_blank" rel="noreferrer" className="social-btn">GitHub</a>
                  <a href="https://linkedin.com/in/stalin-e-46355a2a1" target="_blank" rel="noreferrer" className="social-btn">LinkedIn</a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Message Form */}
          <div className="contact-form-panel fade-in-delayed">
            <form className="glass-card message-form">
              <div className="input-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="input-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="input-group">
                <textarea placeholder="Tell me about your project" rows="5" required></textarea>
              </div>
              <button type="submit" className="submit-neon-btn">
                Send Message <span>🚀</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;