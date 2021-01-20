import React, { Fragment, useEffect, useState } from "react";
import { ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getTasks, removeTask } from "../../actions/adminAction";

import TaskItem from "./TaskItem";
import Loader from "../helpers/Loader";
import TaskStateModal from "../admin/TaskStateModal";

const Tasks = () => {
  let taskArray = [];
  const [taskState, setTaskState] = useState([]);
  const [target, setTarget] = useState(0);
  const [searchText, setSearchText] = useState("");
  const [show, setShow] = useState(false);
  const [disable, setDisable] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();
  const adminTasks = useSelector((state) => state.adminTasks);
  const { loading, tasks } = adminTasks;

  useEffect(() => {
    dispatch(getTasks({}));
  }, [dispatch]);

  const btnStateHandler = () => {
    taskArray.length !== 0 ? setDisable(false) : setDisable(true);
  };

  const refreshHandler = () => {
    dispatch(getTasks({}));
    setDisable(true);
  };

  const getTaskValue = (taskValue) => {
    taskArray.push(taskValue);
    btnStateHandler();
  };

  const removeTaskValue = (taskValue) => {
    const index = taskArray.indexOf(taskValue);
    if (index > -1) {
      taskArray.splice(index, 1);
    }
    btnStateHandler();
    taskArray.length !== 0 ? setDisable(false) : setDisable(true);
  };

  const removeTaskHandler = () => {
    dispatch(removeTask(taskArray));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(getTasks({ taskState, target, searchText }));
  };
  return (
    <Fragment>
      <div className="row p-4">
        <div className="row mr-auto">
          <button
            onClick={refreshHandler}
            className="btn btn-outline-dark rounded"
          >
            <i className="fas fa-redo-alt"></i>
          </button>
          <button
            className="btn btn-outline-primary rounded mr-2 ml-2"
            disabled={disable}
            onClick={handleShow}
          >
            변경
          </button>
          <button
            onClick={removeTaskHandler}
            className="btn btn-outline-danger rounded"
            disabled={disable}
          >
            삭제
          </button>
        </div>
        <form onSubmit={submitHandler} className="row ml-auto ml-3 toggle">
          <ToggleButtonGroup type="checkbox" onChange={(e) => setTaskState(e)}>
            <ToggleButton variant="light" value={0}>
              수신대기
            </ToggleButton>
            <ToggleButton variant="light" value={1}>
              제작중
            </ToggleButton>
            <ToggleButton variant="light" value={2}>
              배송중
            </ToggleButton>
            <ToggleButton variant="light" value={3}>
              배송완료
            </ToggleButton>
          </ToggleButtonGroup>

          <select
            className="form-select ml-2"
            onChange={(e) => setTarget(e.target.value)}
          >
            <option value={0}>전체</option>
            <option value={1}>번호</option>
            <option value={2}>주소</option>
          </select>
          <div>
            <input
              className="form-control"
              onChange={(e) => setSearchText(e.target.value)}
            />
          </div>
          <button className="btn btn-sm btn-dark" type="submit">
            검색
          </button>
        </form>
      </div>
      <div className="table-responsive">
        <table className="table table-striped table-lg">
          <thead>
            <tr className="text-center">
              <th>선택</th>
              <th>번호</th>
              <th>유저</th>
              <th>주소</th>
              <th>우편번호</th>
              <th>전송날짜</th>
              <th>배송상태</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr style={{ backgroundColor: "transparent" }}>
                <td colSpan="7">
                  <Loader />
                </td>
              </tr>
            ) : (
              <>
                {tasks &&
                  tasks.map((task) => (
                    <TaskItem
                      task={task}
                      key={task.seId}
                      getTaskValue={getTaskValue}
                      removeTaskValue={removeTaskValue}
                    />
                  ))}
              </>
            )}
          </tbody>
        </table>
      </div>
      <TaskStateModal
        show={show}
        onHide={handleClose}
        seletedTask={taskArray}
      />
    </Fragment>
  );
};

export default Tasks;
