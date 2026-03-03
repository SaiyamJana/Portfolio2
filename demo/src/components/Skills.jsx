import React, { useEffect, useRef, useState } from 'react';
import './Skills.css';

const Skills = () => {
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

  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React / Next.js', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'HTML/CSS/SASS', level: 95 },
        { name: 'Tailwind CSS', level: 90 },
      ],
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Node.js / Express', level: 90 },
        { name: 'Python / Django', level: 85 },
        { name: 'GraphQL', level: 80 },
        { name: 'RESTful APIs', level: 95 },
      ],
    },
    {
      title: 'Database & Tools',
      skills: [
        { name: 'MongoDB', level: 90 },
        { name: 'PostgreSQL', level: 85 },
        { name: 'Git / GitHub', level: 95 },
        { name: 'Docker', level: 80 },
      ],
    },
    {
      title: 'Design & Other',
      skills: [
        { name: 'UI/UX Design', level: 85 },
        { name: 'Figma', level: 90 },
        { name: 'Responsive Design', level: 95 },
        { name: 'Performance Optimization', level: 85 },
      ],
    },
  ];

  return (
    <section id="skills" className="skills" ref={sectionRef}>
      <div className="container">
        <div className={`skills-header ${isVisible ? 'visible' : ''}`}>
          <div className="section-label">Expertise</div>
          <h2 className="section-title">
            Skills & <span className="title-accent">Technologies</span>
          </h2>
          <p className="section-description">
            A comprehensive toolkit built through years of hands-on experience and continuous learning
          </p>
        </div>

        <div className={`skills-grid ${isVisible ? 'visible' : ''}`}>
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex} 
              className="skill-category"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex} 
                    className="skill-item"
                    style={{ animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s` }}
                  >
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ 
                          '--skill-level': `${skill.level}%`,
                          animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05) + 0.3}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
