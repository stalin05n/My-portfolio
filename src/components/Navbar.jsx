import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../App.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`simple-nav ${scrolled ? 'scrolled' : ''} fade-in-down`}>
      <div className="nav-inner">
        <Link to="/" className="logo scale-up">Stalin E<span>.</span></Link>
        
        <div className="links">
          {['Home', 'About','Skills', 'Experience',  'Projects', 'Contact'].map((item, index) => (
            <Link 
              key={item} 
              to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
              className={location.pathname === (item === 'Home' ? '/' : `/${item.toLowerCase()}`) ? 'active' : ''}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;