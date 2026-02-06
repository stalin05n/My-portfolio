import React from 'react';
import '../App.css';

const Skills = () => {
  const techStack = [
    {
      category: "Frontend",
      color: "#38bdf8", // Blue
      items: [
        { name: "React.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Next.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
        { name: "Tailwind", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
      ]
    },
    {
      category: "Backend",
      color: "#a78bfa", // Purple
      items: [
        { name: "Node.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Express", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
        { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      ]
    },
    {
      category: "Database",
      color: "#4ade80", // Green
      items: [
        { name: "MongoDB", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "Redis", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
      ]
    },
    {
      category: "DevOps",
      color: "#f472b6", // Pink
      items: [
        { name: "Docker", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
        { name: "AWS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
      ]
    }
  ];

  return (
    <section className="skills-page">
      <div className="container">
        <h2 className="section-title slide-up">Technical Arsenal</h2>
        
        <div className="skills-bento-grid">
          {techStack.map((stack, index) => (
            <div 
              key={stack.category} 
              className="skill-card glass-card"
              style={{ "--accent-color": stack.color, "--delay": `${index * 0.1}s` }}
            >
              <div className="card-inner">
                <h3 className="category-title">{stack.category}</h3>
                <div className="items-flex">
                  {stack.items.map(skill => (
                    <div key={skill.name} className="mini-skill-box">
                      <img src={skill.img} alt={skill.name} className="tech-icon" />
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Decorative Glow */}
              <div className="card-glow"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;