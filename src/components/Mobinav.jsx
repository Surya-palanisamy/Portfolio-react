import React, { useState, useEffect } from "react";

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
        <a href="#home-section" className="nav-btn" onClick={closeNav}>
          Home
        </a>
        <a href="#about-section" className="nav-btn" onClick={closeNav}>
          About
        </a>
        <a href="#resume-section" className="nav-btn" onClick={closeNav}>
          Resume
        </a>
        <a href="#services-section" className="nav-btn" onClick={closeNav}>
          Works
        </a>
        <a href="#skills-section" className="nav-btn" onClick={closeNav}>
          Skills
        </a>
        <a href="#projects-section" className="nav-btn" onClick={closeNav}>
          Projects
        </a>
        <a href="#contact-section" className="nav-btn" onClick={closeNav}>
          Contact
        </a>
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
