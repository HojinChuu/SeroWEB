import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DESK_NOTICE_FETCH_SUCCESS } from "../../constants/deskConstants";
import { getNotices } from "../../actions/deskActions";
import { paginate } from "../../utils/paginate";

import NoticeItem from "./NoticeItem";
import Loader from "../helpers/Loader";
import Pagination from "../helpers/Pagination";

const Notices = ({ history }) => {
  const dispatch = useDispatch();
  const deskNotices = useSelector((state) => state.deskNotices);
  const { loading, notices, noticesCount, pageSize, currentPage } = deskNotices;

  useEffect(() => {
    dispatch(getNotices());
  }, [history, dispatch]);

  const pageChangeHandler = (page) => {
    dispatch({
      type: DESK_NOTICE_FETCH_SUCCESS,
      payload: notices,
      currentPage: page,
    });
  };

  const pagedNotices = paginate(notices, currentPage, pageSize);

  return (
    <Fragment>
      <h1 id="deskTitle">NOTICE.</h1>
      <div className="table-responsive">
        <table className="deskTable">
          <thead>
            <tr className="text-center">
              <th>NO.</th>
              <th>제목</th>
              <th>작성일</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="3">
                  <Loader />
                </td>
              </tr>
            ) : notices && notices.length !== 0 ? (
              pagedNotices.map((notice, index) => (
                <NoticeItem
                  notice={notice}
                  key={notice.noId}
                  history={history}
                />
              ))
            ) : (
              <tr className="text-center">
                <td colSpan="3" id="deskEmpty">
                  게시글이 없습니다.
                </td>
              </tr>
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
