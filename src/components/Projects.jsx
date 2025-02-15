import React, { useEffect } from "react";
import foodOrder from "../assets/food-order.jpg";
import codexcollab from "../assets/codexcollab.png";
import netflix from "../assets/Netflix clone.jpg";
import forms from "../assets/forms.jpg";
import wings from "../assets/Wings.jpg";
import messenger from "../assets/messenger.jpg";
import { initContentWayPoint, initMagnificPopup } from "../utils/customScripts";

const ProjectCard = ({ title, description, imgUrl, liveLink, codeLink }) => {
    useEffect(() => {
      initContentWayPoint();
      window.dispatchEvent(new Event("scroll"));
    }, []);
  return (
    <div className="col-md-6">
      <div className="project-card ftco-animate">
        <div
          className="project-bg"
          style={{ backgroundImage: `url(${imgUrl})` }}
        >
          <div className="project-overlay">
            <div className="project-links">
              <a href={liveLink} className="btn btn-light">
                <i className="bi bi-globe"></i> Live Site
              </a>
              <a href={codeLink} className="btn btn-outline-light">
                <i className="bi bi-code-slash"></i> View Code
              </a>
            </div>
          </div>
        </div>
        <div className="text text-center">
          <h3 className="h5">{title}</h3>
          <span>{description}</span>
        </div>
      </div>
    </div>
  );
};

export default function Projects() {
  useEffect(() => {
    initContentWayPoint();
    initMagnificPopup();
  }, []);

  const projects = [
    {
      title: "codexcollab",
      description: "MERN Fullstack",
      imgUrl: codexcollab,
      liveLink: "https://code.suryapalanisamy.live",
      codeLink: "https://github.com/Surya-palanisamy/codexcollab",
    },
    {
      title: "Netflix Clone",
      description: "Frontend",
      imgUrl: netflix,
      liveLink: "https://netflix-react-2024.web.app/",
      codeLink: "https://github.com/Surya-palanisamy/Netflix-clone",
    },
    {
      title: "Food Order",
      description: "Frontend with Tailwind CSS",
      imgUrl: foodOrder,
      liveLink: "https://surya-palanisamy.github.io/tailwind-foodOrder/",
      codeLink: "https://github.com/Surya-palanisamy/tailwind-foodOrder",
    },
    {
      title: "Women Safety",
      description: "Frontend",
      imgUrl: wings,
      liveLink: "https://surya-palanisamy.github.io/WINGS/",
      codeLink: "https://github.com/Surya-palanisamy/WINGS",
    },
    {
      title: "React Forms",
      description: "Backend Project",
      imgUrl: forms,
      liveLink: "https://form-backend-jnbe.vercel.app/",
      codeLink: "https://github.com/Surya-palanisamy/form-backend",
    },
    {
      title: "messenger with socket-io",
      description: "Backend Project",
      imgUrl: messenger,
      liveLink: "https://chat.suryapalanisamy.live/",
      codeLink: "https://github.com/Surya-palanisamy/Chat-App-Socket.io",
    },
  ];

  return (
    <section className="projects-section py-5" id="projects-section">
      <div className="container">
        <div className="row justify-content-center pb-5">
          <div className="col-md-12 text-center">
            <h2 className="mb-4">Our Projects</h2>
            <p className="lead">
              Passionate about building impactful web experiences—exploring
              opportunities to grow and contribute in meaningful projects.
            </p>
          </div>
        </div>
        <div className="row">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
