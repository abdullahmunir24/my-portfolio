import React, { createContext, useState } from 'react';
import Header from './components/header';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Work from './components/Education';
import Education from './components/Work';
import skillsData from './components/skillsData';
import "./App.css";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <Header />
        <About />
        <Work />
        <Education />
        <Skills skills={skillsData} />
        <Projects />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;