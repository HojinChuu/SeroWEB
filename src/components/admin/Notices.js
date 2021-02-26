import React, { useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getNotices } from "../../actions/adminActions";

import NoticeItem from "../admin/NoticeItem";
import Loader from "../helpers/Loader";

const Notices = () => {
  const dispatch = useDispatch();
  const adminNotices = useSelector((state) => state.adminNotices);
  const { loading, notices, success } = adminNotices;

  useEffect(() => {
    dispatch(getNotices());
  }, [dispatch, success]);

  return (
    <Fragment>
      <div className="row p-4">
        <div className="row mr-auto">
          <button
            onClick={() => dispatch(getNotices())}
            className="btn btn-outline-dark rounded"
          >
            <i className="fas fa-redo-alt"></i>
          </button>
        </div>
        <div className="row ml-auto">
          <Link to="/admin/notices/create">
            <button className="btn btn-outline-dark rounded">CREATE</button>
          </Link>
        </div>
      </div>
      <div className="table-responsive">
        <table className="table table-striped table-lg">
          <thead>
            <tr className="text-center">
              <th>NO.</th>
              <th>제목</th>
              <th>작성일</th>
              <th>삭제</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr style={{ backgroundColor: "transparent" }}>
                <td colSpan="4">
                  <Loader />
                </td>
              </tr>
            ) : (
              notices &&
              notices.map((notice, index) => (
                <NoticeItem notice={notice} key={notice.noId} index={index} />
              ))
            )}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

export default Notices;
