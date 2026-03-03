import React, { useEffect, useRef, useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState('');
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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('sending');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => {
        setFormStatus('');
      }, 3000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'hello@portfolio.com',
      link: 'mailto:hello@portfolio.com',
    },
    {
      icon: '📱',
      title: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
    },
    {
      icon: '📍',
      title: 'Location',
      value: 'San Francisco, CA',
      link: '#',
    },
  ];

  const socialLinks = [
    { name: 'GitHub', url: '#', icon: 'github' },
    { name: 'LinkedIn', url: '#', icon: 'linkedin' },
    { name: 'Twitter', url: '#', icon: 'twitter' },
    { name: 'Dribbble', url: '#', icon: 'dribbble' },
  ];

  return (
    <section id="contact" className="contact" ref={sectionRef}>
      <div className="container">
        <div className={`contact-header ${isVisible ? 'visible' : ''}`}>
          <div className="section-label">Get In Touch</div>
          <h2 className="section-title">
            Let's Create Something <span className="title-accent">Amazing</span>
          </h2>
          <p className="section-description">
            Have a project in mind or just want to chat? Feel free to reach out!
          </p>
        </div>

        <div className={`contact-content ${isVisible ? 'visible' : ''}`}>
          <div className="contact-info-section">
            <h3 className="info-title">Contact Information</h3>
            <p className="info-subtitle">
              Feel free to reach out through any of these channels
            </p>

            <div className="contact-info-list">
              {contactInfo.map((info, index) => (
                <a 
                  key={index} 
                  href={info.link} 
                  className="contact-info-item"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="info-icon">{info.icon}</div>
                  <div className="info-details">
                    <div className="info-label">{info.title}</div>
                    <div className="info-value">{info.value}</div>
                  </div>
                </a>
              ))}
            </div>

            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a 
                  key={index} 
                  href={social.url} 
                  className="social-link"
                  aria-label={social.name}
                  style={{ animationDelay: `${(index * 0.1) + 0.3}s` }}
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="How can I help?"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>

            <button 
              type="submit" 
              className={`submit-btn ${formStatus}`}
              disabled={formStatus === 'sending'}
            >
              {formStatus === 'sending' && 'Sending...'}
              {formStatus === 'success' && 'Message Sent! ✓'}
              {!formStatus && 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
