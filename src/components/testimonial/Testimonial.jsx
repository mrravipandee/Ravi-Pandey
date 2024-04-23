import React from "react";
import "./Testimonial.css";
import Image1 from "../../assets/avatar-1.svg";
import Image2 from "../../assets/avatar-2.svg";
import Image3 from "../../assets/avatar-3.svg";

import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    id: 1,
    image: Image3,
    title: "Shweta Bandawane",
    subtitle: "Engage in network marketing with @forangeinc.",
    comment:
      "Experience unparalleled service with timely delivery, setting a new standard in excellence. Embrace efficiency and reliability with every interaction, making your experience truly remarkable. Good luck! 👍",
  },
  {
    id: 2,
    image: Image2,
    title: "Nitesh Ray",
    subtitle: "Student and Kotlin developer",
    comment:
      "I enjoy working with the theme and learn so much. You guys make the process fun and interesting.",
  },
  {
    id: 3,
    image: Image1,
    title: "Yash Jejurkar",
    subtitle: "Software engineer at @Alena",
    comment:
      "I enjoy working with the theme and learn so much. You guys make the process fun and interesting. Good luck! 👍",
  },
];

const Testimonial = () => {
  return (
    <section className="testimonial container section">
      <h2 className="section_title">Client & Reviews</h2>

      <Swiper className="testimonial_conatiner grid"
        modules={[ Pagination ]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        grabCursor={true}
        pagination={{ clickable: true }}
        >
        {data.map(({id, image, title, subtitle, comment}) => {
          return (
            <SwiperSlide className="testimonial_item" key={id}>
              <div className="thumb">
                <img src={image} alt="" />
              </div>
              <h3 className="testimonial_title">{title}</h3>
              <span className="subtitle">{subtitle}</span>
              <div className="comment">{comment}</div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  );
};

export default Testimonial;
