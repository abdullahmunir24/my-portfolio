import React from "react";
import "./Switch.css";

export default function Switch() {
  const setDarkMode = () => {
    document.querySelector("body").setAttribute("id", "dark");
    localStorage.setItem("selectedTheme", "dark");
  };

  const setLightMode = () => {
    document.querySelector("body").setAttribute("id", "light");
    localStorage.setItem("selectedTheme", "light");
  };

  const selectedTheme = localStorage.getItem("selectedTheme");

  if (selectedTheme === "dark") {
    setDarkMode();
  }

  const toggleTheme = (e) => {
    if (e.target.checked) {
      setLightMode();
    } else {
      setDarkMode();
    }
  };

  return (
    <div className="theme-switch">
      <label className="switch-wrapper">
        <input
          type="checkbox"
          className="switch-input"
          onChange={toggleTheme}
          defaultChecked={selectedTheme === "light"}
        />
        <span className="switch-slider"></span>
        <div className="switch-icons">
          <i className="fas fa-sun switch-icon-light"></i>
          <i className="fas fa-moon switch-icon-dark"></i>
        </div>
      </label>
    </div>
  );
}
