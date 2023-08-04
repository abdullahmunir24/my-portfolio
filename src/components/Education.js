import React from "react";
import "./Education.css";
import { Element } from "react-scroll";

export default function Education() {
  return (
    <Element name="work">
      <div className="sub-title"> Education</div>
      <div className="work-container">
        <div className="container">
          <div className="main-timeline">
            <div className="timeline">
              <div className="icon"></div>
              <div className="date-content">
                <div className="date-outer">
                  <span className="date">
                    <span className="month">4 Years</span>
                    <span className="year">2022-2026</span>
                  </span>
                </div>
              </div>
              <div className="timeline-content">
                <h5 className="title">The University of British Columbia</h5>
                <div className="space">Major: Computer Science</div>

                <div className="space">
                  Recipient of UBC's International Major Entrance Scholarship
                  (IMES), a prestigious 50% scholarship awarded to international
                  students based on exceptional academic and extracurricular
                  achievements.
                </div>

                <div className="space">GPA: 85.7%</div>

                <div>
                  Placed on the Dean's List for exceptional academic
                  performance.
                </div>
              </div>
            </div>

            <div className="timeline">
              <div className="icon"></div>
              <div className="date-content">
                <div className="date-outer">
                  <span className="date">
                    <span className="month">2 Years</span>
                    <span className="year">2020-2022</span>
                  </span>
                </div>
              </div>
              <div className="timeline-content">
                <h5 className="title">Karachi Grammar School</h5>
                <p className="description">
                  <div className="space">A-Levels</div>
                  <div>Mathematics,Computer Science,Physics</div>
                </p>
              </div>
            </div>

            <div className="timeline">
              <div className="icon"></div>
              <div className="date-content">
                <div className="date-outer">
                  <span className="date">
                    <span className="month">2 Years</span>
                    <span className="year">2018-2020</span>
                  </span>
                </div>
              </div>
              <div className="timeline-content">
                <h5 className="title">Karachi Grammar School</h5>
                <p className="description">
                  <div className="space">O-Levels</div>
                  <div>
                    Key Subjects: Mathematics, Computer Science, Physics,
                    Chemistry, Biology, Additional Mathematics
                  </div>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}
