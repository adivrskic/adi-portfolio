import React, { useEffect } from 'react';
import { IoCaretForwardOutline, IoCloseOutline } from "react-icons/io5";
import { aboutContent } from '../../data/portfolioData'
import './AboutModal.scss';

const AboutModal = ({ isVisible, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="about-modal-overlay" onClick={onClose}>
      <button
        onClick={onClose}
        className="about-modal-close"
        aria-label="Close modal"
      >
        <IoCloseOutline />
      </button>
      <div className="about-modal" onClick={(e) => e.stopPropagation()}>

        
        <div className="about-modal-content">
          <h2 className="about-modal-title">{aboutContent.title}</h2>
          
          <div className="about-modal-text">
            {aboutContent.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="about-modal-paragraph">{paragraph}</p>
            ))}
          </div>
          
          <div className="about-modal-skills">
            <h3 className="skills-title">Technical Skills</h3>
            <ul className="skills-list">
              {aboutContent.skills.map((skill, index) => (
                <li key={index} className="skill-item">
                  <IoCaretForwardOutline className="skill-icon" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutModal;