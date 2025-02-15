import React, { useEffect } from "react";
import { initContentWayPoint } from "../utils/customScripts";

export default function Resume() {
  useEffect(() => {
    initContentWayPoint();
    window.dispatchEvent(new Event("scroll"));
  }, []);

  return (
    <section className="ftco-section ftco-no-pb" id="resume-section">
      <div className="container">
        <div className="row justify-content-center pb-5">
          <div className="col-lg-8 col-md-10 text-center heading-section ftco-animate">
            <h2 className="mb-4">Resume</h2>
            <p>
              Explore my journey and accomplishments in web development. With a
              strong foundation in the MERN stack and a commitment to continuous
              learning, I am ready to tackle new challenges. Let's connect and
              discuss how I can contribute to your team!
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="resume-wrap ftco-animate mb-4">
              <span className="date">2013-2017</span>
              <h2>3rd-7th Standard</h2>
              <span className="position">CMS</span>
            </div>
            <div className="resume-wrap ftco-animate mb-4">
              <span className="date">2017-2022</span>
              <h2>8th-11th Standard</h2>
              <span className="position">VVMHSS</span>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="resume-wrap ftco-animate mb-4">
              <span className="date">2022-2023</span>
              <h2>12th Standard</h2>
              <span className="position">BKMHSS</span>
            </div>
            <div className="resume-wrap ftco-animate mb-4">
              <span className="date">2023-2027</span>
              <h2>Bachelor of Technology</h2>
              <span className="position">
                Sri Sai Ram Institute Of Technology
              </span>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mt-5">
          <div className="col-lg-4 col-md-6 text-center">
            <p>
              <a href="#" className="btn btn-primary py-3 px-4">
                Download Resume
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
