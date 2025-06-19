import React, { useEffect, useState } from 'react';
import { IoCloseOutline, IoOpenOutline, IoLogoGithub, IoDocumentTextOutline, IoChevronBackOutline, IoChevronForwardOutline, IoLogoNpm } from "react-icons/io5";
import './ProjectDetailModal.scss';

const ProjectDetailModal = ({ project, isVisible, onClose }) => {
  const [expandedImage, setExpandedImage] = useState(null);
  const [isImageChanging, setIsImageChanging] = useState(false);

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

  useEffect(() => {
    if (!isVisible) {
      setExpandedImage(null);
      setIsImageChanging(false);
    }
  }, [isVisible]);

  const closeExpandedImage = () => {
    setExpandedImage(null);
    setIsImageChanging(false);
  };

  const navigateImage = (direction) => {
    if (!project.gallery || isImageChanging) return;
    
    setIsImageChanging(true);
    
    // Add a smooth transition delay
    setTimeout(() => {
      const currentIndex = expandedImage;
      let newIndex;
      
      if (direction === 'next') {
        newIndex = currentIndex === project.gallery.length - 1 ? 0 : currentIndex + 1;
      } else {
        newIndex = currentIndex === 0 ? project.gallery.length - 1 : currentIndex - 1;
      }
      
      setExpandedImage(newIndex);
      
      // Reset the changing state after a short delay
      setTimeout(() => {
        setIsImageChanging(false);
      }, 100);
    }, 150);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (expandedImage === null) return;
      
      if (e.key === 'ArrowLeft') {
        navigateImage('prev');
      } else if (e.key === 'ArrowRight') {
        navigateImage('next');
      } else if (e.key === 'Escape') {
        closeExpandedImage();
      }
    };

    if (expandedImage !== null) {
      document.addEventListener('keydown', handleKeyPress);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [expandedImage, isImageChanging]);

  if (!isVisible || !project) return null;

  return (
    <div className="project-detail-overlay">
      <div className="project-detail-modal">
        <button
          onClick={onClose}
          className="project-detail-close"
          aria-label="Close project detail"
        >
          <IoCloseOutline />
        </button>
        
        <div className="project-detail-content">
          <div className="project-detail-header">
            <h1 className="project-detail-title">{project.title}</h1>
            <p className="project-detail-description">{project.description}</p>
          </div>
          
          <div className="project-detail-image">
            <img
              src={project.image}
              alt={project.title}
              className="detail-image"
            />
          </div>
          
          <div className="project-detail-body">
            <div className="project-overview">
              <h2 className="section-title">Project Overview</h2>
              <p className="project-details-text">{project.details}</p>
            </div>
            
            <div className="project-technologies">
              <h3 className="tech-title">Technologies Used</h3>
              <div className="tech-tags">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Scaffolded content sections */}
            <div className="scaffolded-sections">
              <div className="scaffolded-section">
                <h3 className="section-title">Project Gallery</h3>
                <div className="placeholder-content">
                  {project.gallery && project.gallery.length > 0 ? (
                    <div className="gallery-row">
                      {project.gallery.map((item, index) => (
                        <div 
                          key={index} 
                          className="gallery-item"
                          onClick={() => setExpandedImage(index)}
                        >
                          <img 
                            src={item.src} 
                            alt={item.alt}
                            className="gallery-image"
                            loading="lazy"
                          />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <>
                      <p>Additional project images and screenshots will be displayed here...</p>
                      <div className="placeholder-grid">
                        <div className="placeholder-item"></div>
                        <div className="placeholder-item"></div>
                        <div className="placeholder-item"></div>
                      </div>
                    </>
                  )}
                </div>
              </div>
              
              <div className="scaffolded-section">
                <h3 className="section-title">Case Study</h3>
                <div className="placeholder-content">
                  {project.caseStudy ? (
                    <div className="case-study-content">
                      <div className="case-study-section">
                        <h4 className="case-study-subtitle">Challenge</h4>
                        <p className="case-study-text">{project.caseStudy.challenge}</p>
                      </div>
                      
                      <div className="case-study-section">
                        <h4 className="case-study-subtitle">Solution</h4>
                        <p className="case-study-text">{project.caseStudy.solution}</p>
                      </div>
                      
                      <div className="case-study-section">
                        <h4 className="case-study-subtitle">Outcome</h4>
                        <p className="case-study-text">{project.caseStudy.outcome}</p>
                      </div>
                      
                      {project.caseStudy.keyFeatures && (
                        <div className="case-study-section">
                          <h4 className="case-study-subtitle">Key Features</h4>
                          <ul className="features-list">
                            {project.caseStudy.keyFeatures.map((feature, index) => (
                              <li key={index} className="feature-item">{feature}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ) : (
                    <>
                      <p>Detailed case study content including challenges, solutions, and outcomes will be added here...</p>
                      <div className="placeholder-text">
                        <div className="placeholder-line"></div>
                        <div className="placeholder-line short"></div>
                        <div className="placeholder-line"></div>
                        <div className="placeholder-line medium"></div>
                      </div>
                    </>
                  )}
                </div>
              </div>
              
              <div className="scaffolded-section">
                <h3 className="section-title">Links & Resources</h3>
                <div className="placeholder-content">
                  {project.links && (project.links.live || project.links.github || project.links.npm) ? (
                    <div className="project-links">
                      {project.links.live && (
                        <a 
                          href={project.links.live} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="placeholder-link live-link"
                        >
                          <IoOpenOutline />
                          Live Demo
                        </a>
                      )}
                      {project.links.github && (
                        <a 
                          href={project.links.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="placeholder-link github-link"
                        >
                          <IoLogoGithub />
                          GitHub Repo
                        </a>
                      )}
                      {project.links.npm && (
                        <a 
                          href={project.links.npm} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="placeholder-link npm-link"
                        >
                          <IoLogoNpm />
                          NPM Package
                        </a>
                      )}
                    </div>
                  ) : (
                    <>
                      <p>Project links, live demos, and additional resources will be available here...</p>
                      <div className="placeholder-links">
                        <div className="placeholder-link">Live Demo</div>
                        <div className="placeholder-link">GitHub Repo</div>
                        <div className="placeholder-link">NPM Package</div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Expanded Image Modal */}
      {expandedImage !== null && project.gallery && (
        <div className="image-expanded-overlay" onClick={closeExpandedImage}>
          <div className="image-expanded-modal" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={closeExpandedImage}
              className="image-expanded-close"
              aria-label="Close expanded image"
            >
              <IoCloseOutline />
            </button>
            
            <button
              onClick={() => navigateImage('prev')}
              className="image-nav-button image-nav-prev"
              aria-label="Previous image"
              disabled={isImageChanging}
            >
              <IoChevronBackOutline />
            </button>
            
            <button
              onClick={() => navigateImage('next')}
              className="image-nav-button image-nav-next"
              aria-label="Next image"
              disabled={isImageChanging}
            >
              <IoChevronForwardOutline />
            </button>
            
            <div className={`image-expanded-content ${isImageChanging ? 'changing' : ''}`}>
              <img
                src={project.gallery[expandedImage].src}
                alt={project.gallery[expandedImage].alt}
                className={`image-expanded ${isImageChanging ? 'changing' : ''}`}
              />
              <div className="image-subtitle">
                {project.gallery[expandedImage].alt}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetailModal;