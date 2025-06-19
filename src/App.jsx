import React, { useState } from 'react';
import Loader from './components/Loader/Loader';
import ProjectGrid from './components/ProjectGrid/ProjectGrid';
import ProjectCard from './components/ProjectCard/ProjectCard';
import NameComponent from './components/NameComponent/NameComponent';
import Navigation from './components/Navigation/Navigation';
import AboutModal from './components/AboutModal/AboutModal';
import ProjectDetailModal from './components/ProjectDetailModal/ProjectDetailModal';
import { portfolioData } from './data/portfolioData';
import './styles/main.scss';


const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [gridReady, setGridReady] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showProjectDetail, setShowProjectDetail] = useState(false);

  const handleLoaderComplete = () => {
    setIsLoading(false);
    // Add delay before grid becomes interactive
    setTimeout(() => {
      setGridReady(true);
    }, 1000);
  };

  const handleNameHover = () => {
    setIsNavigationOpen(true);
  };

  const handleCloseNavigation = () => {
    setIsNavigationOpen(false);
  };

  const handleNavigationLeave = () => {
    // Only close if not hovering over the name component
    // This will be handled by the close button instead
  };

  const handleAboutClick = () => {
    setShowAbout(true);
    setIsNavigationOpen(false);
  };

  const closeAbout = () => {
    setShowAbout(false);
  };

  const closeProjectDetail = () => {
    setShowProjectDetail(false);
    setSelectedProject(null);
  };

  const handleProjectClick = (project) => {
    setIsNavigationOpen(false);
    setSelectedProject(project);
    setShowProjectDetail(true);
  };

  return (
    <div className="app">
      <Loader isVisible={isLoading} onComplete={handleLoaderComplete} />
      
      {!isLoading && (
        <>
          <ProjectGrid
            projects={portfolioData}
            onProjectClick={handleProjectClick}
            hoveredProject={hoveredProject}
            setHoveredProject={setHoveredProject}
            isBlurred={isNavigationOpen || showAbout}
            isInteractive={gridReady}
            ProjectCardComponent={ProjectCard}
          />
          
          <NameComponent
            isNavigationOpen={isNavigationOpen}
            onToggleNavigation={handleNameHover}
            onCloseNavigation={handleCloseNavigation}
            isVisible={gridReady}
          />
          
          <Navigation
            isVisible={isNavigationOpen}
            onAboutClick={handleAboutClick}
            onMouseLeave={handleNavigationLeave}
          />
          
          <AboutModal
            isVisible={showAbout}
            onClose={closeAbout}
          />
          
          <ProjectDetailModal
            project={selectedProject}
            isVisible={showProjectDetail}
            onClose={closeProjectDetail}
          />
        </>
      )}
    </div>
  );
};

export default App;