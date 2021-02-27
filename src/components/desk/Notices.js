import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNotices } from "../../actions/deskActions";

import NoticeItem from "./NoticeItem";
import Loader from "../helpers/Loader";

const Notices = ({ history }) => {
  const dispatch = useDispatch();
  const fetchNotices = useSelector((state) => state.fetchNotices);
  const { loading, notices } = fetchNotices;

  useEffect(() => {
    dispatch(getNotices());
  }, [history, dispatch]);

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
              notices.map((notice, index) => (
                <NoticeItem
                  notice={notice}
                  key={notice.noId}
                  index={index}
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
    </Fragment>
  );
};

export default Notices;
