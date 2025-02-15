import React, { useEffect } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Mobinav from "./components/Mobinav";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Services from "./components/Services";
import Skills from "./components/Skills";
import "./css/ajax-loader.gif";
import "./css/animate.css";
import "./css/icomoon.css";
import "./css/mobile-nav.css";
import "./css/style.css";

function App() {
  useEffect(() => {
    const handleParallax = () => {
      const parallaxElements = document.querySelectorAll(
        "[data-stellar-background-ratio]",
      );
      parallaxElements.forEach((element) => {
        const ratio = parseFloat(
          element.getAttribute("data-stellar-background-ratio"),
        );
        const offset = window.scrollY * ratio;
        element.style.backgroundPosition = `center ${offset}px`;
      });
    };

    window.addEventListener("scroll", handleParallax);

    const setFullHeight = () => {
      const fullHeightElements = document.querySelectorAll(".js-fullheight");
      fullHeightElements.forEach((element) => {
        element.style.height = `${window.innerHeight}px`;
      });
    };

    window.addEventListener("resize", setFullHeight);
    setFullHeight();

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleParallax);
      window.removeEventListener("resize", setFullHeight);
    };
  }, []);

  return (
    <Router>
      <div className="App">
        <Mobinav />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/services" element={<Services />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
