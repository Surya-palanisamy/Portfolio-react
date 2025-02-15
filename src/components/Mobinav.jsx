import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link from React Router

const Mobinav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
    toggleHamburgerIcon();
    toggleContentBlur();
  };

  const closeNav = () => {
    setIsNavOpen(false);
    resetHamburgerIcon();
    removeContentBlur();
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        !event.target.closest(".header-nav") &&
        !event.target.closest(".hamburger")
      ) {
        closeNav();
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const toggleHamburgerIcon = () => {
    const spans = document.querySelectorAll(".hamburger span");
    spans.forEach((span, index) => {
      span.classList.toggle(`close-${index + 1}`);
    });
  };

  const resetHamburgerIcon = () => {
    const spans = document.querySelectorAll(".hamburger span");
    spans.forEach((span, index) => {
      span.classList.remove(`close-${index + 1}`);
    });
  };

  const toggleContentBlur = () => {
    document.body.classList.toggle("content-blur");
  };

  const removeContentBlur = () => {
    document.body.classList.remove("content-blur");
  };

  return (
    <>
      <nav className="header-nav"></nav>
      <div className={`nav-buttons-mobile ${isNavOpen ? "" : "hidden-nav"}`}>
        <Link to="/" className="nav-btn" onClick={closeNav}>
          Home
        </Link>
        <Link to="/about" className="nav-btn" onClick={closeNav}>
          About
        </Link>
        <Link to="/resume" className="nav-btn" onClick={closeNav}>
          Resume
        </Link>
        <Link to="/services" className="nav-btn" onClick={closeNav}>
          Works
        </Link>
        <Link to="/skills" className="nav-btn" onClick={closeNav}>
          Skills
        </Link>
        <Link to="/projects" className="nav-btn" onClick={closeNav}>
          Projects
        </Link>
        <Link to="/contact" className="nav-btn" onClick={closeNav}>
          Contact
        </Link>
      </div>
      <div className="hamburger" onClick={toggleNav}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>
    </>
  );
};

export default Mobinav;
