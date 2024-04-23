import React, { useState } from "react";
import "./Portfolio.css";
import Menu from "./Menu";

const Sidebar = () => {
  
  const [items, setItems] = useState(Menu);
  const filterItem = (categoryItem) => {
    const updatedItem = Menu.filter((curElem) => {
      return curElem.category === categoryItem;
    });

    setItems(updatedItem);
  }

  return (
    <section className="work container section" id="work">
      <h2 className="section_title">Recent Projects</h2>

      <div className="work_filters">
        <span className="work_item" onClick={() => setItems(Menu)}>Everyting</span>
        <span className="work_item" onClick={() => filterItem("App")} >Apps</span>
        <span className="work_item" onClick={() => filterItem("Webdev")} >Web Devs</span>
        <span className="work_item" onClick={() => filterItem("Ai&Ml")} >AI & Ml</span>
      </div>

      <div className="work_container grid">
        {items.map((elem) => {
          const{ id, image, title, category, link} = elem;
          return (
            <div className="work_card" key={id}>
              <div className="work_thumnail">
                <img src={image} className="work_img" alt="" />
                <div className="work_mask"></div>
              </div>

              <span className="work_category">{category}</span>
              <h3 className="work_title">{title}</h3>
              <a target="_blank" href={link} className="work_button">
                <i className="icon-link work_button-icon"></i>
              </a>
            </div>
          )
        })}
      </div>
    </section>
  );
};

export default Sidebar;
