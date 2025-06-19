import React, { useState } from 'react';
import './ProjectCard.scss';

const ProjectCard = ({ 
  project, 
  isHovered, 
  isOtherHovered, 
  onHover, 
  onLeave, 
  onClick 
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    console.warn(`Failed to load image for project: ${project.title}`);
    setImageLoaded(true); // Still mark as loaded to show placeholder
  };

  return (
    <div
      className={`project-card ${isOtherHovered ? 'other-hovered' : ''} ${!imageLoaded ? 'project-card-loading' : ''}`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
      aria-label={`View details for ${project.title}`}
    >
      <img
        src={project.image}
        alt={project.title}
        className="project-image"
        onLoad={handleImageLoad}
        onError={handleImageError}
        loading="lazy"
      />
      
      <div className="project-content">
        <div className="project-info">
          <div className="project-accent"></div>
          <div className="project-text">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;