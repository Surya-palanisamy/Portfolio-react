import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="ftco-footer ftco-section">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">About</h2>
              <p>
                Web developer | B.Tech IT Student (2nd year) at Sai Ram
                Institute of Technology | As a technology enthusiast, I am
                always eager to expand my skill set and stay updated with the
                latest advancements in web development.
              </p>
              <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                <li className="ftco-animate">
                  <a href="#">
                    <span className="icon-twitter"></span>
                  </a>
                </li>
                <li className="ftco-animate">
                  <a href="#">
                    <span className="icon-facebook"></span>
                  </a>
                </li>
                <li className="ftco-animate">
                  <a href="https://www.instagram.com/surya_palanisamy28">
                    <span className="icon-instagram"></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md">
            <div className="ftco-footer-widget mb-4 ml-md-4">
              <h2 className="ftco-heading-2">Links</h2>
              <ul className="list-unstyled">
                <li>
                  <a href="#home-section">
                    <span className="icon-long-arrow-right mr-2"></span>Home
                  </a>
                </li>
                <li>
                  <a href="#about-section">
                    <span className="icon-long-arrow-right mr-2"></span>About
                  </a>
                </li>
                <li>
                  <a href="#services-section">
                    <span className="icon-long-arrow-right mr-2"></span>Works
                  </a>
                </li>
                <li>
                  <a href="#projects-section">
                    <span className="icon-long-arrow-right mr-2"></span>Projects
                  </a>
                </li>
                <li>
                  <a href="#contact-section">
                    <span className="icon-long-arrow-right mr-2"></span>Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Works</h2>
              <ul className="list-unstyled">
                <li>
                  <a href="#">
                    <span className="icon-long-arrow-right mr-2"></span>Web
                    Design
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon-long-arrow-right mr-2"></span>Web
                    Development
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon-long-arrow-right mr-2"></span>DevOps
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon-long-arrow-right mr-2"></span>App
                    Design
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon-long-arrow-right mr-2"></span>App
                    Development
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Have a Question?</h2>
              <div className="block-23 mb-3">
                <ul>
                  <li>
                    <span className="icon icon-map-marker"></span>
                    <span className="text">Chennai, Tamil Nadu, IN</span>
                  </li>
                  <li>
                    <a href="tel:7418036039">
                      <span className="icon icon-phone"></span>
                      <span className="text">+91 7418036039</span>
                    </a>
                  </li>
                  <li>
                    <a href="mailto:sit23it161@sairamtap.edu.in">
                      <span className="icon icon-envelope"></span>
                      <span className="text">sit23it161@sairamtap.edu.in</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 text-center">
            <p>
              Copyright &copy; {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
