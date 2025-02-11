import React, { useEffect } from "react";
import { initContentWayPoint } from "../utils/customScripts";

export default function Skills() {
  useEffect(() => {
    initContentWayPoint();
  }, []);

  return (
    <section className="ftco-section" id="skills-section">
      <div className="container">
        <div className="row justify-content-center pb-5">
          <div className="col-md-12 heading-section text-center ftco-animate">
            <h2 className="mb-4">My Skills</h2>
            <div className="profile-section">
              <h2 className="profile-heading">Hi there 👋 It's me Surya</h2>
              <p className="profile-description">
                🌱 I'm currently learning Web development
              </p>
              <p className="profile-description">
                👯 I'm looking to collaborate on Web development
              </p>
              <p className="profile-contact">📫 How to reach me:</p>
              <div className="social-links">
                <a
                  href="https://www.linkedin.com/in/surya-palanisamy-/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"
                    alt="LinkedIn"
                    className="social-badge"
                  />
                </a>
                <a
                  href="https://www.instagram.com/surya_palanisamy28?igsh=eG1nbTN6eHAwazR2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://img.shields.io/badge/Instagram-0077B5?style=for-the-badge&logo=instagram&logoColor=pink"
                    alt="Instagram"
                    className="social-badge"
                  />
                </a>
              </div>
              <div className="tech-section">
                <h2 className="tech-heading">Tech I Know</h2>
                <div className="tech-icons">
                  <img
                    src="https://img.icons8.com/color/50/000000/python.png"
                    alt="Python"
                    className="tech-icon"
                  />
                  <img
                    src="https://img.icons8.com/color/50/java-coffee-cup-logo--v1.png"
                    alt="Java"
                    className="tech-icon"
                  />
                  <img
                    src="https://img.icons8.com/color/50/000000/c-programming.png"
                    alt="C Programming"
                    className="tech-icon"
                  />
                  <img
                    src="https://img.icons8.com/color/50/c-plus-plus-logo.png"
                    alt="C++"
                    className="tech-icon"
                  />
                  <img
                    src="https://img.icons8.com/color/50/000000/html-5.png"
                    alt="HTML5"
                    className="tech-icon"
                  />
                  <img
                    src="https://img.icons8.com/color/50/css3.png"
                    alt="CSS3"
                    className="tech-icon"
                  />
                  <img
                    src="https://img.icons8.com/color/50/javascript.png"
                    alt="JavaScript"
                    className="tech-icon"
                  />
                  <img
                    src="https://img.icons8.com/color/48/000000/react-native.png"
                    alt="React"
                    className="tech-icon"
                  />
                  <img
                    src="https://img.icons8.com/color/50/tailwind_css.png"
                    alt="Tailwind CSS"
                    className="tech-icon"
                  />
                  <img
                    src="https://img.icons8.com/color/50/000000/nodejs.png"
                    alt="Node.js"
                    className="tech-icon"
                  />
                  <img
                    src="https://img.icons8.com/nolan/50/express-js.png"
                    alt="Express.js"
                    className="tech-icon"
                  />
                  <img
                    src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/32/000000/external-postman-is-the-only-complete-api-development-environment-logo-color-tal-revivo.png"
                    alt="Postman"
                    className="tech-icon"
                    width="46"
                    height="46"
                  />
                  <img
                    src="https://img.icons8.com/color/50/mongo-db.png"
                    alt="MongoDB"
                    className="tech-icon"
                  />
                  <img
                    src="https://img.icons8.com/color/48/000000/google-firebase-console.png"
                    alt="Firebase"
                    className="tech-icon"
                  />
                  <img
                    src="https://img.icons8.com/nolan/50/markdown.png"
                    alt="Markdown"
                    className="tech-icon"
                  />
                  <img
                    src="https://img.icons8.com/color/96/docker.png"
                    alt="Docker"
                    className="tech-icon"
                  />
                  <img
                    src="https://img.icons8.com/color/50/000000/git.png"
                    alt="Git"
                    className="tech-icon"
                  />
                </div>
              </div>
              <div className="tools-section">
                <h2 className="tools-heading">IDE and Tools I Use</h2>
                <div className="tools-icons">
                  <img
                    src="https://img.icons8.com/color/50/000000/visual-studio-code-2019.png"
                    alt="VS Code"
                    className="tools-icon"
                  />
                  <img
                    src="https://img.icons8.com/color/50/figma--v1.png"
                    alt="Figma"
                    className="tools-icon"
                  />
                  <img
                    src="https://img.icons8.com/fluency/48/canva.png"
                    alt="Canva"
                    className="tools-icon"
                  />
                </div>
              </div>
              <div className="os-section">
                <h2 className="os-heading">OS I Use</h2>
                <div className="os-icons">
                  <img
                    src="https://img.icons8.com/fluency/50/windows-11.png"
                    alt="Windows"
                    className="os-icon"
                  />
                  <img
                    src="https://img.icons8.com/color/50/linux--v1.png"
                    alt="Linux"
                    className="os-icon"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
