import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header>
      <Link to="/" className="navbar-brand">Surya</Link>
      <nav
        className={`navbar navbar-expand-lg ftco-navbar-light ${
          isScrolled ? 'scrolled awake' : ''
        }`}
      >
        <div className="container">
          {/* Hamburger Button */}
          <button
            className={`navbar-toggler ${isMobileMenuOpen ? 'active' : ''}`}
            type="button"
            onClick={toggleMobileMenu}
          >
            <span className="oi oi-menu"></span> Menu
          </button>

          {/* Navigation Links */}
          <div
            className={`navbar-collapse collapse ${
              isMobileMenuOpen ? 'show' : ''
            }`}
          >
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a href="#home-section" className="nav-link" onClick={closeMobileMenu}>
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#about-section" className="nav-link" onClick={closeMobileMenu}>
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="#resume-section" className="nav-link" onClick={closeMobileMenu}>
                  Resume
                </a>
              </li>
              <li className="nav-item">
                <a href="#services-section" className="nav-link" onClick={closeMobileMenu}>
                  Works
                </a>
              </li>
              <li className="nav-item">
                <a href="#skills-section" className="nav-link" onClick={closeMobileMenu}>
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a href="#projects-section" className="nav-link" onClick={closeMobileMenu}>
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a href="#contact-section" className="nav-link" onClick={closeMobileMenu}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
