import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css"; // Import the CSS file

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="container">
        {/* Brand Logo */}
        <Link to="/" className="navbar-brand">
          Surya
        </Link>

        {/* Hamburger Button (Only for Mobile) */}
        <button className="navbar-toggler" onClick={toggleMobileMenu}>
          ☰
        </button>

        {/* Navigation Links */}
        <nav className={`nav-links ${isMobileMenuOpen ? "mobile-open" : ""}`}>
          <ul>
            {[
              { name: "Home", link: "#home-section" },
              { name: "About", link: "#about-section" },
              { name: "Resume", link: "#resume-section" },
              { name: "Works", link: "#services-section" },
              { name: "Skills", link: "#skills-section" },
              { name: "Projects", link: "#projects-section" },
              { name: "Contact", link: "#contact-section" },
            ].map((item, index) => (
              <li key={index}>
                <a href={item.link} onClick={closeMobileMenu}>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
