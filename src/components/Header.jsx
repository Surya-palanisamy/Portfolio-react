import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/Header.css"; // Import the CSS file

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
              { name: "Home", link: "/" },
              { name: "About", link: "/about" },
              { name: "Resume", link: "/resume" },
              { name: "Works", link: "/services" },
              { name: "Skills", link: "/skills" },
              { name: "Projects", link: "/projects" },
              { name: "Contact", link: "/contact" },
            ].map((item, index) => (
              <li key={index}>
                <Link to={item.link} onClick={closeMobileMenu}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
