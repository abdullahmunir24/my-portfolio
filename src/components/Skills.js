import React, { useRef, useEffect, useState } from "react";
import Carousel from "@itseasy21/react-elastic-carousel";
import "./Skills.css";
import { Element } from "react-scroll";
import { useInView } from "react-intersection-observer";

const Skills = ({ skills }) => {
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const { ref: skillsRef, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });
  
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
    if (nextIndex < skillCategories.length) {
      setCurrentIndex(nextIndex);
    } else {
      setCurrentIndex(0);
    }
  };
  
  const breakPoints = [
    { width: 1, itemsToShow: 1 }
  ];
  
  const programmingLanguages = skills.filter((skill) =>
    ["Python", "Java", "JavaScript", "TypeScript", "C#", "C++", "SQL"].includes(skill.name)
  );
  
  const webAppDevelopment = skills.filter((skill) =>
    [
      "HTML",
      "CSS",
      "React.js",
      "AngularJS",
      "Node.js",
      "React Native",
      "MongoDB",
      "Unity",
    ].includes(skill.name)
  );
  
  const mlTools = skills.filter((skill) =>
    [
      "TensorFlow",
      "PyTorch",
      "Keras",
      "Pandas",
      "NumPy",
      "Seaborn",
      "Matplotlib",
      "GitHub",
      "AWS (S3, EC2, Lambda)",
      "Jupyter Notebook",
      "Compute Canada",
      "Tableau",
    ].includes(skill.name)
  );
  
  const certifications = skills.filter((skill) =>
    ["MTA 98-381: Passed the exam with a score of 91/100"].includes(skill.name)
  );

  const skillCategories = [
    { title: "Programming Languages", skills: programmingLanguages },
    { title: "Web/App Development", skills: webAppDevelopment },
    { title: "ML/Tools", skills: mlTools }
  ];
  
  const renderSkillItem = (skill, index) => {
    const delayStyle = {
      animationDelay: `${index * 0.1}s`
    };
    
    return (
      <div 
        className={`skill-item ${inView ? 'animate-in' : ''}`} 
        key={skill.id}
        style={delayStyle}
      >
        <div className="skill-icon-container">
          <img src={skill.image} alt={skill.name} />
        </div>
        <h3>{skill.name}</h3>
      </div>
    );
  };

  const renderSkillCategory = (category) => (
    <div className="carousel-slide" key={category.title}>
      <div className="skill-category">
        <h3 className="carousel-title">{category.title}</h3>
        <div className="carousel-grid-horizontal">
          {category.skills.map((skill, index) => renderSkillItem(skill, index))}
        </div>
      </div>
    </div>
  );

  return (
    <Element name="skills" className="skills-section">
      <div className="section-background"></div>
      <div className="skills-container" ref={skillsRef}>
        <h2 className={`section-title ${inView ? 'animate-in' : ''}`}>
          <span className="highlight-text">Skills</span> & Expertise
        </h2>
        
        {/* Horizontal scrolling carousel for skills */}
        <div className="skills-carousel">
          <Carousel
            ref={carouselRef}
            breakPoints={breakPoints}
            enableAutoPlay={false}
            pagination={true}
            showArrows={true}
            className="custom-carousel"
          >
            {skillCategories.map(category => renderSkillCategory(category))}
            
            {/* Certifications slide */}
            {certifications.length > 0 && (
              <div className="carousel-slide">
                <div className="skill-category">
                  <h3 className="carousel-title">Certifications</h3>
                  <div className="certification-grid">
                    {certifications.map((skill, index) => (
                      <div className={`skill-item-cert ${inView ? 'animate-in' : ''}`} key={skill.id}>
                        <img
                          src={skill.image}
                          alt={skill.name}
                          className="cert-image"
                        />
                        <h3 className="cert-title">{skill.name}</h3>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </Carousel>
        </div>
      </div>
    </Element>
  );
};

export default Skills;
