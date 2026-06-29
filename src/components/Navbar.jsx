import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useRecruiter } from '../context/RecruiterContext';
import { Sparkles, User, Briefcase, FileText, Mail } from 'lucide-react';

const Navbar = () => {
  const { isRecruiterMode, toggleRecruiterMode } = useRecruiter();
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (sectionId) => {
    if (location.pathname !== '/') {
      navigate(`/#${sectionId}`);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className={`navbar ${isRecruiterMode ? 'navbar-recruiter-theme' : ''}`}>
      {/* Brand Logo
      <div 
        onClick={() => {
          if (location.pathname !== '/') navigate('/');
          else window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        className="navbar-brand"
      >
        <span>Shubhika</span>
        <span className="bubble-outline logo-outline-adjust">Gupta</span>
        <Sparkles className="logo-sparkle animate-pulse" />
      </div> */}

      {/* Nav Links */}
      <div className="navbar-controls">
        <div className="navbar-menu">
          <button 
            onClick={() => handleNavClick('connect')} 
            className="navbar-link-btn"
          >
            <Mail className="navbar-icon" />
            ✦ Let's Connect
          </button>
          <button 
            onClick={() => handleNavClick('work')} 
            className="navbar-link-btn"
          >
            <Briefcase className="navbar-icon" />
            Work
          </button>
          <a 
            href="#resume" 
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('about'); // Scroll to About/Resume
            }} 
            className="navbar-link-btn"
          >
            <FileText className="navbar-icon" />
            ✦ Resume
          </a>
          <button 
            onClick={() => handleNavClick('about')} 
            className="navbar-link-btn"
          >
            <User className="navbar-icon" />
            About
          </button>
        </div>

        {/* Recruiter Switch */}
        <div className="navbar-recruiter-container">
          <span className="navbar-recruiter-label">
            Recruiter
          </span>
          <div 
            onClick={toggleRecruiterMode}
            className={`toggle-switch ${isRecruiterMode ? 'toggle-switch-active' : ''}`}
          >
            <div className="toggle-knob"></div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
