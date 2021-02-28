import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getQas } from "../../actions/deskActions";
import { DESK_QA_FETCH_SUCCESS } from "../../constants/deskConstants";
import { paginate } from "../../utils/paginate";

import QAitem from "./QAitem";
import Loader from "../helpers/Loader";
import Pagination from "../helpers/Pagination";

const QAs = ({ history }) => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const fetchQas = useSelector((state) => state.fetchQas);
  const { loading, qas, qasCount, pageSize, currentPage } = fetchQas;
  const { userInfo } = userLogin;

  useEffect(() => {
    dispatch(getQas());
  }, [history, dispatch]);

  const pageChangeHandler = (page) => {
    dispatch({
      type: DESK_QA_FETCH_SUCCESS,
      payload: qas,
      currentPage: page,
    });
  };

  const pagedQas = paginate(qas, currentPage, pageSize);

  return (
    <Fragment>
      <div className="row mt-4">
        <div className="col">
          <h1 id="deskTitle">Q&A.</h1>
        </div>
        {userInfo && (
          <Link
            to="/desk/qa/create"
            className="btn btn-dark rounded mr-3 mb-3 pl-4 pr-4"
            style={{ backgroundColor: "#515151" }}
          >
            작성하기
          </Link>
        )}
      </div>
      <div className="table-responsive">
        <table className="deskTable">
          <thead>
            <tr className="text-center">
              <th>NO.</th>
              <th>분류</th>
              <th>제목</th>
              <th>작성자</th>
              <th>작성일</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="5">
                  <Loader />
                </td>
              </tr>
            ) : qas && qas.length !== 0 ? (
              pagedQas.map((qaItem, index) => (
                <QAitem
                  qaItem={qaItem}
                  key={index}
                  index={index}
                  history={history}
                />
              ))
            ) : (
              <tr className="text-center">
                <td colSpan="5" id="deskEmpty">
                  게시글이 없습니다.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="mt-5 mb-5">
        {qas && (
          <Pagination
            itemsCount={qasCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={pageChangeHandler}
          />
        )}
      </div>
    </Fragment>
  );
};

export default QAs;
