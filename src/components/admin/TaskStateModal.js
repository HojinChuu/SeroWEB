import React, { useState } from "react";
import { Modal, Button, ButtonGroup, ToggleButton } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { updateTask } from "../../actions/adminActions";

const TaskStateModal = ({ show, onHide, seletedTask }) => {
  const [radioValue, setRadioValue] = useState("0");

  const dispatch = useDispatch();
  const radios = [
    { name: "수신대기", value: "0", classValue: "fa-pause-circle" },
    { name: "제작중", value: "1", classValue: "fa-edit" },
    { name: "배송중", value: "2", classValue: "fa-shipping-fast" },
    { name: "배송완료", value: "3", classValue: "fa-check" },
  ];

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(updateTask(parseInt(radioValue), seletedTask));
    onHide();
  };
  return (
    <Modal
      centered
      show={show}
      onHide={onHide}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>
          <h5>주문상태 변경</h5>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-center">
        <ButtonGroup toggle className="taskStateModal">
          {radios.map((radio, idx) => (
            <ToggleButton
              key={idx}
              type="radio"
              variant="light"
              name="radio"
              className="mr-1 ml-1 rounded"
              value={radio.value}
              checked={radioValue === radio.value}
              onChange={(e) => setRadioValue(e.currentTarget.value)}
            >
              <i className={"fas " + radio.classValue}></i>
              {"  "}
              {radio.name}
            </ToggleButton>
          ))}
        </ButtonGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>취소</Button>
        <Button variant="primary" onClick={submitHandler}>변경</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default TaskStateModal;
