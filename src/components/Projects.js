import React from "react";
import "./Projects.css";
import "@fortawesome/fontawesome-free/css/all.css";

export default function Projects() {
  return (
    <div>
      <div id="portfolio">
        <div className="container">
          <h1 className="sub-title">Personal Projects</h1>
          <div className="work-list">
            <div className="work">
              <img src={require("../images/thumbnail.png")} />
              <div className="layer">
                <h3>Personal Portfolio Website (June 2023)</h3>
                <p>
                  Crafted a dynamic personal portfolio website using React.js,
                  HTML, and CSS to highlight my skills, experiences, and
                  projects. Showcasing a user-friendly design with dark and
                  light mode for an engaging experience.
                </p>
                <a
                  href="https://github.com/abdullahmunir24/my-portfolio"
                  target="blank"
                >
                  <i className="fas fa-external-link-alt"></i>
                </a>
              </div>
            </div>

            <div className="work">
              <img src={require("../images/recipe.jpg")} />
              <div className="layer">
                <h3>SavorySmart (Jul 2023 - Present)</h3>
                <p>
                  Crafting a versatile recipe website with React, Firebase, and
                  APIs, offering a delightful experience with features like
                  recipe display, advanced search, ingredient info, nutritional
                  analysis, customizable meal plans, and grocery lists for
                  effortless meal preparation. Empowering users with a
                  comprehensive culinary resource, combining technology and
                  creativity to enhance their cooking journey.
                </p>
                <a
                  href="https://github.com/abdullahmunir24/FoodWebsite"
                  target="blank"
                >
                  <i className="fas fa-external-link-alt"></i>
                </a>
              </div>
            </div>

            <div className="work">
              <img src={require("../images/app.jpg")} />
              <div className="layer">
                <h3>HandyHelp(July 2023 - Present)</h3>
                <p>
                  Developing a cross-platform mobile app with React Native and
                  Firebase for connecting consumers with maids to target
                  blue-collar jobs in Pakistan. Streamlining the process of
                  hiring maids, ensuring a user-friendly experience, and
                  leveraging technology to bridge the gap between service
                  providers and consumers.
                </p>
                <a
                  href="https://github.com/abdullahmunir24/final-app"
                  target="blank"
                >
                  <i className="fas fa-external-link-alt"></i>
                </a>
              </div>
            </div>

            <div className="work">
              <img src={require("../images/chatbot.jpeg")} />
              <div className="layer">
                <h3>Personal Chatbot(July 2023)</h3>
                <p>
                  Created a dynamic AI chatbot using Python, seamlessly handling
                  tasks like window and app opening, Instagram login, and
                  real-time weather and news updates through advanced API
                  integration, showcasing innovative automation and data-driven
                  responses.
                </p>
                <a
                  href="https://github.com/abdullahmunir24/Personal-Chatbot"
                  target="blank"
                >
                  <i className="fas fa-external-link-alt"></i>
                </a>
              </div>
            </div>

            <div className="work">
              <img src={require("../images/Data-Analytics.png")} />
              <div className="layer">
                <h3>
                  Health Insights USA: Data Analysis and Visualization(Mar 2023
                  - Apr 2023)
                </h3>
                <p>
                  Collaborated with two other team members in a group project,
                  utilizing pandas, seaborn, matplotlib, and tableau to analyze
                  extensive health cost data in the United States such as the
                  impact of smoking behaviour on medical costs and the
                  relationship between BMI, region, and gender in the USA on
                  health costs.
                </p>
                <a
                  href="https://github.com/ubco-W2022T2-data301/project-group-group40"
                  target="blank"
                >
                  <i className="fas fa-external-link-alt"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
