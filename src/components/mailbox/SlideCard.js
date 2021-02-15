import React from "react";
import { Row, Image } from "react-bootstrap";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { IMAGE_URL } from "../../config";
import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation]);

const SlideCard = ({ slideReceivedPosts }) => {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={50}
      navigation
      centeredSlides
      grabCursor
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      tag="section"
      breakpoints={{
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
      }}
    >
      {slideReceivedPosts.map((post, index) => (
        <SwiperSlide key={index}>
          <div id="flipCardTitle">
            <button className="btn btn-block pr-4 pl-4 ml-2">
              <Row className="justify-content-between align-items-center">
                <Row className="align-items-center">
                  <Image
                    src={IMAGE_URL + "/" + post.Post.User.usPhoto}
                    width="25px"
                    height="25px"
                    roundedCircle
                  />
                  <span className="ml-2">{post.Post.User.usName}</span>
                </Row>
                <span>{post.createdAt.slice(0, 10)}</span>
              </Row>
            </button>
          </div>
          <Flippy
            flipOnHover={false}
            flipOnClick={true}
            flipDirection="horizontal"
            style={{ width: "100%", height: "600px" }}
          >
            <FrontSide className="d-flex align-items-center">
              <Image src={IMAGE_URL + "/" + post.Post.poPhoto} width="100%" />
            </FrontSide>
            <BackSide className="d-flex align-items-center">
              <Image
                src={IMAGE_URL + "/" + post.Post.poContentPhoto}
                width="100%"
              />
            </BackSide>
          </Flippy>
          <div>
            <button className="btn btn-block btn-light mt-3">
              <i className="fas fa-volume-off fa-2x"></i>
            </button>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SlideCard;
