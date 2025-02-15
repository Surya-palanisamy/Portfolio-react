import React, { useEffect } from "react";
import { initContentWayPoint } from "../utils/customScripts";

export default function Services() {
  useEffect(() => {
    initContentWayPoint();
    window.dispatchEvent(new Event("scroll"));
  }, []);

  return (
    <section className="ftco-section" id="services-section">
      <div className="container">
        <div className="row justify-content-center py-5 mt-5">
          <div className="col-md-12 heading-section text-center ftco-animate">
            <h2 className="mb-4">Works</h2>
            <p>
              Crafting engaging, scalable web applications—explore my journey
              with projects built using the MERN stack and beyond.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 text-center d-flex ftco-animate">
            <a href="#" className="services-1">
              <span className="icon">
                <i className="flaticon-analysis"></i>
              </span>
              <div className="desc">
                <h3 className="mb-5">Web Design</h3>
              </div>
            </a>
          </div>
          <div className="col-md-4 text-center d-flex ftco-animate">
            <a href="#" className="services-1">
              <span className="icon">
                <i className="flaticon-ideas"></i>
              </span>
              <div className="desc">
                <h3 className="mb-5">Web Developer</h3>
              </div>
            </a>
          </div>
          <div className="col-md-4 text-center d-flex ftco-animate">
            <a href="#" className="services-1">
              <span className="icon">
                <i className="flaticon-analysis"></i>
              </span>
              <div className="desc">
                <h3 className="mb-5">App Developing</h3>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
