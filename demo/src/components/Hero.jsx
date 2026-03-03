import React, { useEffect, useState } from 'react';
import './Hero.css';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="hero" className="hero">
      <div className="container hero-container">
        <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
          <div className="hero-label">Welcome to my portfolio</div>
          <h1 className="hero-title">
            Crafting Digital
            <br />
            <span className="hero-title-accent">Experiences</span>
          </h1>
          <p className="hero-description">
            Full-stack developer & creative technologist specializing in building
            exceptional digital experiences that merge aesthetics with functionality.
          </p>
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn btn-secondary">
              Get In Touch
            </a>
          </div>
        </div>
        
        <div className="hero-decoration">
          <div className="decoration-circle circle-1"></div>
          <div className="decoration-circle circle-2"></div>
          <div className="decoration-line line-1"></div>
          <div className="decoration-line line-2"></div>
        </div>
      </div>

      <div className="hero-scroll">
        <span>Scroll</span>
        <div className="scroll-indicator"></div>
      </div>
    </section>
  );
};

export default Hero;
