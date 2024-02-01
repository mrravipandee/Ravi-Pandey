import React from "react";
import "./Services.css";
import ImgServices1 from "../../assets/service-1.svg";
import ImgServices2 from "../../assets/service-2.svg";
import ImgServices3 from "../../assets/service-3.svg";

const data = [
  {
    id: 1,
    image: ImgServices1,
    title: "UI/UX design",
    description:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.",
  },
  {
    id: 2,
    image: ImgServices2,
    title: "Web Development",
    description:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.",
  },
  {
    id: 3,
    image: ImgServices3,
    title: "Photography",
    description:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.",
  },
];


const Services = () => {
  return (
    <section className="services container section" id="services">
      <h2 className="section_title">Services</h2>

      <div className="services_container grid">
        {data.map(({id, image, title, description}) => {
          return (
            <div className="services_card" key={id}>
              <img src={image} alt=""  className="services_img"/>
              <h3 className="services_title">{title}</h3>
              <p className="services_description">{description}</p>
            </div>
          );
        })}
      </div>
    </section>
  )
}

export default Services

