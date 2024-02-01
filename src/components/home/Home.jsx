import React from 'react';
import "./Home.css";
import Me from "../../assets/avatar-1.svg";
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';

const Sidebar = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} alt="" className='home_img' />
        <h1 className="home_name">Ravi Pandey</h1>
        <span className="home_education">I'm Front-End developer</span>
        
        <HeaderSocials />

        <a href="#contact" className="btn">Hire Me</a>

        <ScrollDown />
      </div>

      <Shapes />
    </section>
  )
}

export default Sidebar
