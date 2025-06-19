import React from 'react';
import { IoCloseOutline } from "react-icons/io5";
import './NameComponent.scss';

const NameComponent = ({ isNavigationOpen, onToggleNavigation, onCloseNavigation, isVisible }) => {
  const handleNameClick = () => {
    if (!isNavigationOpen) {
      onToggleNavigation();
    }
  };

  const handleNameHover = () => {
    if (!isNavigationOpen) {
      onToggleNavigation();
    }
  };

  const handleCloseClick = (e) => {
    e.stopPropagation();
    onCloseNavigation();
  };

  if (!isVisible) return null;

  return (
    <>
      {isNavigationOpen && (
        <button
          className="navigation-close"
          onClick={handleCloseClick}
          aria-label="Close navigation"
          type="button"
        >
          <IoCloseOutline />
        </button>
      )}
      <div className={`name-component ${isVisible ? 'visible' : ''}`}>
        <h2
          className={`name-text ${isNavigationOpen ? 'shifted' : ''}`}
          onMouseEnter={handleNameHover}
          onClick={handleNameClick}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              handleNameClick();
            }
          }}
        >
          <span className="name-first">Adi</span>
          <span className="name-break"><br /></span>
          <span className="name-last">Vrskic</span>
        </h2>
      </div>
    </>   
  );
};

export default NameComponent;