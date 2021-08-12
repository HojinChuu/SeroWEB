import React, { Fragment, useEffect, useState } from "react";
import { ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getTasks, removeTask } from "../../actions/adminActions";
import { ADMIN_TASK_FETCH_SUCCESS } from "../../constants/adminConstants";
import { paginate } from "../../utils/paginate";

import TaskItem from "./TaskItem";
import Loader from "../helpers/Loader";
import TaskStateModal from "../admin/TaskStateModal";
import TaskImageModal from "../admin/TaskImageModal";
import Pagination from "../helpers/Pagination";

const Tasks = () => {
  const [taskArray, setTaskArray] = useState([]);
  const [seletedTask, setSelectTask] = useState([]);
  const [taskState, setTaskState] = useState([]);
  const [target, setTarget] = useState(0);
  const [searchText, setSearchText] = useState("");
  const [show, setShow] = useState(false);
  const [imageShow, setImageShow] = useState(false);
  const [taskItem, setTaskItem] = useState();
  const [disable, setDisable] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setSelectTask(taskArray);
    setShow(true);
  };

  const handleImageClose = () => setImageShow(false);
  const handleImageShow = (taskItem) => {
    setImageShow(true);
    setTaskItem(taskItem);
  };

  const dispatch = useDispatch();
  const adminTasks = useSelector((state) => state.adminTasks);
  const { loading, tasks, success, tasksCount, pageSize, currentPage } =
    adminTasks;

  useEffect(() => {
    dispatch(getTasks({}));
  }, [dispatch, success]);

  useEffect(() => {
    taskArray.length !== 0 ? setDisable(false) : setDisable(true);
  }, [taskArray, disable]);

  const refreshHandler = () => {
    dispatch(getTasks({}));
    setSearchText("");
    setDisable(true);
  };

  const getTaskValue = (taskValue) => {
    setTaskArray(taskArray.concat(taskValue));
  };

  const removeTaskValue = (taskValue) => {
    setTaskArray([
      ...taskArray.slice(0, taskArray.indexOf(taskValue)),
      ...taskArray.slice(taskArray.indexOf(taskValue) + 1, taskArray.length),
    ]);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setSearchText("");
    dispatch(getTasks({ taskState, target: parseInt(target), searchText }));
  };

  const pageChangeHandler = (page) => {
    dispatch({
      type: ADMIN_TASK_FETCH_SUCCESS,
      payload: tasks,
      currentPage: page,
    });
  };

  const pagedTasks = paginate(tasks, currentPage, pageSize);

  return (
    <Fragment>
      <div className="row justify-content-between p-4">
        <div className="row">
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
            onClick={() => dispatch(removeTask(taskArray))}
            className="btn btn-outline-danger rounded"
            disabled={disable}
          >
            삭제
          </button>
        </div>
        <form onSubmit={submitHandler} className="row ml-3 toggle">
          <ToggleButtonGroup type="checkbox" onChange={(e) => setTaskState(e)}>
            <ToggleButton variant="light" value={0}>
              수신대기
            </ToggleButton>
            <ToggleButton variant="light" value={1}>
              제작중
            </ToggleButton>
            <ToggleButton variant="light" value={2}>
              집하완료
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
              readOnly={target === 0}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </div>
          <button className="btn btn-sm btn-dark" type="submit">
            검색
          </button>
        </form>
      </div>
      <div className="table-responsive">
        <table className="table table-striped table-lg table-hover">
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
                  pagedTasks.map((task) => (
                    <TaskItem
                      task={task}
                      key={task.seId}
                      getTaskValue={getTaskValue}
                      removeTaskValue={removeTaskValue}
                      handleImageShowHandler={handleImageShow}
                    />
                  ))}
              </>
            )}
          </tbody>
        </table>
      </div>
      {tasks && (
        <Pagination
          itemsCount={tasksCount}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={pageChangeHandler}
        />
      )}
      <TaskStateModal
        show={show}
        onHide={handleClose}
        seletedTask={seletedTask}
      />
      {taskItem && (
        <TaskImageModal
          show={imageShow}
          onHide={handleImageClose}
          taskItem={taskItem}
        />
      )}
    </Fragment>
  );
};

export default Tasks;
