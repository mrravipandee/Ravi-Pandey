import React from "react";
import "./About.css";
import About from "../../assets/avatar-2.svg";
import AboutBox from "./AboutBox";

const Sidebar = () => {
  return (
    <div>
      <section className="about container section" id="about">
        <h2 className="section_title">About Me</h2>

        <div className="about_container grid">
          <img src={About} alt="" className="about_img" />

          <div className="about_data grid">
            <div className="about_info">
              <p className="about_description">
                Dedicated to daily learning, I explore new tech stacks and delve
                into AI, contributing to my ever-evolving tech journey.
                Passionate about staying at the forefront of innovation, I
                strive to make meaningful contributions to the tech community.
                My favorite tech stack includes web development and the exciting
                world of Web 3.0.
              </p>
              <a href="" className="btn">
                Download Resume
              </a>
            </div>

            <div className="about_skills grid">
              <div className="skills_data">
                <div className="skills_titles">
                  <h3 className="skills_name">Front End</h3>
                  <span className="skills_number">80%</span>
                </div>
                <div className="skills_bar">
                  <span className="skills_percentage front-end"></span>
                </div>
              </div>

              <div className="skills_data">
                <div className="skills_titles">
                  <h3 className="skills_name">Back End</h3>
                  <span className="skills_number">50%</span>
                </div>
                <div className="skills_bar">
                  <span className="skills_percentage back-end"></span>
                </div>
              </div>

              <div className="skills_data">
                <div className="skills_titles">
                  <h3 className="skills_name">Development</h3>
                  <span className="skills_number">60%</span>
                </div>
                <div className="skills_bar">
                  <span className="skills_percentage development"></span>
                </div>
              </div>

            </div>
          </div>
        </div>

        <AboutBox />
      </section>
    </div>
  );
};

export default Sidebar;
