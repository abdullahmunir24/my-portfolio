import React, { useRef, useEffect, useState } from "react";
import Carousel from "@itseasy21/react-elastic-carousel";
import "./Skills.css";
import { Element } from "react-scroll";

const Skills = ({ skills }) => {
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const autoplay = setInterval(() => {
      handleNext();
    }, 8000);

    return () => {
      clearInterval(autoplay);
    };
  }, [currentIndex]);

  const handleNext = () => {
    const nextIndex = currentIndex + 1;
    if (nextIndex < skills.length) {
      setCurrentIndex(nextIndex);
    } else {
      setCurrentIndex(0);
    }
  };

  const breakPoints = [
    { width: 500, itemsToShow: 1 },
    { width: 768, itemsToShow: 2 },
    { width: 1200, itemsToShow: 3 },
    { width: 1500, itemsToShow: 4 },
  ];

  const programmingLanguages = skills.filter((skill) =>
    ["Python", "Java", "JavaScript", "C++", "C#"].includes(skill.name)
  );

  const webDevelopment = skills.filter((skill) =>
    [
      "HTML",
      "CSS",
      "React.js",
      "Node.js",
      "Firebase",
      "Bootstrap",
      "TailWind CSS",
      "MongoDB",
    ].includes(skill.name)
  );

  const dataAnalysis = skills.filter((skill) =>
    [
      "Pandas",
      "NumPy",
      "Seaborn",
      "Matplotlib",
      "SQL",
      "MS Excel",
      "Tableau",
    ].includes(skill.name)
  );

  const appDevelopment = skills.filter((skill) =>
    ["Swift", "React Native", "Unity"].includes(skill.name)
  );

  const toolsAndTechnologies = skills.filter((skill) =>
    [
      "GitHub",
      "VS Code",
      "Eclipse",
      "PyCharm",
      "Jupyter Notebook",
      "Xcode",
      "Netlify",
      "AWS",
    ].includes(skill.name)
  );

  const certifications = skills.filter((skill) =>
    ["MTA 98-381: Passed the exam with a score of 91/100"].includes(skill.name)
  );

  return (
    <Element name="skills">
      <div className="skills-carousel">
        <div className="sub-title">Skills and Certifications</div>
        <Carousel
          ref={carouselRef}
          breakPoints={breakPoints}
          enableAutoPlay={false}
        >
          <div>
            <h2 className="carousel-title">Programming Languages</h2>
            {programmingLanguages.map((skill) => (
              <div className="skill-item" key={skill.id}>
                <img src={skill.image} />
                <h3>{skill.name}</h3>
              </div>
            ))}
          </div>
          <div>
            <h2 className="carousel-title">Web Development</h2>
            <div className="carousel-skills">
              {webDevelopment.map((skill) => (
                <div className="skill-item" key={skill.id}>
                  <img src={skill.image} />
                  <h3>{skill.name}</h3>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="carousel-title">Data Analysis</h2>
            {dataAnalysis.map((skill) => (
              <div className="skill-item" key={skill.id}>
                <img src={skill.image} />
                <h3>{skill.name}</h3>
              </div>
            ))}
          </div>
          <div className="carousel-section">
            <h2 className="carousel-title">App Development</h2>
            <div className="carousel-skills">
              {appDevelopment.map((skill) => (
                <div className="skill-item" key={skill.id}>
                  <img src={skill.image} alt={skill.name} />
                  <h3>{skill.name}</h3>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="carousel-title">Tools and Technologies</h2>
            {toolsAndTechnologies.map((skill) => (
              <div className="skill-item">
                <img src={skill.image} />
                <h3>{skill.name}</h3>
              </div>
            ))}
          </div>
          <div>
            <h2 className="carousel-title">Certification</h2>
            {certifications.map((skill) => (
              <div className="skill-item-cert">
                <img
                  src={skill.image}
                  style={{ width: "220px", height: "220px" }}
                />
                <h3 style={{ marginTop: "20px" }}>{skill.name}</h3>
              </div>
            ))}
          </div>
        </Carousel>
      </div>
    </Element>
  );
};

export default Skills;
