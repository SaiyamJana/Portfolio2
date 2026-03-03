import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleClick = (e, href) => {
    e.preventDefault();
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
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">Portfolio</div>
            <p className="footer-description">
              Creating digital experiences that make a difference. 
              Let's build something amazing together.
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} onClick={(e) => handleClick(e, link.href)}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Connect</h4>
            <ul className="footer-links">
              <li><a href="#">GitHub</a></li>
              <li><a href="#">LinkedIn</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Dribbble</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Say Hello</h4>
            <ul className="footer-links">
              <li><a href="mailto:hello@portfolio.com">hello@portfolio.com</a></li>
              <li><a href="tel:+15551234567">+1 (555) 123-4567</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            © {currentYear} Portfolio. Crafted with passion and code.
          </p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
