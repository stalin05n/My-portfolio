import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Layout Components
import Navbar from './components/Navbar';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Contact from './pages/Contact';

// Global Styles
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Navbar mobile matrum desktop-ku common-ah irukum */}
      <Navbar />

      <main className="content-area">
        <Routes>
          {/* Main Landing Page - Stalin E Summary [cite: 3, 7] */}
          <Route path="/" element={<Home />} />
          
          {/* Education & Certifications Page [cite: 10, 12] */}
          <Route path="/about" element={<About />} />
          
          {/* Technical Stack Grid [cite: 35] */}
          <Route path="/skills" element={<Skills />} />
          
          {/* Employee Management & Other Projects [cite: 19, 20] */}
          <Route path="/projects" element={<Projects />} />
          
          {/* Nxtlogic & Brainery Spot Internships [cite: 36, 41] */}
          <Route path="/experience" element={<Experience />} />
          
          {/* Contact Details & Form [cite: 4, 5] */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* Footer with basic info [cite: 16] */}
      <footer className="footer">
        <div className="container">
          <p>Designed and Built by Stalin E</p>
          <p>Coimbatore, India</p>
        </div>
      </footer>
    </div>
  );
}

export default App;