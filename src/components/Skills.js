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
  
  const programmingLanguages = skills.filter((skill) => skill.category === "Programming Languages");
  const frameworksLibraries = skills.filter((skill) => skill.category === "Frameworks & Libraries");
  const toolsTechnologies = skills.filter((skill) => skill.category === "Tools & Technologies");
  const concepts = skills.filter((skill) => skill.category === "Concepts");
  const certifications = skills.filter((skill) => skill.category === "Certifications");

  const skillCategories = [
    { title: "Programming Languages", skills: programmingLanguages },
    { title: "Frameworks & Libraries", skills: frameworksLibraries },
    { title: "Tools & Technologies", skills: toolsTechnologies },
    { title: "Concepts", skills: concepts }
  ].filter(cat => cat.skills && cat.skills.length > 0);
  
  const renderSkillItem = (skill, index) => {
    const delayStyle = {
      animationDelay: `${index * 0.08}s`
    };
    
    return (
      <div 
        className={`skill-item ${inView ? 'animate-in' : ''}`} 
        key={skill.id}
        style={delayStyle}
      >
        <div className="skill-icon-container">
          {skill.image ? (
            <img src={skill.image} alt={skill.name} />
          ) : (
            <i className={skill.icon || "fas fa-code"} style={{ fontSize: "2.2rem", color: "#00d9ff" }}></i>
          )}
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
                        {skill.image && (
                          <img
                            src={skill.image}
                            alt={skill.name}
                            className="cert-image"
                          />
                        )}
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
