import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { initCarousel } from "../utils/customScripts";

export default function Home() {
  useEffect(() => {
    initCarousel();
  }, []);

  return (
    <section
      id="home-section"
      className="hero"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div className="home-slider owl-carousel">
        <div className="slider-item">
          <div className="overlay"></div>
          <div className="container">
            <div className="row d-flex no-gutters slider-text align-items-center justify-content-center">
              <div className="one-forth d-flex flex-column align-items-center justify-content-center ftco-animate text-center mt-4 mb-4">
                <div className="text text-center p-md-5">
                  <span className="subheading">Hello!</span>
                  <h1 className="mb-4 mt-3">
                    I'm a{" "}
                    <span style={{ color: "gold", fontWeight: 1000 }}>
                      Surya
                    </span>
                    <br />
                    <span style={{ marginBottom: "20px" }}>
                      A freelance{" "}
                      <span
                        style={{
                          color: "gold",
                          fontWeight: 1000,
                          fontSize: "xx-large",
                        }}
                      >
                        web developer
                      </span>
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
