import React from 'react'
import "./Pricing.css"
import Image1 from "../../assets/price-1.svg";
import Image2 from "../../assets/price-2.svg";
import Image3 from "../../assets/price-3.svg";

const Pricing = () => {
  return (
    <section className="pricing container section">
      <h2 className="section_title">Pricing Plans</h2>

      <div className="pricing_container grid">

        <div className="pricing_item">
          <img src={Image1} className='pricing_img' alt="" />
          <h3 className="pricing_plan">Basic</h3>
          <p className="pricing_title">Crafting impactful website landing pages and beyond, tailored to enhance your business profile and engage your audience.</p>
          <p className="pricing_support">Email support</p>
          <h3 className="price">
            <em>$</em> 19 <span>Starting</span>
          </h3>
          <a href="#" className="btn">Get Started</a>
        </div>

        <div className="pricing_item best">
          <span className='badge'>Recommended</span>
          <img src={Image2} className='pricing_img' alt="" />
          <h3 className="pricing_plan">Premium</h3>
          <p className="pricing_title">We offer fully customized web pages for your business, including an admin panel, developed using the MERN stack.</p>
          <p className="pricing_support">Mon - Fri support</p>
          <h3 className="price">
            <em>$</em> 59 <span>Starting</span>
          </h3>
          <a href="" className="btn">Get Started</a>
        </div>

        <div className="pricing_item">
          <img src={Image3} className='pricing_img' alt="" />
          <h3 className="pricing_plan">AI & ML</h3>
          <p className="pricing_title">We also offer AI & ML models to augment your workflow and boost productivity.</p>
          <p className="pricing_support">24/7 support</p>
          <h3 className="price">
            <em>$</em> 29 <span>Starting</span>
          </h3>
          <a href="" className="btn">Get Started</a>
        </div>

      </div>
    </section>
  )
}

export default Pricing
