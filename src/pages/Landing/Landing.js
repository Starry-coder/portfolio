import React from 'react';
import './Landing.css';
import { DotGrid } from '../../components';
import ShapeBlur from '../../components/ShapeBlur/ShapeBlur';
import BlurText from '../../components/BlurText/BlurText';
import Threads from '../../components/Threads/Threads';
import FuzzyText from '../../components/FuzzyText/FuzzyText';

const Landing = () => {
  return (
    <div className="landing-container">
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
      
      {/* Content Overlay */}
      <Threads
            color={[0.259, 1.0, 0.384]}
            amplitude={1.8}
            distance={0.7}
            enableMouseInteraction={true}
        />
      <div className="landing-content">
        <div className="fuzzy-text-container">
          <FuzzyText 
          className="fuzzy-text-404"
          baseIntensity={0.3} 
          hoverIntensity={0.8} 
          enableHover={true}
          fontSize="clamp(2.5rem, 8vw, 5rem)"
          fontWeight={900}
          >
          portfolio/home
          </FuzzyText>
          <FuzzyText 
          className="fuzzy-text-subtitle"
          baseIntensity={0.2} 
          hoverIntensity={0.6} 
          enableHover={true}
          fontSize="clamp(1rem, 2.5vw, 1.8rem)"
          fontWeight={600}
          >
          200: OK
          </FuzzyText>
        </div>
        <div className="hero-left">
          <div className="hero-title-container">
            <span className="hero-title-text">
              &gt; aryan_kumar:~$ ./portfolio
            </span>
          </div>
          <BlurText
            text="Initializing... Web Developer | Cybersecurity Enthusiast | Problem Solver"
            delay={150}
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
              src="/profile-img.png" 
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
