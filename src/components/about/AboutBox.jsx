import React from 'react'

function AboutBox() {
  return (
    <div className="about_boxes grid">

        <div className="about_box">
            <i className="about_icon icon-fire"></i>

            <div>
                <h3 className="about_title">7</h3>
                <span className="about_subtitle">Project Complete</span>
            </div>
        </div>

        <div className="about_box">
            <i className="about_icon icon-cup"></i>

            <div>
                <h3 className="about_title">228</h3>
                <span className="about_subtitle">Cup of coffee</span>
            </div>
        </div>

        <div className="about_box">
            <i className="about_icon icon-cup"></i>

            <div>
                <h3 className="about_title">872</h3>
                <span className="about_subtitle">Cup of Chai</span>
            </div>
        </div>

        <div className="about_box">
            <i className="about_icon icon-fire"></i>

            <div>
                <h3 className="about_title">86</h3>
                <span className="about_subtitle">Flame hot</span>
            </div>
        </div>
    </div>
  )
}

export default AboutBox
