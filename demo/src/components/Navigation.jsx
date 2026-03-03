import React, { useState, useEffect } from 'react';
import './Navigation.css';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`navigation ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#hero" className="logo" onClick={(e) => handleNavClick(e, '#hero')}>
          <span className="logo-text">Portfolio</span>
        </a>

        <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          {navItems.map((item, index) => (
            <li key={index} style={{ animationDelay: `${index * 0.1}s` }}>
              <a 
                href={item.href} 
                onClick={(e) => handleNavClick(e, item.href)}
                className="nav-link"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        <button 
          className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
