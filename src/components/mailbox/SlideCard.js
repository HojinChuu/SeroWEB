import React from "react";
import SwiperCore, { Navigation } from "swiper";
import { Swiper } from "swiper/react";

import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation]);

const SlideCard = ({ children }) => {
  return (
    <Swiper
      slidesPerView={5}
      spaceBetween={0}
      navigation
      centeredSlides
      grabCursor
      breakpoints={
        children.props.children.length > 3
          ? {
              1450: {
                slidesPerView: 4,
              },
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
            }
          : children.props.children.length === 3
          ? {
              1450: {
                slidesPerView: 3.5,
              },
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
            }
          : children.props.children.length === 2
          ? {
              1450: {
                slidesPerView: 2.5,
              },
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
            }
          : {
              1450: {
                slidesPerView: 1.5,
              },
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
            }
      }
    >
      {children}
    </Swiper>
  );
};

export default SlideCard;
