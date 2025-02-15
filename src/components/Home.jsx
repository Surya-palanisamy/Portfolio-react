import React, { useEffect } from "react";
import { initCarousel, initSmoothScrolling } from "../utils/customScripts";

export default function Home() {
  useEffect(() => {
    initCarousel();
    initSmoothScrolling();
  }, []);

  return (
    <section id="home-section" className="hero">
      <div className="home-slider owl-carousel">
        <div className="slider-item">
          <div className="overlay"></div>
          <div className="container">
            <div className="row d-flex no-gutters slider-text align-items-center justify-content-center">
              <div className="one-forth text-center mt-4 mb-4">
                <div className="text p-md-5">
                  <span className="subheading">Hello!</span>
                  <h1 className="mb-4 mt-3">
                    I'm{" "}
                    <span style={{ color: "gold", fontWeight: "bold" }}>
                      Surya
                    </span>
                    <br />A freelance{" "}
                    <span
                      style={{
                        color: "gold",
                        fontWeight: "bold",
                        fontSize: "xx-large",
                      }}
                    >
                      web developer
                    </span>
                  </h1>
                  <p className="d-flex justify-content-center">
                    <a
                      href="mailto:sit23it161@sairamtap.edu.in"
                      className="btn btn-primary py-3 px-4 mx-2"
                    >
                      Hire me
                    </a>
                    <a
                      href="#projects-section"
                      className="btn btn-white btn-outline-white py-3 px-4 mx-2"
                    >
                      My works
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
