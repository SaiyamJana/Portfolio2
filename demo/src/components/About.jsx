import React, { useEffect, useRef, useState } from 'react';
import './About.css';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const stats = [
    { number: '5+', label: 'Years Experience' },
    { number: '50+', label: 'Projects Completed' },
    { number: '30+', label: 'Happy Clients' },
    { number: '100%', label: 'Commitment' },
  ];

  return (
    <section id="about" className="about" ref={sectionRef}>
      <div className="container">
        <div className={`about-content ${isVisible ? 'visible' : ''}`}>
          <div className="about-text">
            <div className="section-label">About Me</div>
            <h2 className="section-title">
              Building bridges between
              <span className="title-accent"> design & code</span>
            </h2>
            <div className="about-description">
              <p>
                I'm a passionate full-stack developer with a keen eye for design and 
                a love for creating seamless digital experiences. My journey in web 
                development started over five years ago, and since then, I've been 
                fortunate to work on diverse projects across various industries.
              </p>
              <p>
                I specialize in modern JavaScript frameworks, with expertise in React, 
                Node.js, and a growing proficiency in cloud technologies. My approach 
                combines technical excellence with creative problem-solving, ensuring 
                that every project not only works flawlessly but also delivers an 
                exceptional user experience.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, 
                contributing to open-source projects, or sharing knowledge with the 
                developer community through writing and mentoring.
              </p>
            </div>
          </div>

          <div className="about-stats">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="stat-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
