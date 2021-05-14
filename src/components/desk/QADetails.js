import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import { DESK_QA_FETCH_COMMENT_SUCCESS } from "../../constants/deskConstants";
import {
  createQAComment,
  getQAComments,
  getQAPost,
} from "../../actions/deskActions";
import { paginate } from "../../utils/paginate";

import Loader from "../helpers/Loader";
import QAComment from "./QAComment";
import Pagination from "../helpers/Pagination";
import RefImageModal from "./RefImageModal";

const QADetails = ({ history, match }) => {
  const location = useLocation();

  const qaItem = location.state.qaItem;
  const userInfo = location.state.userInfo;

  const [show, setShow] = useState(false);
  const [comment, setComment] = useState("");
  const handleClose = () => setShow(false);

  const dispatch = useDispatch();
  const deskQas = useSelector((state) => state.deskQas);
  const {
    loading,
    comments,
    commentsCount,
    pageSize,
    currentPage,
    success,
    refPost,
    postLoading,
  } = deskQas;
  const [refPostData, setRefPostData] = useState();

  useEffect(() => {
    if (refPost) {
      setRefPostData(refPost);
    }
  }, [refPost]);

  useEffect(() => {
    if (match.params.id) {
      dispatch(getQAComments(parseInt(match.params.id)));
    }
    if (qaItem.Send !== null) {
      dispatch(getQAPost(qaItem.Send.sePoId, qaItem.quSeId));
    }
    if (success) {
      dispatch({ type: DESK_QA_FETCH_COMMENT_SUCCESS });
    }
    // eslint-disable-next-line
  }, [history, dispatch, success, qaItem.Send, qaItem]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (comment !== "") {
      dispatch(createQAComment(userInfo.usId, match.params.id, comment));
      setComment("");
    }
  };

  const pageChangeHandler = (page) => {
    dispatch({
      type: DESK_QA_FETCH_COMMENT_SUCCESS,
      payload: comments,
      currentPage: page,
    });
  };

  const pagedComments = paginate(comments, currentPage, pageSize);

  return (
    <Fragment>
      <h1 id="deskTitle">Q&A.</h1>
      <div style={headerStyle}>
        <div className="row mb-3">
          <div className="col">
            <span>제목</span>
            <span style={{ marginLeft: "40px" }}>{qaItem.quTitle}</span>
          </div>
          {qaItem.Send !== null ? (
            postLoading ? (
              <Spinner
                animation="border"
                variant="light"
                className="mr-4"
                size="sm"
              />
            ) : (
              <button
                className="btn btn-sm btn-outline-dark mr-2"
                style={{ lineHeight: "11px" }}
                onClick={() => setShow(true)}
              >
                <span style={{ fontSize: "12px" }}>첨부엽서</span>
              </button>
            )
          ) : (
            <></>
          )}
        </div>
        <div className="row justify-content-between">
          <div className="col">
            <span>작성자</span>
            <span style={{ marginLeft: "28px" }}>
              {(userInfo && qaItem.quUsId === userInfo.usId) ||
              (userInfo && userInfo.usGrant === 1)
                ? qaItem.User.usName
                : qaItem.User.usName.slice(0, -2) + "***"}
            </span>
          </div>
          <span>
            작성일{" "}
            <span style={dateStyle}>{qaItem.createdAt.slice(0, 10)}</span>
          </span>
        </div>
      </div>
      <div style={bodyStyle}>
        <span>{qaItem.quContent}</span>
      </div>
      <div className="row justify-content-end mb-3 p-3">
        <button
          className="btn btn-sm btn-light"
          onClick={() => history.go(-1)}
          style={buttonStyle}
        >
          목록
        </button>
      </div>
      {comments && comments.length !== 0 && (
        <h5
          className="mb-2"
          style={{
            color: "#404040",
            fontSize: "18px",
            fontWeight: "400",
            marginLeft: "10px",
          }}
        >
          댓글 {comments && comments.length}
        </h5>
      )}
      {userInfo && userInfo.usId === qaItem.quUsId && (
        <form className="pr-4 pl-4" onSubmit={onSubmitHandler}>
          <div className="row">
            <div className="col" style={{ margin: 0, padding: 0 }}>
              <textarea
                type="text"
                className="form-control pr-4 pt-2"
                rows="4"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                style={{ resize: "none" }}
                required
              />
            </div>
            <input
              type="submit"
              value="댓글입력"
              className="btn btn-dark p-4"
              style={{ fontSize: "12px" }}
              disabled={!comment}
            />
          </div>
        </form>
      )}

      <div className="mb-3 pb-5">
        {comments && comments.length !== 0 && (
          <hr
            style={{ border: "solid 1px #bab9b9" }}
            className="ml-2 mr-2 mt-4 mb-5"
          />
        )}
        {loading ? (
          <Loader />
        ) : (
          comments &&
          comments.length !== 0 && (
            <div
              style={{ background: "#f9f8f7", border: "1px solid #b1b1b1" }}
              className="pl-3 pr-3 pt-4 rounded"
            >
              {pagedComments.map((item, index) => (
                <QAComment item={item} key={index} userInfo={userInfo} />
              ))}
            </div>
          )
        )}
        <div className="mt-5 mb-5">
          {comments && (
            <Pagination
              itemsCount={commentsCount}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={pageChangeHandler}
            />
          )}
        </div>
      </div>
      {refPostData && (
        <RefImageModal
          show={show}
          onHide={handleClose}
          refPost={refPostData}
          categoryId={qaItem.Category.caId}
        />
      )}
    </Fragment>
  );
};

const headerStyle = {
  borderTop: "solid 2px #707070",
  padding: "15px",
};

const dateStyle = {
  color: "#8d8d8d",
  fontSize: "15px",
  letterSpacing: "-0.3px",
};

const bodyStyle = {
  borderTop: "solid 2px #b1b1b1",
  borderBottom: "solid 2px #b1b1b1",
  height: "300px",
  padding: "3% 7% 3% 7%",
  fontSize: "16px",
  wordBreak: "break-all",
  overflow: "auto",
};

const buttonStyle = {
  width: "80px",
  border: "solid 1px #b1b1b1",
};

export default QADetails;
