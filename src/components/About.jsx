import React, { useEffect } from "react";
import { initCounter } from "../utils/customScripts";

export default function About() {
  useEffect(() => {
    initCounter();
  }, []);

  return (
    <section
      className="ftco-about ftco-no-pb text-center"
      id="about-section"
      data-aos="fade-up"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-8">
            <div className="heading-section ftco-animate">
              <h2 className="mb-4" data-aos="fade-up" data-aos-delay="100">
                About Me
              </h2>
              <p data-aos="fade-up" data-aos-delay="200">
                Web developer | B.Tech IT Student (2nd year) at Sai ram
                Institute of Technology | As a technology enthusiast, I am
                always eager to expand my skill set and stay updated with the
                latest advancements in web development. The MERN stack is known
                for its powerful capabilities in building dynamic, robust, and
                scalable web applications, and I can't wait to dive deep into
                it.
              </p>
              <ul className="about-info mt-4">
                <li
                  className="d-flex justify-content-center"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  Name: SURYA
                </li>
                <li
                  className="d-flex justify-content-center"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  Date of birth: 11/2005
                </li>
                <li
                  className="d-flex justify-content-center"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  Address: Chennai, Tamilnadu, India
                </li>
                <li
                  className="d-flex justify-content-center"
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  Zip code: 600127
                </li>
                <li
                  className="d-flex justify-content-center"
                  data-aos="fade-up"
                  data-aos-delay="700"
                >
                  Email: sit23it161@sairamtap.edu.in
                </li>
                <li
                  className="d-flex justify-content-center"
                  data-aos="fade-up"
                  data-aos-delay="800"
                >
                  Phone: +91 7418036039
                </li>
              </ul>
            </div>
            <div
              className="counter-wrap ftco-animate mt-md-3"
              data-aos="fade-up"
              data-aos-delay="900"
            >
              <div className="text">
                <p className="mb-4">
                  <span className="number" data-number="25">
                    0
                  </span>
                  <span> Project complete</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
