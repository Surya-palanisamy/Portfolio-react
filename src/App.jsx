import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Mobinav from "./components/Mobinav";
import Home from './components/Home';
import About from './components/About';
import Resume from './components/Resume';
import Services from './components/Services';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loader from './components/Loader';
import "./css/style.css";
import "./css/animate.css";
import "./css/ajax-loader.gif";
import "./css/icomoon.css";
import "./css/mobile-nav.css";

function App() {
  useEffect(() => {
    const handleParallax = () => {
      const parallaxElements = document.querySelectorAll(
        "[data-stellar-background-ratio]"
      );
      parallaxElements.forEach((element) => {
        const ratio = parseFloat(
          element.getAttribute("data-stellar-background-ratio")
        );
        const offset = window.scrollY * ratio;
        element.style.backgroundPosition = `center ${offset}px`;
      });
    };

    window.addEventListener("scroll", handleParallax);

    // Set full height
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
        <Loader />
        <Mobinav/>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <About />
                <Resume />
                <Services />
                <Skills />
                <Projects />
                <Contact />
              </>
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

