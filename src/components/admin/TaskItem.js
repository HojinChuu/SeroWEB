import React from "react";

const TaskItem = ({ task, getTaskValue, removeTaskValue }) => {
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
      <td>{task.seUsId}</td>
      <td>{task.seName}</td>
      <td>{task.seAddress}</td>
      <td>{task.seAddressNumber}</td>
      <td>{task.createdAt.slice(0, 10)}</td>
      <td>{task.seStatus}</td>
    </tr>
  );
};

export default TaskItem;
