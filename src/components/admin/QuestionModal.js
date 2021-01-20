import React from "react";
import { Modal, Button, Image } from "react-bootstrap";

const QuestionAnswer = ({ show, onHide, question }) => {
  return (
    <Modal
      centered
      show={show}
      onHide={onHide}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header className="m-auto">
        <Modal.Title>
          <h5 className="text-center ml-4 pb-4">문의</h5>
          <div className="row justify-content-center ml-auto ">
            <div className="col" xs={6} md={6}>
              <Image
                src="/image/no-image.png"
                roundedCircle
                fluid
                width="100"
              />
            </div>
          </div>
          <h5 className="text-center mt-3 ml-3">추호진 고객님</h5>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="pl-5 pr-5">
        <div className="row">
          <small className="mr-auto mr-2 mb-1" style={{ color: "red" }}>
            문의사항
          </small>
          <span>
            환불해주세요환환불해주세요환불해주세요환불해주세요환불해주세요환불해주세요환불해주세요환불해주세요환불해주세요환불해주세요환불해주세요불해주세요환불해주세요환불해주세요환불해주세요환불해주세요환불해주세요환불해주세요환불해주세요환불해주세요환불해주세요환불해주세요환불해주세요환불해주세요환불해주세요환불해주세요환불해주세요환불해주세요
          </span>
          <small className="ml-auto mr-2">2020-12-23</small>
        </div>

        <hr />
        <div className="row">
          <small className="mr-auto mr-2 mb-1" style={{ color: "purple" }}>
            세로포스트
          </small>
          <span>
            응그래응그래응그래응그래응그래응그래응그래응그래응그래응그래응그래응그래응그래응그래응그래응그래응그래응그래응그래응그래응그래응그래응그래응그래응그래응그래응그래응그래응그래응그래응그래응그래응그래
          </span>
          <small className="ml-auto mr-2">2020-12-23</small>
        </div>
      </Modal.Body>
      <form>
        <textarea className="form-control" placeholder="답글하기"></textarea>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            취소
          </Button>
          <Button variant="primary" onClick={onHide}>
            답변하기
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
};

export default QuestionAnswer;
