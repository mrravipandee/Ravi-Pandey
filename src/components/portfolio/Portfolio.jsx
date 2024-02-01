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
      <h2 className="section_title">Recent Works</h2>

      <div className="work_filters">
        <span className="work_item" onClick={() => setItems(Menu)}>Everyting</span>
        <span className="work_item" onClick={() => filterItem("Creative")} >Creative</span>
        <span className="work_item" onClick={() => filterItem("Art")} >Art</span>
        <span className="work_item" onClick={() => filterItem("Design")} >Design</span>
        <span className="work_item" onClick={() => filterItem("Branding")} >Brandring</span>
      </div>

      <div className="work_container grid">
        {items.map((elem) => {
          const{ id, image, title, category} = elem;
          return (
            <div className="work_card" key={id}>
              <div className="work_thumnail">
                <img src={image} className="work_img" alt="" />
                <div className="work_mask"></div>
              </div>

              <span className="work_category">{category}</span>
              <h3 className="work_title">{title}</h3>
              <a href="#" className="work_button">
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
