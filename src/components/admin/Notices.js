import React, { useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getNotices } from "../../actions/adminActions";
import { ADMIN_NOTICE_FETCH_SUCCESS } from "../../constants/adminConstants";
import { paginate } from "../../utils/paginate";

import NoticeItem from "../admin/NoticeItem";
import Loader from "../helpers/Loader";
import Pagination from "../helpers/Pagination";

const Notices = () => {
  const dispatch = useDispatch();
  const adminNotices = useSelector((state) => state.adminNotices);
  const {
    loading,
    notices,
    success,
    noticesCount,
    pageSize,
    currentPage,
  } = adminNotices;

  useEffect(() => {
    dispatch(getNotices());
  }, [dispatch, success]);

  const pageChangeHandler = (page) => {
    dispatch({
      type: ADMIN_NOTICE_FETCH_SUCCESS,
      payload: notices,
      currentPage: page,
    });
  };

  const pagedNotices = paginate(notices, currentPage, pageSize);

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
      <div className="table-responsive adminTable">
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
              pagedNotices.map((notice, index) => (
                <NoticeItem notice={notice} key={notice.noId} index={index} />
              ))
            )}
          </tbody>
        </table>
      </div>
      <div className="mt-5 mb-5">
        {notices && (
          <Pagination
            itemsCount={noticesCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={pageChangeHandler}
          />
        )}
      </div>
    </Fragment>
  );
};

export default Notices;
