import React from "react";
import "./Testimonials.css";
import testData from "./testData";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const Testimonials = () => {
  return (
    <section className="test container section">
      <h2 className="section__title">Testimonials</h2>
      <span className="section__subtitle">What they say about me?</span>
      <Swiper
        className="test_container"
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
        }}
        modules={[Pagination]}
      >
        {testData.map(({ id, image, title, description }) => {
          return (
            <SwiperSlide className="test_card" key={id}>
              <img src={image} className="test_img" />
              <h3 className="test_name">{title}</h3>
              <p className="test_desc">{description}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
