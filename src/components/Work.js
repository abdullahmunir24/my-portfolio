import React from "react";
import "./Work.css";
import { Element } from "react-scroll";

export default function Work() {
  return (
    <Element name="education">
      <div className="sub-title"> Work Experience</div>
      <div>
        <div className="education-container">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="education-timeline">
                  <div className="timeline">
                    <a className="timeline-content">
                      <div className="timeline-icon">
                        <i className="fas fa-code"></i>
                      </div>
                      <div className="timeline-year">May 2024 – Present</div>
                      <h3 className="title">Software Developer</h3>
                      <h3 className="title">
                        {" "}
                        University of British Columbia, Culture & Technology
                        Department
                      </h3>

                      <h4 className="title"> Kelowna, Canada</h4>
                      <div className="description">
                        Developing an educational 3D game in Unity for 24,000
                        students, by designing interactive terrain, User
                        Interface elements, and implementing dynamic gameplay,
                        including player movement, item interaction, level and
                        scene management and quest completion.
                      </div>
                      <div className="description">
                        Created a Unity-based scene using scriptable objects to
                        integrate post-level quizzes, to improve students
                        learning outcomes by assessing students' understanding
                        of indigenous land and sustainability and aligning the
                        game with educational objectives.
                      </div>
                      <div className="description">
                        Introduced time-based challenges and quests using C#,
                        enhancing gameplay and increasing user interaction by
                        collaborating with a research team and school management
                        to integrate educational objectives into the game.
                      </div>
                    </a>
                  </div>

                  <div className="timeline">
                    <a className="timeline-content">
                      <div className="timeline-icon">
                        <i className="fas fa-code"></i>
                      </div>
                      <div className="timeline-year">May 2024 – Present</div>
                      <h3 className="title">Subject Tutor</h3>
                      <h3 className="title">
                        University of British Columbia, Student Learning Hub
                      </h3>
                      <h4 className="title"> Kelowna, Canada</h4>
                      <div className="description">
                        Tutoring 50+ students on Computer Science, Math, Data
                        Science, and Statistics courses. Conducting weekly
                        learning sessions and solving students’ problem sets
                        during office hours.
                      </div>
                    </a>
                  </div>

                  <div className="timeline">
                    <a
                      href="https://www.bazaartech.com"
                      target="_blank"
                      className="timeline-content"
                    >
                      <div className="timeline-icon">
                        <i className="fas fa-code-branch"></i>
                      </div>
                      <div className="timeline-year">Jun 2023–Aug 2023</div>
                      <h3 className="title">Software Engineering Intern</h3>
                      <h3 className="title">Bazaar Technologies</h3>
                      <h4 className="title">Karachi, Pakistan</h4>
                      <div className="description">
                        Bazaar Technologies is Pakistan’s upcoming startup,
                        Series B funded.
                      </div>
                      <div className="description">
                        Built out an interface program enabling non-technical
                        users to leverage SQL, reducing their time to pull data
                        by 40%; developed the program using web interface with a
                        Node.js backend, Sequelize ORM and the Superset API.
                      </div>
                      <div className="description">
                        Used the Query Repository and Superset to display query
                        results in a table format, improving KPI visibility by
                        25%, focusing on metrics such as Golden Deliveries,
                        Success Rate, GMV per Vehicle, and Average Drop Rate.
                      </div>
                    </a>
                  </div>

                  <div className="timeline">
                    <a className="timeline-content">
                      <div className="timeline-icon">
                        <i className="fas fa-code"></i>
                      </div>
                      <div className="timeline-year">May 2021 – May 2022</div>
                      <h3 className="title">Web Developer</h3>
                      <h3 className="title">Terra Firma International</h3>
                      <h4 className="title">New York, USA (Remote Role)</h4>
                      <div className="description">
                        Developed a comprehensive website for an NGO assisting
                        refugee minors, engaging 200+ donors and 10,000+
                        partners in the past year, and improved content to
                        increase engagement time from 23 to 39 minutes weekly.
                      </div>
                    </a>
                  </div>

                  <div className="timeline">
                    <a
                      href="https://linkedthings.ai"
                      target="blank"
                      className="timeline-content"
                    >
                      <div className="timeline-icon">
                        <i className="fas fa-code"></i>
                      </div>
                      <div className="timeline-year">Jun 2021-Jul 2021</div>
                      <h3 className="title">Engineering Intern</h3>
                      <h3 className="title">Linked Things</h3>
                      <h4 className="title">Karachi, Pakistan</h4>
                      <div className="description">
                        Specializes in Industrial IoT & AI solutions for
                        Emerging Markets.
                      </div>
                      <div className="description">
                        Conducted comprehensive data analysis using Excel to
                        manage data for Smart Industries, focusing on predicting
                        the next set of data based on historical patterns and
                        sensor readings from devices such as DHT22 and PM2.5.
                      </div>
                      <div className="description">
                        Performed the setup of the NodeMCU-D1 to the ESP8266 and
                        the DHT22 and connected it to my laptop using Arduino
                        programming language to measure the temperature and
                        humidity of the surroundings.
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}
