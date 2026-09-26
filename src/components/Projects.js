import React, { useState, useEffect } from "react";
import "./Projects.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { useInView } from "react-intersection-observer";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  // Define project categories
  const categories = [
    { id: "all", name: "All Projects" },
    { id: "web", name: "Web Development" },
    { id: "mobile", name: "Mobile Apps" },
    { id: "data", name: "Data Science" }
  ];
  
  // Project data with categories
  const projects = [
    {
      id: 7,
      title: "AllocAid (TA Allocation System)",
      date: "May 2025 – August 2025",
      description: "Implemented JWT middleware across 100+ routes, enforcing role permissions and blocking cross-account profile edits. Built a Deno service running concurrent PostgreSQL checks for availability, schedules, and duplicate assignments. Containerized React, Deno, and PostgreSQL with Docker Compose and automated CI test coverage in GitHub Actions.",
      bullets: [
        "Implemented JWT middleware across 100+ routes, enforcing role permissions and blocking cross-account profile edits.",
        "Built a Deno service running concurrent PostgreSQL checks for availability, schedules, and duplicate assignments.",
        "Containerized React, Deno, and PostgreSQL with Docker Compose and automated CI test coverage in GitHub Actions."
      ],
      image: require("../images/app.jpg"),
      link: "https://github.com/abdullahmunir24/AllocAid",
      categories: ["web"],
      technologies: ["React", "TypeScript", "Deno", "PostgreSQL", "Docker", "GitHub Actions"]
    },
    {
      id: 1,
      title: "TSKFLO (Task Management System)",
      date: "Jan 2025 – Apr 2025",
      description: "Used RTK Query cache updates to append Socket.IO messages to active conversations without reloading the page. Secured Socket.IO connections with JWT handshake middleware and organized live events into conversation rooms. Built MongoDB aggregation queries for task status, priority, and top-contributor metrics in admin dashboards.",
      bullets: [
        "Used RTK Query cache updates to append Socket.IO messages to active conversations without reloading the page.",
        "Secured Socket.IO connections with JWT handshake middleware and organized live events into conversation rooms.",
        "Built MongoDB aggregation queries for task status, priority, and top-contributor metrics in admin dashboards."
      ],
      image: require("../images/TSKFLO.jpeg"),
      link: "https://github.com/abdullahmunir24/TSKFLO",
      categories: ["web"],
      technologies: ["React", "Redux Toolkit", "Node.js", "MongoDB", "Socket.IO", "JWT"]
    },
    {
      id: 2,
      title: "Personal Portfolio Website",
      date: "June 2023",
      description: "Crafted a dynamic personal portfolio website using React.js, HTML, and CSS to highlight my skills, experiences, and projects. Showcasing a user-friendly design with dark and light mode for an engaging experience.",
      image: require("../images/thumbnail.png"),
      link: "https://github.com/abdullahmunir24/my-portfolio",
      categories: ["web"]
    },
    {
      id: 3,
      title: "SavorySmart",
      date: "Aug 2023 - Oct 2023",
      description: "Crafted a recipe website using React.js with features like recipe search, nearby restaurant search, ingredient info, nutritional analysis, and meal plan generation using APIs. Deployed Firebase authentication for secure sign-ups/logins, enhancing user experience and access to meal planning features.",
      image: require("../images/SS.png"),
      link: "https://github.com/abdullahmunir24/FoodWebsite",
      categories: ["web"]
    },
    {
      id: 4,
      title: "TidyLink",
      date: "Dec 2023 - April 2024",
      description: "Built a mobile app using React Native and Expo to connect blue-collar workers with job opportunities within Pakistan, targeting a market of 8.5 Million domestic workers. Implemented Firebase Authentication for secure sign-ups and profile creation, with data stored in Firestore. Enhanced the app with area-based profile viewing and an integrated chat system, projected to increase job matching efficiency by 30%.",
      image: require("../images/TidyLink.png"),
      link: "https://github.com/abdullahmunir24/TidyLink",
      categories: ["mobile"]
    },
    {
      id: 5,
      title: "Personal Chatbot",
      date: "July 2023",
      description: "Programmed an AI chatbot (draft version of a personal assistant) in Python to open websites and apps, log into Instagram, engage in conversations, answer questions, and provide real-time weather and news updates via API integration.",
      image: require("../images/chatbot.jpeg"),
      link: "https://github.com/abdullahmunir24/Personal-Chatbot",
      categories: ["data"]
    },
    {
      id: 6,
      title: "Health Insights USA: Data Analysis and Visualization",
      date: "Mar 2023 - Apr 2023",
      description: "Collaborated with two other team members, to analyze health cost data in the USA using pandas, seaborn, matplotlib, and tableau, including the impact of smoking on medical costs and the relationship between BMI, region, and gender on health costs.",
      image: require("../images/Data-Analytics.png"),
      link: "https://github.com/ubco-W2022T2-data301/project-group-group40",
      categories: ["data"]
    }
  ];
  
  // Filter projects based on active filter
  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.categories.includes(activeFilter));
  
  return (
    <section id="portfolio" className="projects-section">
      <div className="container">
        <div className="section-header animate-in">
          <h1 className="section-title">
            <span className="highlight-text">Personal</span> Projects
          </h1>
          <p className="section-subtitle">
            Explore my recent development work and coding projects
          </p>
        </div>
        
        {/* Project filters */}
        <div className="project-filters animate-in">
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-button ${activeFilter === category.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Project list */}
        <div className={`work-list animate-in ${filteredProjects.length === 1 ? 'single-item' : ''}`} ref={ref}>
          {filteredProjects.map((project, index) => (
            <div 
              className="work-card animate-in"
              key={project.id}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="work-image">
                <img src={project.image} alt={project.title} />
                <div className="work-tags">
                  {project.categories.map(cat => (
                    <span className="work-tag" key={`${project.id}-${cat}`}>
                      {cat === "web" ? "Web" : cat === "mobile" ? "Mobile" : "Data"}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="work-content">
                <div className="work-header">
                  <h3>{project.title}</h3>
                  <span className="work-date">{project.date}</span>
                </div>
                {project.bullets ? (
                  <ul className="project-bullets">
                    {project.bullets.map((bullet, bIdx) => (
                      <li key={bIdx}>
                        <i className="fas fa-check-circle bullet-icon"></i>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="work-description">{project.description}</p>
                )}
                {project.technologies && (
                  <div className="skills-used" style={{ marginTop: '12px' }}>
                    {project.technologies.map((tech, tIdx) => (
                      <div className="skill-tag" key={tIdx}>{tech}</div>
                    ))}
                  </div>
                )}
                <a 
                  href={project.link} 
                  className="work-link"
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} project`}
                >
                  <span>View Project</span>
                  <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {/* No projects found message */}
        {filteredProjects.length === 0 && (
          <div className="no-projects">
            <p>No projects found in this category.</p>
          </div>
        )}
        
        {/* Decorative elements */}
        <div className="project-decoration-1"></div>
        <div className="project-decoration-2"></div>
      </div>
    </section>
  );
}
