import React from 'react'
import './Education.css'
import { Element } from 'react-scroll';


export default function Education() {
    return (
        <Element name="work">
            <div className='sub-title'> Education</div>
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
                        <p className="description">
                        <div>Received UBC’s International Major Entrance Scholarship (IMES)</div>
                        <div>Major: Computer Science</div>
                        <div> Yearly Average: 85.7% (Dean’s List)</div>
                        </p>
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
                           <div>A-Levels</div>
                            <div>Key Subjects: Mathematics,Computer Science,Physics</div>
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
                            <div>O-Levels</div>
                            <div>Key Subjects: Mathematics, Computer Science, Physics, Chemistry, Biology, Additional Mathematics</div>
                        </p>
                    </div>
                </div>

            </div>
        </div>
        </div>
        </Element>
    )
}

