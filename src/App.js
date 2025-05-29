import React, { Suspense, lazy } from 'react';
import Header from './components/header';
import CustomCursor from './components/CustomCursor';
import skillsData from './components/skillsData';
import "./App.css";

// Lazy load components for better initial load performance
const About = lazy(() => import('./components/About'));
const Projects = lazy(() => import('./components/Projects'));
const Skills = lazy(() => import('./components/Skills'));
const Footer = lazy(() => import('./components/Footer'));
const Work = lazy(() => import('./components/Work'));
const Education = lazy(() => import('./components/Education'));

function App() {
  return (
    <div className="App" id="dark">
      <CustomCursor />
      <Suspense fallback={<div className="loading">Loading...</div>}>
        <Header />
        <About />
        <Work />
        <Education />
        <Skills skills={skillsData} />
        <Projects />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;