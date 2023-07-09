import React, { useState, useEffect, useRef } from 'react';
import './About.css';
import { CSSTransition } from 'react-transition-group';
import { useInView } from 'react-intersection-observer';

export default function About() {
  const [selectedButton, setSelectedButton] = useState('');
  const [displayedInfo, setDisplayedInfo] = useState('');
  const [imageVisible, setImageVisible] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.2, 
  });
  const imageRef = useRef(null);

  useEffect(() => {
    if (selectedButton === 'Interests') {
      setDisplayedInfo(
        <div>
          <p>Computer Science Course Union: created a four-year roadmap to recruit diverse computer science students from emerging
            markets at UBC Okanagan and to provide them the tools to succeed in undergraduate admission applications.
            <div>Robotics: Vice President of Robotics Society, Karachi Grammar School. I negotiated sponsorship with Kraft foods and
              Unilever to organize two seminars and recruit three guest speakers (including the founder of a robotic unicorn in UAE) in
              return for their advertisements in virtual events.</div>
          </p>
        </div>
      );
    } else if (selectedButton === 'Hobbies') {
      setDisplayedInfo(
        <div>
          <p>Chef at heart who has a dream to open a restaurant one day.
            <div className="custom-each-description">Peer tutoring at local community center and volunteer work.</div>
            <div>Assisted children suffering with down syndrome in reading, speaking and playing sports at Ujala School for special children</div>
            <div>Love Swimming: Regular participant in Karachi Club Swimming competitions.</div>
            <div>Love playing Football: Part of top soccer league in Karachi (Karachi United). Went for training with top players for 12 months (6 hours / week).</div>
          </p>
        </div>
      );
    } else {
      setDisplayedInfo('');
    }
  }, [selectedButton]);

  useEffect(() => {
    if (inView) {
      setImageVisible(true);
    }
  }, [inView]);

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  return (
    <section id="about" className="custom-section">
      <div className="container">
        <div className="flex-row">
          <div className="image-container">
            <CSSTransition
              in={imageVisible}
              timeout={1000}
              classNames="image"
              nodeRef={imageRef}
            >
              <img
                className="custom-image"
                src={require("../images/me.jpeg")}
                alt="Me"
                ref={imageRef}
              />
            </CSSTransition>
          </div>
          <div className="content-container" ref={ref}>
            <h1 className="custom-title">About Me</h1>
            <p className="custom-description">
              As a computer science major at UBC, I bring exceptional programming skills in Java and Python, coupled with a keen aptitude for Machine
              Learning, App and Web Development. My enthusiasm lies in leveraging AI technologies to revolutionize the consumer space, driven by a
              passion for enhancing user experiences at scale. Inspired by Google Home, I am eager to contribute my expertise and drive innovation
              in a software engineering role. Let's collaborate to create groundbreaking solutions and make a lasting impact!
            </p>
            <div className="button-container">
              <button className="custom-button" onClick={() => handleButtonClick('Interests')}>Interests</button>
              <button className="custom-button" onClick={() => handleButtonClick('Hobbies')}>Hobbies</button>
            </div>

            <div className="custom-each-description">
              <CSSTransition
                in={selectedButton !== ''}
                timeout={1000}
                classNames="info"
                unmountOnExit
              >
                <div>{displayedInfo}</div>
              </CSSTransition>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
