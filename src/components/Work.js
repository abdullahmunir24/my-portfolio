import React from 'react';
import './Work.css';
import { Element } from 'react-scroll';

export default function Education() {
  return (
    <Element name="education">
    <div className='sub-title'> Work Experience</div>
      <div>
      <div className="education-container">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="education-timeline">
                <div className="timeline">
                  <a href="https://www.amazon.com" target='blank' className="timeline-content">
                    <div className="timeline-icon"><i className="fas fa-code-branch"></i></div>
                    <div className="timeline-year">Aug’21 – Sep’21</div>
                    <h3 className="title">Data Analayst</h3>
                    <h3 className="title">Amazon</h3>
                    <h4 className="title">Sydney, Australia (Virtual Role)</h4>
                    <p className="description">
                    <div>Analyzed feedback of refurbished products to help business relaunch the refurbished business in Amazon
                    Australia. Identified the need to add three extra competitors to increase price competitiveness.</div>
                    <div className='description'> Benchmarked refurbished brands sold in Spain and Mexico (parity countries with Australia) and
                    identified opportunities to onboard and prioritise top brands such as Lenovo, HP, and Bose.</div>
                    <div className='description'>
                    Built an excel model to segment head brands from accessories. The model was used by technical product
                    manager in Amazon to create browse nodes for head brands improving shopping experience and
                    conversion by 0.7%.</div>                 
                    </p> 
                  </a>
                </div>
                <div className="timeline">
                  <a href="https://terrafirmainternational.org" target='blank' className="timeline-content">
                    <div className="timeline-icon"><i className="fas fa-code"></i></div>
                    <div className="timeline-year">May’21 – May’22</div>
                    <h3 className="title">Web Developer</h3>
                    <h3 className="title">TerraFirmaInternational</h3>
                    <h4 className="title">Athens, Greece (Virtual Role)</h4>
                    <div className="description">
                    <div>Taught myself advanced code to develop the structure of a website for an NGO assisting refugee minors.
                    Independently developed a website from scratch – more than 200+ donors have derived information from
                    the website and more than 10K partners have visited the website in the past three months.</div>
                    <div className='description'>
                    Refined, improved and enriched the content using CSS,HTML and Javascript on the website improving engagement
                    time spent per partner from 23 minutes to 39 minutes weekly.    
                    </div>
                    </div>
                  </a>
                </div>
                <div className="timeline">
                  <a href="https://www.bazaartech.com" target='_blank' className="timeline-content">
                    <div className="timeline-icon"><i className="fas fa-code-branch"></i></div>
                    <div className="timeline-year">Jun’23 – Aug’23</div>
                    <h3 className="title">Data Scientist</h3>
                    <h3 className="title">Bazaar Technologies</h3>
                    <h4 className="title">Karachi,Pakistan</h4>
                    <p className="description">
                    During my internship at Bazaar Technologies, I contributed to the development of a project called Ghalib, a
                    software designed to automate data presentation for business users without SQL knowledge. I actively participated
                    in the backend development, writing queries and implementing the necessary functionalities to display filtered
                    data on the frontend. Ghalib simplifies data analysis by providing intuitive filtering options, empowering users
                    to access relevant information effortlessly.            
                    </p> 
                  </a>
                </div>

                <div className="timeline">
                  <a href="https://linkedthings.ai" target='blank' className="timeline-content">
                    <div className="timeline-icon"><i className="fas fa-code"></i></div>
                    <div className="timeline-year">Jun’21</div>
                    <h3 className="title">Intern</h3>
                    <h3 className="title">Linked Things</h3>
                    <h4 className="title">Karachi, Pakistan</h4>
                    <p className="description">
                    Specializes in Industrial IoT & AI solutions for Emerging Markets.
                    <div className='description'>Conducted comprehensive data analysis using Excel to manage data for Smart Industries, focusing on
                    predicting the next set of data based on historical patterns and sensor readings from devices such as
                    DHT22 and PM2.5.</div>
                    <div className='description'>Performed the setup of the NodeMCU-D1 to the ESP8266 and the DHT22 and connected it to my laptop
                    using Arduino programming language to measure the temperature and humidity of the surroundings.</div>           
                    </p> 
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
