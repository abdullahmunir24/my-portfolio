import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-scroll';
import './header.css';
import Typed from 'typed.js';
import Switch from './Switch.js'
import Resume from '../Abdullah Munir.pdf';

export default function Header() {
  const type = useRef(null);
  const [navbarOpen, setNavbarOpen] = useState(false);

  useEffect(() => {
    const options = {
      strings: ['Web Developer!', 'App Developer!', 'Software Engineer!', 'Data Scientist!'],
      typeSpeed: 50,
      loop: true,
      loopCount: Infinity,
    };

    const typed = new Typed(type.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  const handleOpenResume = () => {
    window.open(Resume, '_blank');
  };

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };
  

  return (
    <div id="header">
      <div className="container">
        <nav className={navbarOpen ? 'open' : ''}>
          <button className="header-button" onClick={handleOpenResume}> Open Resume</button>
          <div className={`navbar-overlay ${navbarOpen ? 'open' : ''}`} onClick={toggleNavbar}></div>
          <div className="navbar-toggler" onClick={toggleNavbar}>
            <div className="icon-bar"></div>
            <div className="icon-bar"></div>
            <div className="icon-bar"></div>
          </div>
          <ul className={navbarOpen ? 'open' : ''}>
            <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
            <li><Link to="about" smooth={true} duration={500}>About</Link></li>
            <li><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
            <li><Link to="education" smooth={true} duration={500}>Work Experience</Link></li>
            <li><Link to="work" smooth={true} duration={500}>Education</Link></li>
            <li><Link to="portfolio" smooth={true} duration={500}>Personal Projects</Link></li>
            <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
            <li><Switch /></li>
            
          </ul>
        </nav>
        <div className="header-text">
          <h1>
            Hi, I'm Abdullah<br />
            Munir and I am a <br />
            <span ref={type}></span>
          </h1>
        </div>
      </div>
    </div>
  );
}
