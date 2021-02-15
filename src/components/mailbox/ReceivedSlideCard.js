import React, { useState } from "react";
import { Row, Image, Col } from "react-bootstrap";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { IMAGE_URL } from "../../config";

import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation]);

const ReceivedSlideCard = ({ slideReceivedPosts }) => {
  const [playing, setPlaying] = useState(true);

  const soundHandler = () => {
    setPlaying(!playing);
  };

  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={0}
      navigation
      centeredSlides
      grabCursor
      tag="section"
      breakpoints={{
        768: {
          slidesPerView: 3,
        },
        640: {
          slidesPerView: 2,
        },
        320: {
          slidesPerView: 1,
        },
      }}
    >
      {slideReceivedPosts.map((post, index) => (
        <SwiperSlide key={index} className="pl-1 pr-1">
          <Col sm={10} md={10} lg={10} className="mt-3 mb-3">
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
              style={{ width: "100%", height: "700px" }}
            >
              <FrontSide className="d-flex align-items-center">
                <Image
                  src={IMAGE_URL + "/" + post.Post.poPhoto}
                  width="100%"
                  height="100%"
                />
              </FrontSide>
              <BackSide className="d-flex align-items-center">
                <Image
                  src={IMAGE_URL + "/" + post.Post.poContentPhoto}
                  width="100%"
                  height="100%"
                />
              </BackSide>
            </Flippy>
            <div>
              <button
                className="btn btn-block btn-light mt-3"
                onClick={soundHandler}
                disabled={post.Post.poRecord === "null"}
              >
                <i
                  className={
                    post.Post.poRecord === "null"
                      ? "fas fa-volume-off fa-2x"
                      : playing
                      ? "fas fa-volume-up fa-2x"
                      : "fas fa-volume-mute fa-2x"
                  }
                ></i>
              </button>
            </div>
          </Col>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ReceivedSlideCard;
