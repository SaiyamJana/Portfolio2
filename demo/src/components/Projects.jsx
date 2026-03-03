import React, { useEffect, useRef, useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
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

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'web',
      description: 'Full-stack e-commerce solution with real-time inventory management and payment integration.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
      link: '#',
    },
    {
      id: 2,
      title: 'Task Management App',
      category: 'mobile',
      description: 'Cross-platform mobile app for team collaboration and project tracking with real-time updates.',
      technologies: ['React Native', 'Firebase', 'Redux'],
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
      link: '#',
    },
    {
      id: 3,
      title: 'Analytics Dashboard',
      category: 'web',
      description: 'Interactive data visualization dashboard with customizable widgets and reporting features.',
      technologies: ['React', 'D3.js', 'PostgreSQL', 'Express'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      link: '#',
    },
    {
      id: 4,
      title: 'Social Media Platform',
      category: 'web',
      description: 'Community-driven platform with real-time messaging, content sharing, and user engagement features.',
      technologies: ['Next.js', 'GraphQL', 'Prisma', 'WebSockets'],
      image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=800&q=80',
      link: '#',
    },
    {
      id: 5,
      title: 'Fitness Tracking App',
      category: 'mobile',
      description: 'Personal fitness companion with workout plans, progress tracking, and nutrition guidance.',
      technologies: ['React Native', 'Node.js', 'MongoDB'],
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80',
      link: '#',
    },
    {
      id: 6,
      title: 'Portfolio CMS',
      category: 'design',
      description: 'Headless CMS tailored for creative professionals to showcase their work with elegant templates.',
      technologies: ['React', 'Strapi', 'Tailwind CSS'],
      image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&q=80',
      link: '#',
    },
  ];

  const filters = ['all', 'web', 'mobile', 'design'];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="projects" ref={sectionRef}>
      <div className="container">
        <div className={`projects-header ${isVisible ? 'visible' : ''}`}>
          <div className="section-label">Portfolio</div>
          <h2 className="section-title">
            Featured <span className="title-accent">Projects</span>
          </h2>
          <p className="section-description">
            A selection of recent work that showcases my skills and approach to problem-solving
          </p>
        </div>

        <div className={`project-filters ${isVisible ? 'visible' : ''}`}>
          {filters.map((filter) => (
            <button
              key={filter}
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>

        <div className={`projects-grid ${isVisible ? 'visible' : ''}`}>
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="project-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <a href={project.link} className="project-link">View Project →</a>
                </div>
              </div>
              <div className="project-content">
                <div className="project-category">{project.category}</div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
