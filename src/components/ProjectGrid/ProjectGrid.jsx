import React from 'react';
import './ProjectGrid.scss';

const ProjectGrid = ({ 
  projects, 
  onProjectClick, 
  hoveredProject, 
  setHoveredProject, 
  isBlurred,
  isInteractive,
  ProjectCardComponent 
}) => {
  const getGridClass = () => {
    if (projects.length <= 4) return 'grid-2';
    if (projects.length <= 6) return 'grid-3';
    if (projects.length <= 9) return 'grid-3';
    return 'grid-4';
  };

  const handleProjectHover = (projectId) => {
    if (isInteractive) {
      setHoveredProject(projectId);
    }
  };

  const handleProjectLeave = () => {
    if (isInteractive) {
      setHoveredProject(null);
    }
  };

  const handleProjectClick = (project) => {
    if (isInteractive) {
      onProjectClick(project);
    }
  };

  return (
    <div 
      className={`project-grid ${getGridClass()} ${isBlurred ? 'blurred' : ''} ${!isInteractive ? 'loading' : ''}`}
      data-items={projects.length}
    >
      {projects.map((project) => (
        <ProjectCardComponent
          key={project.id}
          project={project}
          isHovered={hoveredProject === project.id}
          isOtherHovered={hoveredProject !== null && hoveredProject !== project.id}
          onHover={() => handleProjectHover(project.id)}
          onLeave={handleProjectLeave}
          onClick={() => handleProjectClick(project)}
          isInteractive={isInteractive}
        />
      ))}
    </div>
  );
};

export default ProjectGrid;