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
              <img src="../images/thumbnail.png" alt="" />
              <div className="layer">
                <h3>Perosnal Portfolio</h3>
                <p>Created it using React.js</p>
                <a href="https://github.com/abdullahmunir24/my-portfolio">
                  <i className="fas fa-external-link-alt"></i>
                </a>
              </div>
            </div>
            <div className="work">
              <img src="images/work-2.png" alt="" />
              <div className="layer">
                <h3>AI chatbot</h3>
                <p>Build it using pyhton and the AI API key</p>
                <a href="#">
                  <i className="fas fa-external-link-alt"></i>
                </a>
              </div>
            </div>
            <div className="work">
              <img src="images/work-3.png" alt="" />
              <div className="layer">
                <h3>Recipe Website</h3>
                <p>Website tracks your meals and and gives ypu recipes as Well. MAde using React.js </p>
                <a href="#">
                  <i className="fas fa-external-link-alt"></i>
                </a>
                
              </div>
            </div>
            <div className="work">
              <img src="images/work-3.png" alt="" />
              <div className="layer">
                <h3>IOS App</h3>
                <p>APp to sove the issue of not finding fesible maids in PAkistan. MAde using Swift and Firebase</p>
                <a href="#">
                  <i className="fas fa-external-link-alt"></i>
                </a>
                
              </div>
            </div>
            <div className="work">
              <img src="images/work-3.png" alt="" />
              <div className="layer">
                <h3>Data Analysis and Visualiation</h3>
                <p>Analysed Data about Health costs in the USA using pandas, seaborn, matplotlib and tableau</p>
                <a href="#">
                  <i className="fas fa-external-link-alt"></i>
                </a>
                
              </div>
            </div>
            <div className="work">
              <img src="images/work-3.png" alt="" />
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
