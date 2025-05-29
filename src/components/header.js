import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";
import "./header.css";
import Typed from "typed.js";
import Resume from "../Abdullah Munir.pdf";
import HeaderBackground from "./HeaderBackground";

export default function Header() {
  const type = useRef(null);
  const particlesRef = useRef(null);
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Particle animation setup
  useEffect(() => {
    const particles = [];
    const colors = ["#8a2be2", "#00d9ff", "#714381", "#ff6b6b"];
    let canvas, ctx;
    
    const init = () => {
      canvas = particlesRef.current;
      if (!canvas) return;
    
      ctx = canvas.getContext("2d");
      
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Create particles
      for (let i = 0; i < Math.min(window.innerWidth / 10, 100); i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 5 + 1,
          color: colors[Math.floor(Math.random() * colors.length)],
          velocity: {
            x: (Math.random() - 0.5) * 1,
            y: (Math.random() - 0.5) * 1
          },
          opacity: Math.random() * 0.5 + 0.2
        });
      }
      
      animate();
    };
    
    const animate = () => {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((particle) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color + Math.floor(particle.opacity * 255).toString(16).padStart(2, '0');
        ctx.fill();
        
        // Update position
        particle.x += particle.velocity.x;
        particle.y += particle.velocity.y;
        
        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.velocity.x *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.velocity.y *= -1;
      });
      
      requestAnimationFrame(animate);
    };
    
    init();
    
    const handleResize = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animate);
    };
  }, []);
  
  useEffect(() => {
    const options = {
      strings: [
        "Software Engineer",
        "Web Developer",
        "App Developer",
        "Data Scientist",
      ],
      typeSpeed: 70,
      backSpeed: 50,
      loop: true,
      loopCount: Infinity,
      backDelay: 1500,
    };
    
    const typed = new Typed(type.current, options);
    
    // Add scroll listener
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      typed.destroy();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const handleOpenResume = () => {
    const anchor = document.createElement("a");
    anchor.style.display = "none";
    anchor.setAttribute("download", "Abdullah Munir.pdf");
    anchor.href = Resume;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  };
  
  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };
  
  return (
    <div id="header">
      <HeaderBackground />
      
      <div className="container">
        <nav className={`${navbarOpen ? "open" : ""} ${scrolled ? "scrolled" : ""}`}>
          <div className="logo">
            <span>&lt;/AM&gt;</span>
          </div>
          
          <div
            className={`navbar-overlay ${navbarOpen ? "open" : ""}`}
            onClick={toggleNavbar}
          />
          <div className="navbar-toggler" onClick={toggleNavbar}>
            <div className="icon-bar"></div>
            <div className="icon-bar"></div>
            <div className="icon-bar"></div>
          </div>
          <ul className={navbarOpen ? "open" : ""}>
            <li>
              <Link to="home" smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li>
              <Link to="about" smooth={true} duration={500}>
                About
              </Link>
            </li>
            <li>
              <Link to="skills" smooth={true} duration={500}>
                Skills
              </Link>
            </li>
            <li>
              <Link to="education" smooth={true} duration={500}>
                Work Experience
              </Link>
            </li>
            <li>
              <Link to="work" smooth={true} duration={500}>
                Education
              </Link>
            </li>
            <li>
              <Link to="portfolio" smooth={true} duration={500}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="contact" smooth={true} duration={500}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        
        <div className="header-content">
          <div className="header-text">
            <h3 className="greeting">Hello, I'm</h3>
            <h1 className="name">Abdullah Munir</h1>
            <h2 className="profession">
              <span className="highlight">I'm a </span>
              <span ref={type} className="typed-text"></span>
            </h2>
            <div className="header-buttons">
              <button onClick={handleOpenResume} className="modern-button resume-btn">
                <i className="fas fa-download"></i> Download CV
              </button>
              <Link to="contact" smooth={true} duration={800} className="modern-button contact-btn">
                <i className="fas fa-envelope"></i> Contact Me
              </Link>
            </div>
          </div>
        </div>
        
        <div className="scroll-indicator">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <div>
            <span className="scroll-text">Scroll Down</span>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="header-decoration-1"></div>
      <div className="header-decoration-2"></div>
      <div className="header-decoration-3"></div>
    </div>
  );
}
