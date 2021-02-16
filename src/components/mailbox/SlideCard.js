import React from "react";
import SwiperCore, { Navigation } from "swiper";
import { Swiper } from "swiper/react";

import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation]);

const SlideCard = ({ children }) => {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={0}
      navigation
      centeredSlides
      grabCursor
      breakpoints={{
        1070: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 2,
        },
        640: {
          slidesPerView: 2,
        },
        320: {
          slidesPerView: 1,
        },
      }}
    >
      {children}
    </Swiper>
  );
};

export default SlideCard;
