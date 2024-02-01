import React from 'react';
import "./About.css";
import About from "../../assets/avatar-2.svg"
import AboutBox from './AboutBox';


const Sidebar = () => {
  return (
    <div>
      <section className="about container section" id='about'>
        <h2 className="section_title">About Me</h2>

        <div className="about_container grid">
          <img src={About} alt="" className='about_img'/>

          <div className="about_data grid">
            <div className="about_info">
              <p className="about_description">Lorem, ipsum dolor sit amet 
              consectetur adipisicing elit. Ut asperiores fuga dolores possimus 
              aperiam at optio distinctio veritatis laborum vero.</p>
              <a href="" className='btn'>Download Resume</a>
            </div>

            <div className="about_skills grid">

              <div className="skills_data">
                <div className="skills_titles">
                  <h3 className="skills_name">Development</h3>
                  <span className="skills_number">90%</span>
                </div>
                <div className="skills_bar">
                  <span className="skills_percentage development"></span>
                </div>
              </div>

              <div className="skills_data">
                <div className="skills_titles">
                  <h3 className="skills_name">UI/UX design</h3>
                  <span className="skills_number">80%</span>
                </div>
                <div className="skills_bar">
                  <span className="skills_percentage ui_design"></span>
                </div>
              </div>

              <div className="skills_data">
                <div className="skills_titles">
                  <h3 className="skills_name">Photographics</h3>
                  <span className="skills_number">60%</span>
                </div>
                <div className="skills_bar">
                  <span className="skills_percentage photo"></span>
                </div>
              </div>

              <div className="skills_data">
                <div className="skills_titles">
                  <h3 className="skills_name"></h3>
                  <span className="skills_number"></span>
                </div>
                <div className="skills_bar">
                  <span className="skills_percentage"></span>
                </div>
              </div>

            </div>
          </div>
        </div>

        <AboutBox />
        
      </section>
    </div>
  )
}

export default Sidebar
