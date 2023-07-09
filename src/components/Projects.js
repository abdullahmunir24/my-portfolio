import React from 'react';
import './Projects.css';
import '@fortawesome/fontawesome-free/css/all.css';


export default function Projects() {
  return (
    <div>
      <div id="portfolio">
        <div className="container">
          <h1 className="sub-title">Personal Projects</h1>
          <div className="work-list">
            <div className="work">
            <img src={require("../images/thumbnail.png")}/>
              <div className="layer">
                <h3>Perosnal Portfolio</h3>
                <p>Created it using React.js</p>
                <a href="https://github.com/abdullahmunir24/my-portfolio" target='blank'>
                  <i className="fas fa-external-link-alt"></i>
                </a>
              </div>
            </div>
            <div className="work">
            <img src={require("../images/chatbot.jpeg")}/>
              <div className="layer">
                <h3>AI chatbot</h3>
                <p>Build it using pyhton and the AI API key. It opens windows,apps and can even log in to my instagram. Can tell the weather and news using their API keys.</p>
                <a href="https://github.com/abdullahmunir24/AI-Chatbot" target='blank'>
                  <i className="fas fa-external-link-alt"></i>
                </a>
              </div>
            </div>
            <div className="work">
            <img src={require("../images/recipe.jpg")}/>
              <div className="layer">
                <h3>Recipe Website</h3>
                <p>Website tracks your meals and and gives ypu recipes as Well. Made using React.js </p>
                <a href="#">
                  <i className="fas fa-external-link-alt"></i>
                </a>
                
              </div>
            </div>
            <div className="work">
            <img src={require("../images/app.jpg")}/>
              <div className="layer">
                <h3>IOS App</h3>
                <p>IOS APP to sove the issue of not finding fesible blue collar jobs such as maids in Pakistan. Made using Swift and Firebase</p>
                <a href="#">
                  <i className="fas fa-external-link-alt"></i>
                </a>
                
              </div>
            </div>
            <div className="work">
            <img src={require("../images/Data-Analytics.png")}/>
              <div className="layer">
                <h3>Data Analysis and Visualiation</h3>
                <p>Analysed Data about Health costs in the USA using pandas, seaborn, matplotlib and tableau. It was a group project for my course in university(DATA301)</p>
                <a href="https://github.com/ubco-W2022T2-data301/project-group-group40" target='blank'>
                  <i className="fas fa-external-link-alt"></i>
                </a>
                
              </div>
            </div>
            <div className="work">
            <img src={require("../images/game.jpg")}/>
              <div className="layer">
                <h3>Brick Breaker Game</h3>
                <p>Made a brick breaker game using Processing</p>
                <a href="#">
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
