import React from 'react';
import './Landing.css';

const Landing = () => {
  return (
    <div className="landing-container">
      <div className="landing-content">
        <div className="hero-section">
          <h1 className="hero-title">Welcome to My Portfolio</h1>
          <p className="hero-subtitle">
            I'm a passionate developer creating amazing digital experiences
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary">View My Work</button>
            <button className="btn btn-secondary">Contact Me</button>
          </div>
        </div>
        
        <div className="intro-section">
          <div className="intro-text">
            <h2>Hello, I'm [Your Name]</h2>
            <p>
              A creative and detail-oriented developer with a passion for building 
              innovative web applications and solving complex problems through code.
            </p>
          </div>
          <div className="intro-image">
            <img 
              src="/src/assets/Images/profile-img.png" 
              alt="Profile" 
              className="profile-image"
            />
          </div>
        </div>

        <div className="skills-preview">
          <h3>What I Do</h3>
          <div className="skills-grid">
            <div className="skill-card">
              <h4>Frontend Development</h4>
              <p>React, JavaScript, CSS, HTML</p>
            </div>
            <div className="skill-card">
              <h4>UI/UX Design</h4>
              <p>Responsive Design, User Experience</p>
            </div>
            <div className="skill-card">
              <h4>Backend Development</h4>
              <p>Node.js, APIs, Database Design</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
