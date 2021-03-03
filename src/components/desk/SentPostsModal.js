import React, { useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Button, CardGroup, Image } from "react-bootstrap";
import { SEND_QA_POST_FETCH_SUCCESS } from "../../constants/mailPostConstants";
import { getQASendPosts } from "../../actions/mailPostActions";
import { paginate } from "../../utils/paginate";

import Pagination from "../../components/helpers/Pagination";
import Loader from "../../components/helpers/Loader";
import SentPostItem from "./SentPostItem";
import NoPostItem from "./NoPostItem";

const SentPostsModal = ({ show, onHide, postRefHandler }) => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const sendPosts = useSelector((state) => state.sendPosts);

  const { userInfo } = userLogin;
  const {
    loading,
    sentPosts,
    postCount: sentPostCount,
    pageSize: sentPageSize,
    currentPage: sentCurrentPage,
  } = sendPosts;

  useEffect(() => {
    if (userInfo) {
      dispatch(getQASendPosts(userInfo.usId));
    }
  }, [dispatch, userInfo]);

  const sentPageChangeHandler = (page) => {
    dispatch({
      type: SEND_QA_POST_FETCH_SUCCESS,
      payload: sentPosts,
      currentPage: page,
    });
  };

  const pagedSentPosts = paginate(sentPosts, sentCurrentPage, sentPageSize);

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      centered
      backdrop="static"
      keyboard={false}
      scrollable
    >
      {loading ? (
        <Loader />
      ) : (
        <Modal.Body className="pl-5 pr-5 pt-5" style={modalStyle}>
          <div className="row justify-content-between pl-3 pr-3">
            <div className="row pl-3">
              <Image
                src="/image/modalHead.png"
                width="30px"
                height="22px"
                className="mr-2"
              />
              <h5 style={textStyle}>보낸 엽서함</h5>
            </div>
            <Image src="/image/seroLogo_sm.png" width="90px" height="22px" />
          </div>
          <CardGroup className="mt-5 row justify-content-center">
            {sentPosts && sentPosts.length > 2 ? (
              pagedSentPosts.map((post, index) => (
                <SentPostItem
                  key={index}
                  post={post}
                  postRefHandler={postRefHandler}
                  onHide={onHide}
                  userInfo={userInfo}
                />
              ))
            ) : sentPosts && sentPosts.length === 1 ? (
              <Fragment>
                <NoPostItem />
                <NoPostItem />
                {sentPosts.map((post, index) => (
                  <SentPostItem
                    key={index}
                    post={post}
                    postRefHandler={postRefHandler}
                    onHide={onHide}
                    userInfo={userInfo}
                  />
                ))}
              </Fragment>
            ) : sentPosts && sentPosts.length === 2 ? (
              <Fragment>
                <NoPostItem />
                {sentPosts.map((post, index) => (
                  <SentPostItem
                    key={index}
                    post={post}
                    postRefHandler={postRefHandler}
                    onHide={onHide}
                    userInfo={userInfo}
                  />
                ))}
              </Fragment>
            ) : (
              <Fragment>
                <NoPostItem />
                <NoPostItem />
                <NoPostItem />
              </Fragment>
            )}
          </CardGroup>
          <div className="mt-5">
            {sentPosts && (
              <Pagination
                itemsCount={sentPostCount}
                pageSize={sentPageSize}
                currentPage={sentCurrentPage}
                onPageChange={sentPageChangeHandler}
              />
            )}
          </div>
          <div className="row pr-3 mb-3 justify-content-end">
            <Button
              onClick={onHide}
              className="pl-4 pr-4 rounded"
              style={cancleBtn}
            >
              취소
            </Button>
          </div>
        </Modal.Body>
      )}
    </Modal>
  );
};

const modalStyle = {
  background: "linear-gradient(to bottom, #4e6f64 50%, #ffffff 50%)",
};

const textStyle = {
  color: "white",
  fontWeight: "400",
  lineHeight: "23px",
};

const cancleBtn = {
  backgroundColor: "#515151",
  border: "none",
};

export default SentPostsModal;
