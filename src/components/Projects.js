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
              <img src={require("../images/SS.png")} />
              <div className="layer">
                <h3>SavorySmart (Aug 2023 - Oct 2023)</h3>
                <p>
                  Crafting a versatile recipe website with React, Firebase, and
                  APIs, offering an experience with features like recipe
                  display, advanced search, ingredient info, nutritional
                  analysis, and customizable meals.
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
              <img src={require("../images/HH.png")} />
              <div className="layer">
                <h3>HandyHelp(Dec 2023 - Present)</h3>
                <p>
                  Built a mobile app with React Native and Firebase to connect
                  blue-collar workers for job opportunities within Pakistan. The
                  business model is to build a market place to match freelance
                  labor with local demand. The model is similar to TaskRabbit
                  (US) or Airtasker (AU). It is a personal project, work in
                  progress as I started in 2023 driven by macro economic
                  situation in Pakistan and current market gap.
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
                  Created an AI chatbot (draft version to create a personal
                  assistant) using Python, handling tasks like websites and app
                  opening, Instagram login, engaging in conversations, answering
                  questions and providing real-time weather and news updates
                  through API integration.
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
