import React, { useState, useEffect } from "react";
import "./About.css";
import { CSSTransition } from "react-transition-group";
import { useInView } from "react-intersection-observer";

export default function About() {
  const [selectedButton, setSelectedButton] = useState("");
  const [displayedInfo, setDisplayedInfo] = useState("");
  const [imageVisible, setImageVisible] = useState(false);
  
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [nodeRef] = useState(() => React.createRef());
  const [infoRef] = useState(() => React.createRef());
  
  useEffect(() => {
    if (selectedButton === "Interests") {
      setDisplayedInfo(
        <div className="info-content">
          <h3 className="info-title">My Interests</h3>
          <div className="info-item">
            <div className="info-icon">🎓</div>
            <div className="info-text">
              <strong>Computer Science Course Union:</strong> Created a four-year roadmap to
              recruit diverse computer science students from emerging markets at
              UBC Okanagan and to provide them the tools to succeed in
              undergraduate admission applications.
            </div>
          </div>
          
          <div className="info-item">
            <div className="info-icon">🤖</div>
            <div className="info-text">
              <strong>Robotics:</strong> Vice President of Robotics Society, Karachi Grammar
              School. I negotiated sponsorship with Kraft foods and Unilever to
              organize two seminars and recruit three guest speakers (including
              the founder of a robotic unicorn in UAE) in return for their
              advertisements in virtual events.
            </div>
          </div>
        </div>
      );
    } else if (selectedButton === "Hobbies") {
      setDisplayedInfo(
        <div className="info-content">
          <h3 className="info-title">My Hobbies</h3>
          <div className="info-item">
            <div className="info-icon">🍳</div>
            <div className="info-text">
              <strong>Cooking:</strong> Chef at heart who has a dream to open a restaurant one day.
            </div>
          </div>
          
          <div className="info-item">
            <div className="info-icon">📚</div>
            <div className="info-text">
              <strong>Community Work:</strong> Peer tutoring at local community center and volunteer work.
              Assisted children suffering with down syndrome in reading,
              speaking and playing sports at Ujala School for special children.
            </div>
          </div>
          
          <div className="info-item">
            <div className="info-icon">🏊‍♂️</div>
            <div className="info-text">
              <strong>Swimming:</strong> Regular participant in Karachi Club Swimming competitions.
            </div>
          </div>
          
          <div className="info-item">
            <div className="info-icon">⚽</div>
            <div className="info-text">
              <strong>Football:</strong> Part of top soccer league in Karachi (Karachi United). 
              Went for training with top players for 12 months (6 hours / week).
            </div>
          </div>
          
          <div className="info-item">
            <div className="info-icon">💪</div>
            <div className="info-text">
              <strong>Fitness & Outdoors:</strong> Love going to the gym and hiking to stay active and explore nature.
            </div>
          </div>
        </div>
      );
    } else {
      setDisplayedInfo("");
    }
  }, [selectedButton]);
  
  useEffect(() => {
    if (inView) {
      setImageVisible(true);
    }
  }, [inView]);
  
  const handleButtonClick = (buttonName) => {
    if (selectedButton === buttonName) {
      setSelectedButton("");
    } else {
      setSelectedButton(buttonName);
    }
  };
  
  return (
    <section id="about" className="section">
      <div className="container about-container">
        <h1 className="section-title">About Me</h1>
        <div className="about-content" ref={ref}>
          <div className="about-image-container animate-in">
            <CSSTransition
              in={true}
              timeout={1000}
              classNames="about-image"
              nodeRef={nodeRef}
              unmountOnExit
            >
              <div className="about-image-wrapper" ref={nodeRef}>
                <img
                  className="about-image"
                  src={require("../images/profile.jpeg")}
                  alt="Me"
                />
                <div className="about-image-overlay"></div>
              </div>
            </CSSTransition>
          </div>
          <div className="about-text-container animate-in">
            <div className="about-description">
              <p>
                As a computer science major at UBC, I have strong programming
                skills in Java and Python, along with a keen interest in Machine
                Learning, App and Web Development.
              </p>
              <p>
                I am passionate about leveraging AI technologies to enhance the consumer experience.
                Inspired by Generative AI, I am eager to apply my expertise in a
                software engineering role.
              </p>
            </div>
            <div className="about-buttons">
              <button
                className={`about-tab-button ${selectedButton === "Interests" ? "active" : ""}`}
                onClick={() => handleButtonClick("Interests")}
              >
                <span className="button-icon">🌟</span>
                Interests
              </button>
              <button
                className={`about-tab-button ${selectedButton === "Hobbies" ? "active" : ""}`}
                onClick={() => handleButtonClick("Hobbies")}
              >
                <span className="button-icon">🎯</span>
                Hobbies
              </button>
            </div>
            <CSSTransition
              in={selectedButton !== ""}
              timeout={500}
              classNames="about-info"
              nodeRef={infoRef}
              unmountOnExit
            >
              <div className="about-info-container" ref={infoRef}>
                {displayedInfo}
              </div>
            </CSSTransition>
          </div>
        </div>
      </div>
      {/* Decorative elements */}
      <div className="shape shape-1"></div>
      <div className="shape shape-2"></div>
    </section>
  );
}
