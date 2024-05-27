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
                  Crafted a recipe website using React.js with features like
                  recipe search, nearby restaurant search, ingredient info,
                  nutritional analysis, and meal plan generation using APIs.
                  Deployed Firebase authentication for secure sign-ups/logins,
                  enhancing user experience and access to meal planning
                  features.
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
              <img src={require("../images/TidyLink.png")} />
              <div className="layer">
                <h3>TidyLink(Dec 2023 - April 2024)</h3>
                <p>
                  Built a mobile app usign React Native and Expo to connect
                  blue-collar workers with job opportunities within Pakistan,
                  targeting a market of 8.5 Million domestic workers.
                  Implemented Firebase Authentication for secure sign-ups and
                  profile creation, with data stored in Firestore. Enhanced the
                  app with area-based profile viewing and an integrated chat
                  system, projected to increase job matching efficiency by 30%.
                </p>
                <a
                  href="https://github.com/abdullahmunir24/TidyLink"
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
                  Programmed an AI chatbot (draft version of a personal
                  assistant) in Python to open websites and apps, log into
                  Instagram, engage in conversations, answer questions, and
                  provide real-time weather and news updates via API
                  integration.
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
                  Collaborated with two other team members, to analyze health
                  cost data in the USA using pandas, seaborn, matplotlib, and
                  tableau, including the impact of smoking on medical costs and
                  the relationship between BMI, region, and gender on health
                  costs.
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
