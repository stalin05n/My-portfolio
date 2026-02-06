import React from 'react';
import '../App.css';

const Projects = () => {
  const projectsData = [
    {
      title: "Employee Management App",
      // Professional Dashboard Image
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800",
      desc: "Full-stack MERN application to manage employee data, attendance, and performance tracking with Admin role-based access.",
      tech: ["MERN Stack", "Redux", "JWT"],
      category: "Management"
    },
    {
      title: "Full-Stack E-Commerce Store",
      // Online Shopping/E-commerce Image
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=800",
      desc: "A complete shopping experience with product filtering, Stripe payment gateway, and a robust user order history dashboard.",
      tech: ["React.js", "Node.js", "Stripe", "MongoDB"],
      category: "E-Commerce"
    },
    {
      title: "Secured Authentication App",
      // Cybersecurity/Lock Image matching your screenshot
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800",
      desc: "Implemented advanced login/signup with encrypted password storage, 2FA, and secure session management using JWT.",
      tech: ["Node.js", "Express", "Bcrypt", "React"],
      category: "Security"
    },
    {
      title: "Real-time Chat Application",
      // Communication/Networking Image
      image: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=800",
      desc: "Instant messaging app with room-based chatting, typing indicators, and online status using WebSockets technology.",
      tech: ["Socket.io", "React", "Node.js", "Express"],
      category: "Social Media"
    },
    {
      title: "AI Fitness Tracker",
      // Health/Gym Tech Image
      image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=800",
      desc: "An application that tracks daily workouts, calories burned, and provides AI-based exercise recommendations.",
      tech: ["React Native", "Firebase", "API Integration"],
      category: "Health Tech"
    },
    {
      title: "Skycast Weather App",
      // Weather/Sky Forecast Image
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=800",
      desc: "Detailed weather forecasting app using OpenWeather API with dynamic background changes based on climate.",
      tech: ["React.js", "REST API", "Tailwind CSS"],
      category: "Utility"
    }
  ];

  return (
    <section className="projects-section">
      <div className="container">
        <h2 className="section-title slide-up">Projects Portfolio</h2>
        <p className="section-subtitle">A collection of my recent works and technical experiments.</p>
        
        <div className="modern-project-grid">
          {projectsData.map((project, index) => (
            <div key={index} className="project-card glass-card fade-in" style={{animationDelay: `${index * 0.15}s`}}>
              <div className="card-image-box">
                <img src={project.image} alt={project.title} className="project-img" />
                <div className="card-hover-overlay">
                   <div className="action-btns">
                      <button className="view-btn">Code</button>
                      <button className="demo-btn">Live Demo</button>
                   </div>
                </div>
                <span className="floating-category">{project.category}</span>
              </div>
              
              <div className="card-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.desc}</p>
                <div className="card-tags">
                  {project.tech.map((t, i) => (
                    <span key={i} className="tech-tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;