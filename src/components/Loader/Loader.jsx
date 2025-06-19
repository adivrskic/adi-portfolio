import React, { useState, useEffect } from 'react';
import './Loader.scss';

const Loader = ({ isVisible, onComplete }) => {
  const [showGradient, setShowGradient] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setShowGradient(true);

      // Start fade out
      const fadeTimer = setTimeout(() => {
        setFadeOut(true);
      }, 1000);

      // Complete loading
      const completeTimer = setTimeout(() => {
        onComplete();
      }, 2000);

      return () => {
        clearTimeout(fadeTimer);
        clearTimeout(completeTimer);
      };
    }
  }, [isVisible, onComplete]);

  if (!isVisible) return null;

  return (
    <div className={`loader ${fadeOut ? 'fade-out' : ''}`}>
      <div className={`loader-background ${showGradient ? 'visible' : ''}`} />
      
      <div className={`loader-content ${showGradient ? 'fade-out' : ''}`}>
        <div className="loader-text">
          <h1 className="loader-name loader-enter">
            <span className="name-first">Adi</span>
            <span className="name-last">Vrskic</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Loader;