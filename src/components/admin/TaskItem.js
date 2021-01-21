import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const TaskItem = ({ task, getTaskValue, removeTaskValue }) => {
  let shippingStatus = "";

  if (task.seStatus === 0) {
    shippingStatus = "수신대기";
  } else if (task.seStatus === 1) {
    shippingStatus = "제작중";
  } else if (task.seStatus === 2) {
    shippingStatus = "배송중";
  } else if (task.seStatus === 3) {
    shippingStatus = "배송완료";
  }

  const renderTooltip = (
    <Tooltip id="button-tooltip">
      <div className="p-2">
        <span>{task.seAddress + " " + task.seAddressDetail}</span>
      </div>
    </Tooltip>
  );

  return (
    <tr className="text-center">
      <td>
        <input
          className="form-check-input"
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
          <button className="btn btn-sm">{task.seAddress}</button>
        </OverlayTrigger>
      </td>
      <td>{task.seAddressNumber}</td>
      <td>{task.createdAt.slice(0, 10)}</td>
      <td>{shippingStatus}</td>
    </tr>
  );
};

export default TaskItem;
