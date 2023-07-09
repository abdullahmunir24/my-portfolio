import React, { useEffect, useContext, useState } from "react";
import { ThemeContext } from "../App";
import "../App.css";
import "./Switch.css";

const Switch = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [modeText, setModeText] = useState("Press icons to switch modes");

  useEffect(() => {
    const container = document.querySelector("#container");
    const icons = document.querySelector("#icons");
    const icon1 = document.querySelector("#icon1");
    const icon2 = document.querySelector("#icon2");

    let dark = JSON.parse(localStorage.getItem("animated-icons-darkmode")) || false;

    const handleToggleTheme = () => {
      container.classList.toggle("dark");
      const rotation = parseInt(getComputedStyle(icons).getPropertyValue("--rotation"));
      icons.style.setProperty("--rotation", rotation - 180);
      dark = !dark;
      if (dark) {
        icon1.style.display = "none";
        icon2.style.display = "block";
        icon2.classList.add("icon-change-animation");
        setModeText("You are in light mode"); 
      } else {
        icon1.style.display = "block";
        icon2.style.display = "none";
        icon1.classList.add("icon-change-animation");
        setModeText("You are in dark mode"); 
      }
      localStorage.setItem("animated-icons-darkmode", JSON.stringify(dark));
      toggleTheme();
    };

    icons.addEventListener("click", handleToggleTheme);

    return () => {
      icons.removeEventListener("click", handleToggleTheme);
    };
  }, [toggleTheme]);

  return (
    <div id="container" className={`container ${theme === "light" ? "light" : "dark"}`}>
      <div className="icon-container">
        <div id="icons" className="icons">
          <div id="icon1" className="icon icon1">
            <i className="fas fa-moon"></i>
          </div>
          <div id="icon2" className="icon icon2">
            <i className="fas fa-sun"></i>
          </div>
        </div>
        <div className="mode-text">{modeText}</div>
      </div>
    </div>
  );
};

export default Switch;
