import React from 'react';
import './Projects.css';
import FuzzyText from '../../components/FuzzyText/FuzzyText';
import { DotGrid } from '../../components';

const Projects = () => {
  return (
    <div className="projects-container">
      {/* Background DotGrid */}
      <DotGrid
        dotSize={3}
        gap={25}
        baseColor="#404040"
        activeColor="#42FF62"
        proximity={120}
        shockRadius={250}
        shockStrength={5}
        resistance={750}
        returnDuration={3}
      />
      <div className="projects-content">
        <div className="fuzzy-text-container">
          <FuzzyText 
            className="fuzzy-text-404"
            baseIntensity={0.15} 
            hoverIntensity={0.4} 
            enableHover={true}
            fontSize="clamp(1.25rem, 4vw, 2.5rem)"
            fontWeight={900}
          >
            portfolio/projects
          </FuzzyText>
          <FuzzyText 
            className="fuzzy-text-subtitle"
            baseIntensity={0.02} 
            hoverIntensity={0.3} 
            enableHover={true}
            fontSize="clamp(0.5rem, 1.25vw, 0.9rem)"
            fontWeight={600}
          >
            STATUS : 200 (OK)
          </FuzzyText>
        </div>
        
        <div className="page-content">
          <h1>My Projects</h1>
          <p>Here are some of the projects I've worked on:</p>
          
          <div className="projects-grid">
            <div className="project-card">
              <h3>Project 1</h3>
              <p>Description of your first project.</p>
            </div>
            
            <div className="project-card">
              <h3>Project 2</h3>
              <p>Description of your second project.</p>
            </div>
            
            <div className="project-card">
              <h3>Project 3</h3>
              <p>Description of your third project.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
