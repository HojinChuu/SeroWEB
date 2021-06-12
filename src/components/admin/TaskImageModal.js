import React, { useEffect, useRef } from "react";
import { Modal, Image, Row, Col, Button } from "react-bootstrap";
import { IMAGE_URL } from "../../config";

const TaskImageModal = ({ show, onHide, taskItem }) => {
  const frontImage = useRef("");
  const backImage = useRef("");
  useEffect(() => {
    if (taskItem) {
      console.log(taskItem);
    }
  }, [taskItem]);

  const imageClickHandler = (imageSrc) => {
    const imageTag = document.createElement("a");
    imageTag.href = imageSrc;
    imageTag.download = imageSrc.substring(imageSrc.lastIndexOf("/") + 1);
    imageTag.click();
  };

  const frontImageHandler = () => {
    imageClickHandler(frontImage.current.src);
  };

  const backImageHandler = () => {
    imageClickHandler(backImage.current.src);
  };

  const onClickHandler = () => {
    imageClickHandler(frontImage.current.src);
    imageClickHandler(backImage.current.src);
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
              src="/image/aboutImage4.png"
              width="100%"
              height="100%"
              onClick={frontImageHandler}
            />
          </Col>
          <Col>
            <Image
              ref={backImage}
              src="/image/aboutImage5.png"
              width="100%"
              height="100%"
              onClick={backImageHandler}
            />
          </Col>
        </Row>
      </Modal.Body>
      <Button
        size="lg"
        className="mt-2"
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
