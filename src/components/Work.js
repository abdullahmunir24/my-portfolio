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
            {/* Software Engineer (GenAI) at CGI */}
            <div className={`experience-card ${inView ? 'animate-in' : ''}`} style={{ animationDelay: '0.05s' }}>
              <div className="experience-header">
                <div className="experience-company">
                  <h3>Software Engineer (GenAI)</h3>
                  <span className="company-name">CGI</span>
                  <span className="experience-location">
                    <i className="fas fa-map-marker-alt"></i> Toronto, Canada
                  </span>
                </div>
                <div className="experience-duration">
                  <span className="duration-badge">June 2026 – Present</span>
                </div>
              </div>
              
              <div className="experience-content">
                <ul className="experience-details">
                  <li>
                    <i className="fas fa-robot"></i>
                    Built AI migration agents in Python converting Java Swing into Angular and Spring Boot, cutting migration time by 60%.
                  </li>
                  <li>
                    <i className="fas fa-cloud"></i>
                    Architected Cloud Run migration jobs using GCS FUSE to read legacy files and write migrated output to Cloud Storage.
                  </li>
                  <li>
                    <i className="fas fa-code-branch"></i>
                    Integrated an open-source LSP-based indexing MCP, led team training on its use, and reduced token consumption by 37%.
                  </li>
                  <li>
                    <i className="fas fa-vial"></i>
                    Built an AI QA workflow that combined legacy code with historical Jira, Bitbucket, and Confluence context to generate Playwright TypeScript tests for migrated UI screens.
                  </li>
                </ul>
                
                <div className="skills-used">
                  <div className="skill-tag">Python</div>
                  <div className="skill-tag">Java Swing</div>
                  <div className="skill-tag">Angular</div>
                  <div className="skill-tag">Spring Boot</div>
                  <div className="skill-tag">Cloud Run</div>
                  <div className="skill-tag">GCS FUSE</div>
                  <div className="skill-tag">MCP</div>
                  <div className="skill-tag">Playwright</div>
                  <div className="skill-tag">TypeScript</div>
                </div>
              </div>
            </div>

            {/* Software Engineering Intern at CGI */}
            <div className={`experience-card ${inView ? 'animate-in' : ''}`} style={{ animationDelay: '0.1s' }}>
              <div className="experience-header">
                <div className="experience-company">
                  <h3>Software Engineering Intern</h3>
                  <span className="company-name">CGI</span>
                  <span className="experience-location">
                    <i className="fas fa-map-marker-alt"></i> Toronto, Canada
                  </span>
                </div>
                <div className="experience-duration">
                  <span className="duration-badge">Jan 2025 – May 2026</span>
                </div>
              </div>
              
              <div className="experience-content">
                <ul className="experience-details">
                  <li>
                    <i className="fas fa-brain"></i>
                    Deployed open-source LLMs on Vertex AI for internal developer tools, saving $4,000 monthly while logging failures.
                  </li>
                  <li>
                    <i className="fas fa-cogs"></i>
                    Built agentic infrastructure for PostgreSQL and Grafana setup tasks, reducing manual environment configuration.
                  </li>
                  <li>
                    <i className="fas fa-layer-group"></i>
                    Built a prompt library using NestJS to classify AI prompts from Bitbucket/Confluence MCP scans for 45+ teams.
                  </li>
                  <li>
                    <i className="fas fa-robot"></i>
                    Developed a Gemini-powered RAG system for Angular UI generation in CGI’s Design System, using semantic chunking and hybrid FAISS/BM25 retrieval to increase developer throughput by approximately 25%.
                  </li>
                </ul>
                
                <div className="skills-used">
                  <div className="skill-tag">Vertex AI</div>
                  <div className="skill-tag">NestJS</div>
                  <div className="skill-tag">PostgreSQL</div>
                  <div className="skill-tag">Grafana</div>
                  <div className="skill-tag">MCP</div>
                  <div className="skill-tag">Gemini RAG</div>
                  <div className="skill-tag">Angular</div>
                  <div className="skill-tag">FAISS / BM25</div>
                </div>
              </div>
            </div>

            {/* Machine Learning Engineer at UBC */}
            <div className={`experience-card ${inView ? 'animate-in' : ''}`} style={{ animationDelay: '0.15s' }}>
              <div className="experience-header">
                <div className="experience-company">
                  <h3>Machine Learning Engineer</h3>
                  <span className="company-name">University of British Columbia</span>
                  <span className="experience-location">
                    <i className="fas fa-map-marker-alt"></i> Kelowna, Canada
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
                    Fine-tuned a pretrained CRAFT text detector with a VGG16 backbone for Cree syllabic text detection in PyTorch.
                  </li>
                  <li>
                    <i className="fas fa-chart-bar"></i>
                    Designed evaluation metrics for Cree syllabic text detection, achieving 88% accuracy on a limited annotated dataset.
                  </li>
                  <li>
                    <i className="fas fa-vial"></i>
                    Ran seeded experiments with validation checkpoints to establish a reproducible Cree text-detection baseline.
                  </li>
                  <li>
                    <i className="fas fa-database"></i>
                    Built a preprocessing pipeline that converted GIMP annotations of Cree documents into character- and word-level CSV labels, providing ground truth for CRAFT training and evaluation.
                  </li>
                </ul>
                
                <div className="skills-used">
                  <div className="skill-tag">PyTorch</div>
                  <div className="skill-tag">CRAFT</div>
                  <div className="skill-tag">VGG16</div>
                  <div className="skill-tag">Computer Vision</div>
                  <div className="skill-tag">Machine Learning</div>
                  <div className="skill-tag">Python</div>
                  <div className="skill-tag">GIMP</div>
                </div>
              </div>
            </div>

            {/* Software Engineer at UBC Culture & Technology */}
            <div className={`experience-card ${inView ? 'animate-in' : ''}`} style={{ animationDelay: '0.2s' }}>
              <div className="experience-header">
                <div className="experience-company">
                  <h3>Software Engineer</h3>
                  <span className="company-name">University of British Columbia, Culture & Technology</span>
                  <span className="experience-location">
                    <i className="fas fa-map-marker-alt"></i> Kelowna, Canada
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
                    Developed a Unity-based 3D educational game for 24,000+ students using C#, Malbers AI, and reusable assets.
                  </li>
                  <li>
                    <i className="fas fa-eye"></i>
                    Increased engagement by 30% using the Observer Pattern to manage state changes for time-based quests.
                  </li>
                  <li>
                    <i className="fas fa-puzzle-piece"></i>
                    Implemented C# game-state management to carry player-driven world changes across scenes.
                  </li>
                </ul>
                
                <div className="skills-used">
                  <div className="skill-tag">Unity</div>
                  <div className="skill-tag">C#</div>
                  <div className="skill-tag">Malbers AI</div>
                  <div className="skill-tag">Observer Pattern</div>
                  <div className="skill-tag">Game State Management</div>
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
