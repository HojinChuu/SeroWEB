import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const TaskItem = ({
  task,
  getTaskValue,
  removeTaskValue,
  handleImageShowHandler,
}) => {
  let shippingStatus = "";

  switch (task.seStatus) {
    case 1:
      shippingStatus = "제작중";
      break;
    case 2:
      shippingStatus = "집하완료";
      break;
    default:
      shippingStatus = "수신대기";
  }

  const onClickHandler = () => {
    handleImageShowHandler(task);
  };

  const renderTooltip = (
    <Tooltip id="button-tooltip">
      <div className="p-2">
        <span>{task.seAddress + " " + task.seAddressDetail}</span>
      </div>
    </Tooltip>
  );

  return (
    <tr className="text-center" id="taskColumn" onClick={onClickHandler}>
      <td>
        <input
          className="mt-1"
          type="checkbox"
          onChange={(e) =>
            e.target.checked
              ? getTaskValue(task.seId)
              : removeTaskValue(task.seId)
          }
        />
      </td>
      <td>{task.seId}</td>
      <td>{task.seName}</td>
      <td>
        <OverlayTrigger
          placement="right"
          delay={{ show: 200, hide: 200 }}
          overlay={renderTooltip}
        >
          <button className="btn btn-sm" id="adminAddressBtn">
            {task.seAddress}
          </button>
        </OverlayTrigger>
      </td>
      <td>{task.seAddressNumber}</td>
      <td>{task.createdAt.slice(0, 10)}</td>
      <td>{shippingStatus}</td>
    </tr>
  );
};

export default TaskItem;
