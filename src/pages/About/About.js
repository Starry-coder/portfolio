import React from 'react';
import './About.css';
import FuzzyText from '../../components/FuzzyText/FuzzyText';
import { DotGrid } from '../../components';

const About = () => {
  return (
    <div className="about-container">
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
      <div className="about-content">
        <div className="fuzzy-text-container">
          <FuzzyText 
            className="fuzzy-text-404"
            baseIntensity={0.15} 
            hoverIntensity={0.4} 
            enableHover={true}
            fontSize="clamp(1.25rem, 4vw, 2.5rem)"
            fontWeight={900}
          >
            portfolio/about-me
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
          <h1>About Me</h1>
          <p>Welcome to my About page. This is where I'll share my story, skills, and experience.</p>
          <div className="about-section">
            <h2>Background</h2>
            <p>I'm a passionate developer with experience in cybersecurity and web development.</p>
          </div>
          <div className="about-section">
            <h2>Skills</h2>
            <p>My technical skills include various programming languages, frameworks, and security tools.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
