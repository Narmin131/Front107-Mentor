import React from "react";

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import img1 from "../assets/img/menu-item-1.png"
const About = () => {
  return (
    <>
      <Swiper
        // install Swiper modules
        modules={[Navigation, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        loop
        autoplay={{delay:1000}}
        // pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
            <img src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={img1} alt="" />
        </SwiperSlide>
        ...
      </Swiper>
    </>
  );
};

export default About;
