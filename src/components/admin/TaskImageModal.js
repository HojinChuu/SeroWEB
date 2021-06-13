import React, { useRef } from "react";
import axios from "axios";
import { Modal, Image, Row, Col, Button } from "react-bootstrap";
import { IMAGE_URL } from "../../config";

const TaskImageModal = ({ show, onHide, taskItem }) => {
  const frontImage = useRef("");
  const backImage = useRef("");

  const imageClickHandler = async (imageSrc, direction) => {
    const response = await axios.get(imageSrc, {
      responseType: "blob",
    });
    console.log(response);
    // if (response.status === 200) {
    //   const blob = await response.data;
    //   const imageTag = document.createElement("a");
    //   imageTag.href = URL.createObjectURL(blob);
    //   imageTag.download = `No${taskItem.seId}_${taskItem.seName}_${direction}`;
    //   imageTag.click();
    // }
  };

  const frontImageHandler = () => {
    imageClickHandler(frontImage.current.src, "front");
  };

  const backImageHandler = () => {
    imageClickHandler(backImage.current.src, "back");
  };

  const onClickHandler = () => {
    imageClickHandler(frontImage.current.src, "front");
    imageClickHandler(backImage.current.src, "back");
  };

  return (
    <Modal centered show={show} onHide={onHide} keyboard={false} size="lg">
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body className="pl-5 pr-5">
        <Row
          className="justify-content-center cardContainer"
          id="taskImageCard"
        >
          <Col>
            <Image
              ref={frontImage}
              src={IMAGE_URL + "/" + taskItem.Post.poPhoto}
              width="100%"
              height="100%"
              onClick={frontImageHandler}
            />
          </Col>
          <Col>
            <Image
              ref={backImage}
              src={IMAGE_URL + "/" + taskItem.Post.poContentPhoto}
              width="100%"
              height="100%"
              onClick={backImageHandler}
            />
          </Col>
        </Row>
      </Modal.Body>
      <Button
        size="lg"
        className="mt-4"
        variant="secondary"
        style={{ fontSize: "13px" }}
        onClick={onClickHandler}
      >
        모두 다운로드
      </Button>
    </Modal>
  );
};

export default TaskImageModal;
