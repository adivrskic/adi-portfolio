import React from 'react';
import './Navigation.scss';

const Navigation = ({ isVisible, onAboutClick, onMouseLeave }) => {
  return (
    <div 
      className={`navigation ${isVisible ? 'visible' : ''}`}
      onMouseLeave={onMouseLeave}
    >
      <div className="navigation-content">
        <nav className="navigation-menu">
          <a
            onClick={onAboutClick}
            className="navigation-item"
          >
            About
          </a>
          <a
            href="mailto:adivrskic123@gmail.com"
            className="navigation-item social-link"
          >
            Email
          </a>
          <a
            href="https://linkedin.com/in/adi-vrskic"
            target="_blank"
            rel="noopener noreferrer"
            className="navigation-item social-link"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/adivrskic"
            target="_blank"
            rel="noopener noreferrer"
            className="navigation-item social-link"
          >
            Github
          </a>
          <a
            href="/Resume.pdf"
            target="_blank"
            className="navigation-item"
          >
            Resume
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;