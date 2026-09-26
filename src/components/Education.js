import React from "react";
import "./Education.css";
import { Element } from "react-scroll";
import { useInView } from "react-intersection-observer";

export default function Education() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <Element name="work">
      <section className="education-section" ref={ref}>
        <div className="container">
          <div className="section-header animate-in">
            <h2 className="section-title">
              <span className="highlight-text">Education</span> Background
            </h2>
            <p className="section-subtitle">
              My academic journey and qualifications
            </p>
          </div>

          <div className="main-timeline">
            {/* UBC Education */}
            <div className="timeline animate-in" style={{ animationDelay: '0.2s' }}>
              <div className="timeline-icon">
                <span className="year-tag">Sep 2022 – June 2026</span>
              </div>
              
              <div className="timeline-body">
                <div className="timeline-header">
                  <h3 className="timeline-title">University of British Columbia</h3>
                  <span className="timeline-degree">BSc (Honours) in Computer Science (Co-op) - GPA: 4.20/4.33 (Dean's List)</span>
                  <span className="timeline-location" style={{ fontSize: '0.9rem', color: '#8a2be2', display: 'block', marginTop: '4px' }}>
                    <i className="fas fa-map-marker-alt"></i> Kelowna, Canada
                  </span>
                </div>
                
                <div className="timeline-content">
                  <ul className="timeline-details">
                    <li>
                      <i className="fas fa-medal"></i>
                      Received UBC’s International Major Entrance Scholarship and Faculty of Science International Student Award
                    </li>
                    <li>
                      <i className="fas fa-book-reader"></i>
                      <strong>Relevant Courses:</strong> Object-Oriented Programming, Data Structures & Algorithms, Data Analytics, Project Management, Machine Architecture, Artificial Intelligence, Software Engineering, Machine Learning, Parallel Programming (CUDA)
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* KGS A-Levels */}
            <div className="timeline animate-in" style={{ animationDelay: '0.4s' }}>
              <div className="timeline-icon">
                <span className="year-tag">2020-2022</span>
              </div>
              
              <div className="timeline-body">
                <div className="timeline-header">
                  <h3 className="timeline-title">Karachi Grammar School</h3>
                  <span className="timeline-degree">A-Levels</span>
                </div>
                
                <div className="timeline-content">
                  <div className="subjects-container">
                    <div className="subject-tag">Mathematics</div>
                    <div className="subject-tag">Computer Science</div>
                    <div className="subject-tag">Physics</div>
                    <div className="subject-tag">Economics</div>

                  </div>
                </div>
              </div>
            </div>

            {/* KGS O-Levels */}
            <div className="timeline animate-in" style={{ animationDelay: '0.6s' }}>
              <div className="timeline-icon">
                <span className="year-tag">2018-2020</span>
              </div>
              
              <div className="timeline-body">
                <div className="timeline-header">
                  <h3 className="timeline-title">Karachi Grammar School</h3>
                  <span className="timeline-degree">O-Levels</span>
                </div>
                
                <div className="timeline-content">
                  <p className="content-subtitle">Key Subjects:</p>
                  <div className="subjects-container">
                    <div className="subject-tag">Mathematics</div>
                    <div className="subject-tag">Computer Science</div>
                    <div className="subject-tag">Physics</div>
                    <div className="subject-tag">Chemistry</div>
                    <div className="subject-tag">Biology</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="decoration-circle circle-1"></div>
        <div className="decoration-circle circle-2"></div>
      </section>
    </Element>
  );
}
