import React from 'react';
import './Landing.css';
import ShapeBlur from '../../components/ShapeBlur/ShapeBlur';
import BlurText from '../../components/BlurText/BlurText';
import FuzzyText from '../../components/FuzzyText/FuzzyText';
const Landing = () => {
  return (
    <div className="landing-container">
      <div className="landing-content">
        <div className="fuzzy-text-container">
          <FuzzyText 
          className="fuzzy-text-404"
          baseIntensity={0.15} 
          hoverIntensity={0.4} 
          enableHover={true}
          fontSize="clamp(1.25rem, 4vw, 2.5rem)"
          fontWeight={900}
          >
          portfolio/home
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
        <div className="hero-left">
          <div className="hero-title-container">
            <span className="hero-title-text">
              &gt; aryan_kumar:~$ ./portfolio
            </span>
          </div>
          <BlurText
            text="Initializing..................
            Cybersecurity_Enthusiast  |  Web_Developer"
            delay={150}
            startDelay={4200}
            animateBy="words"
            direction="top"
            className="hero-subtitle-blur mb-8"
          />
          <p className='hero-prompt'>
            &gt;&gt; Press [Enter] to continue...
          </p>
        </div>
        
        <div className="hero-right">
          <div className="photo-frame">
            <ShapeBlur
              variation={0}
              pixelRatioProp={window.devicePixelRatio || 1}
              shapeSize={1.22}
              roundness={0.1}
              borderSize={0.08}
              circleSize={0.2}
              circleEdge={1}
            />
            <img 
              src="/PROFILE-IMG.png" 
              alt="Profile" 
              className="profile-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
