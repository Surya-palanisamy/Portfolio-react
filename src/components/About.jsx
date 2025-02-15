import React, { useEffect } from "react";
import { initCounter } from "../utils/customScripts";

export default function About() {
  useEffect(() => {
    initCounter(); // Ensure counter runs on mount

    // Force scroll event to trigger animations immediately
    window.dispatchEvent(new Event("scroll"));
  }, []);

  return (
    <section id="about-section" className="ftco-about text-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-8">
            <div className="heading-section">
              <h2 className="mb-4">About Me</h2>
              <p>
                Web developer | B.Tech IT Student (2nd year) at Sai Ram
                Institute of Technology. Passionate about building dynamic and
                scalable web applications using the MERN stack.
              </p>
              <ul className="about-info mt-4">
                <li>Name: SURYA</li>
                <li>Date of Birth: 11/2005</li>
                <li>Address: Chennai, Tamilnadu, India</li>
                <li>Email: sit23it161@sairamtap.edu.in</li>
                <li>Phone: +91 7418036039</li>
              </ul>
            </div>
            <div className="counter-wrap mt-md-3">
              <div className="text">
                <p className="mb-4">
                  <span className="number" data-number="25">
                    0
                  </span>{" "}
                  Project completed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
