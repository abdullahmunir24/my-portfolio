import React from "react";
import "./Work.css";
import { Element } from "react-scroll";
import { useInView } from "react-intersection-observer";

export default function Work() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <Element name="education">
      <section className="work-experience-section" ref={ref}>
        <div className="container">
          <div className={`section-header ${inView ? 'animate-in' : ''}`}>
            <h2 className="section-title">
              <span className="highlight-text">Work</span> Experience
            </h2>
            <p className="section-subtitle">
              Professional roles and projects I've contributed to
            </p>
          </div>

          <div className="experience-timeline">
            {/* Software Engineering Intern at CGI */}
            <div className={`experience-card ${inView ? 'animate-in' : ''}`} style={{ animationDelay: '0.1s' }}>
              <div className="experience-header">
                <div className="experience-company">
                  <h3>Software Engineering Intern</h3>
                  <span className="company-name">CGI</span>
                  <span className="experience-location">
                    <i className="fas fa-map-marker-alt"></i> Toronto, ON
                  </span>
                </div>
                <div className="experience-duration">
                  <span className="duration-badge">Jan 2025 – Apr 2026</span>
                </div>
              </div>
              
              <div className="experience-content">
                <ul className="experience-details">
                  <li>
                    <i className="fas fa-robot"></i>
                    Developed a Gemini-powered RAG system to automate Angular UI code generation for CGI's Design System, using semantic chunking and a weighted hybrid search combining FAISS and BM25 to reduce development cycles from weeks to hours.
                  </li>
                  <li>
                    <i className="fas fa-code"></i>
                    Developed AI migration agents to convert Java RMI and Swing UI into Angular and Spring Boot with DAO and MyBatis.
                  </li>
                  <li>
                    <i className="fas fa-cloud"></i>
                    Architected a migration pipeline on Google Cloud Run, utilizing GCS FUSE to mount data for zero-latency agent access.
                  </li>
                  <li>
                    <i className="fas fa-shield-alt"></i>
                    Secured migration infrastructure via Artifact Registry, automating CVE scanning to prevent false positives in agent images.
                  </li>
                  <li>
                    <i className="fas fa-brain"></i>
                    Deployed open-source LLMs on Vertex AI, saving $4,000 per month while enabling structured reasoning traces.
                  </li>
                  <li>
                    <i className="fas fa-cogs"></i>
                    Implemented key agents to automate PostgreSQL, Elasticsearch, and Grafana setups, reducing developer effort by 70%.
                  </li>
                </ul>
                
                <div className="skills-used">
                  <div className="skill-tag">Gemini RAG</div>
                  <div className="skill-tag">Angular</div>
                  <div className="skill-tag">Google Cloud Run</div>
                  <div className="skill-tag">Vertex AI</div>
                  <div className="skill-tag">FAISS / BM25</div>
                  <div className="skill-tag">Spring Boot</div>
                </div>
              </div>
            </div>

            {/* Honours Thesis at UBC */}
            <div className={`experience-card ${inView ? 'animate-in' : ''}`} style={{ animationDelay: '0.15s' }}>
              <div className="experience-header">
                <div className="experience-company">
                  <h3>Machine Learning Engineer</h3>
                  <span className="company-name">University of British Columbia</span>
                  <span className="experience-location">
                    <i className="fas fa-map-marker-alt"></i> Kelowna, BC
                  </span>
                </div>
                <div className="experience-duration">
                  <span className="duration-badge">Sep 2025 – Apr 2026</span>
                </div>
              </div>
              
              <div className="experience-content">
                <ul className="experience-details">
                  <li>
                    <i className="fas fa-network-wired"></i>
                    Architected a text detection pipeline for Cree syllabics using PyTorch and CNN backbones with confidence scoring.
                  </li>
                  <li>
                    <i className="fas fa-database"></i>
                    Built a custom data generation pipeline converting raw image annotations into structured character and word-level CSVs.
                  </li>
                  <li>
                    <i className="fas fa-chart-bar"></i>
                    Designed custom evaluation metrics for a low-resource language, achieving high detection accuracy on a limited dataset.
                  </li>
                  <li>
                    <i className="fas fa-layer-group"></i>
                    Recreated a weakly supervised two-stage training process, to evaluate transferability for Cree syllabic detection.
                  </li>
                </ul>
                
                <div className="skills-used">
                  <div className="skill-tag">PyTorch</div>
                  <div className="skill-tag">CNN</div>
                  <div className="skill-tag">Deep Learning</div>
                  <div className="skill-tag">Python</div>
                  <div className="skill-tag">Computer Vision</div>
                </div>
              </div>
            </div>

            {/* Undergraduate Teaching Assistant at UBC */}
            <div className={`experience-card ${inView ? 'animate-in' : ''}`} style={{ animationDelay: '0.15s' }}>
              <div className="experience-header">
                <div className="experience-company">
                  <h3>Undergraduate Teaching Assistant - COSC 122</h3>
                  <span className="company-name">University of British Columbia</span>
                  <span className="experience-location">
                    <i className="fas fa-map-marker-alt"></i> Kelowna, Canada
                  </span>
                </div>
                <div className="experience-duration">
                  <span className="duration-badge">Sep 2024 – Dec 2024</span>
                </div>
              </div>
              
              <div className="experience-content">
                <ul className="experience-details">
                  <li>
                    <i className="fas fa-chalkboard-teacher"></i>
                    Provide one-on-one support and explain complex concepts to students. Assist during lectures, and manage weekly labs for 60+ students, explaining lab materials, answering questions, and grading assignments.
                  </li>
                </ul>
                
                <div className="skills-used">
                  <div className="skill-tag">Teaching</div>
                  <div className="skill-tag">Computer Science</div>
                  <div className="skill-tag">Lab Management</div>
                  <div className="skill-tag">Student Support</div>
                </div>
              </div>
            </div>

            {/* Software Developer at UBC */}
            <div className={`experience-card ${inView ? 'animate-in' : ''}`} style={{ animationDelay: '0.2s' }}>
              <div className="experience-header">
                <div className="experience-company">
                  <h3>Software Developer</h3>
                  <span className="company-name">University of British Columbia, Culture & Technology</span>
                  <span className="experience-location">
                    <i className="fas fa-map-marker-alt"></i> Kelowna, BC
                  </span>
                </div>
                <div className="experience-duration">
                  <span className="duration-badge">May 2024 – Apr 2026</span>
                </div>
              </div>
              
              <div className="experience-content">
                <ul className="experience-details">
                  <li>
                    <i className="fas fa-gamepad"></i>
                    Developed a scalable Unity-based 3D educational game for 24,000+ students using C#, Malbers AI, and modular systems.
                  </li>
                  <li>
                    <i className="fas fa-eye"></i>
                    Increased engagement by 30% through implementing the Observer Pattern to manage state change for time-based quests.
                  </li>
                  <li>
                    <i className="fas fa-puzzle-piece"></i>
                    Architected a ScriptableObject system to manage cross-scene state, aligning game-play with learning objectives.
                  </li>
                </ul>
                
                <div className="skills-used">
                  <div className="skill-tag">Unity</div>
                  <div className="skill-tag">C#</div>
                  <div className="skill-tag">Malbers AI</div>
                  <div className="skill-tag">Observer Pattern</div>
                  <div className="skill-tag">ScriptableObjects</div>
                </div>
              </div>
            </div>

            {/* Subject Tutor at UBC */}
            <div className={`experience-card ${inView ? 'animate-in' : ''}`} style={{ animationDelay: '0.4s' }}>
              <div className="experience-header">
                <div className="experience-company">
                  <h3>Subject Tutor</h3>
                  <span className="company-name">University of British Columbia, Student Learning Hub</span>
                  <span className="experience-location">
                    <i className="fas fa-map-marker-alt"></i> Kelowna, Canada
                  </span>
                </div>
                <div className="experience-duration">
                  <span className="duration-badge">May 2024 – Aug 2024</span>
                </div>
              </div>
              
              <div className="experience-content">
                <ul className="experience-details">
                  <li>
                    <i className="fas fa-users"></i>
                    Tutoring 50+ students on Computer Science, Math, Data Science, and Statistics courses. Conducting weekly learning sessions and solving students' problem sets during office hours.
                  </li>
                </ul>
                
                <div className="skills-used">
                  <div className="skill-tag">Teaching</div>
                  <div className="skill-tag">Computer Science</div>
                  <div className="skill-tag">Data Science</div>
                  <div className="skill-tag">Mathematics</div>
                </div>
              </div>
            </div>

            {/* Software Engineering Intern at Bazaar Technologies */}
            <div className={`experience-card ${inView ? 'animate-in' : ''}`} style={{ animationDelay: '0.8s' }}>
              <div className="experience-header">
                <div className="experience-company">
                  <h3>Software Engineering Intern</h3>
                  <span className="company-name">Bazaar Technologies</span>
                  <span className="experience-location">
                    <i className="fas fa-map-marker-alt"></i> Karachi, Pakistan
                  </span>
                </div>
                <div className="experience-duration">
                  <span className="duration-badge">Jun 2023 – Aug 2023</span>
                </div>
              </div>
              
              <div className="experience-content">
                <div className="company-description">
                  Bazaar Technologies is Pakistan's upcoming startup, Series B funded.
                </div>
                
                <ul className="experience-details">
                  <li>
                    <i className="fas fa-database"></i>
                    Built out an interface program enabling non-technical users to leverage SQL, reducing their time to pull data by 40%; developed the program using web interface with a Node.js backend, Sequelize ORM and the Superset API.
                  </li>
                  <li>
                    <i className="fas fa-chart-line"></i>
                    Used the Query Repository and Superset to display query results in a table format, improving KPI visibility by 25%, focusing on metrics such as Golden Deliveries, Success Rate, GMV per Vehicle, and Average Drop Rate.
                  </li>
                </ul>
                
                <div className="skills-used">
                  <div className="skill-tag">Node.js</div>
                  <div className="skill-tag">SQL</div>
                  <div className="skill-tag">Sequelize ORM</div>
                  <div className="skill-tag">Superset API</div>
                </div>
                
               
              </div>
            </div>

            {/* Web Developer at Terra Firma International */}
            <div className={`experience-card ${inView ? 'animate-in' : ''}`} style={{ animationDelay: '1.0s' }}>
              <div className="experience-header">
                <div className="experience-company">
                  <h3>Web Developer</h3>
                  <span className="company-name">Terra Firma International</span>
                  <span className="experience-location">
                    <i className="fas fa-map-marker-alt"></i> New York, USA (Remote Role)
                  </span>
                </div>
                <div className="experience-duration">
                  <span className="duration-badge">May 2021 – May 2022</span>
                </div>
              </div>
              
              <div className="experience-content">
                <ul className="experience-details">
                  <li>
                    <i className="fas fa-globe"></i>
                    Developed a comprehensive website for an NGO assisting refugee minors, engaging 200+ donors and 10,000+ partners in the past year, and improved content to increase engagement time from 23 to 39 minutes weekly.
                  </li>
                </ul>
                
                <div className="skills-used">
                  <div className="skill-tag">Web Development</div>
                  <div className="skill-tag">HTML/CSS</div>
                  <div className="skill-tag">JavaScript</div>
                  <div className="skill-tag">Content Strategy</div>
                </div>
              </div>
            </div>

            {/* Engineering Intern at Linked Things */}
            <div className={`experience-card ${inView ? 'animate-in' : ''}`} style={{ animationDelay: '1.2s' }}>
              <div className="experience-header">
                <div className="experience-company">
                  <h3>Engineering Intern</h3>
                  <span className="company-name">Linked Things</span>
                  <span className="experience-location">
                    <i className="fas fa-map-marker-alt"></i> Karachi, Pakistan
                  </span>
                </div>
                <div className="experience-duration">
                  <span className="duration-badge">Jun 2021 – Jul 2021</span>
                </div>
              </div>
              
              <div className="experience-content">
                <div className="company-description">
                  Specializes in Industrial IoT & AI solutions for Emerging Markets.
                </div>
                
                <ul className="experience-details">
                  <li>
                    <i className="fas fa-chart-bar"></i>
                    Conducted comprehensive data analysis using Excel to manage data for Smart Industries, focusing on predicting the next set of data based on historical patterns and sensor readings from devices such as DHT22 and PM2.5.
                  </li>
                  <li>
                    <i className="fas fa-microchip"></i>
                    Performed the setup of the NodeMCU-D1 to the ESP8266 and the DHT22 and connected it to my laptop using Arduino programming language to measure the temperature and humidity of the surroundings.
                  </li>
                </ul>
                
                <div className="skills-used">
                  <div className="skill-tag">IoT</div>
                  <div className="skill-tag">Data Analysis</div>
                  <div className="skill-tag">Arduino</div>
                  <div className="skill-tag">Excel</div>
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
