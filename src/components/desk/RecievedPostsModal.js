import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Button, CardGroup, Image } from "react-bootstrap";
import { RECEIVE_QA_POST_FETCH_SUCCESS } from "../../constants/mailPostConstants";
import { getQAReceivePosts } from "../../actions/mailPostActions";
import { paginate } from "../../utils/paginate";

import Pagination from "../../components/helpers/Pagination";
import RecievedPostItem from "./RecievedPostItem";
import Loader from "../../components/helpers/Loader";
import NoPostItem from "./NoPostItem";

const RecievedPostsModal = ({ show, onHide, postRefHandler }) => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const receivePosts = useSelector((state) => state.receivePosts);

  const { userInfo } = userLogin;
  const {
    loading,
    receivedPosts,
    postCount: receivedPostCount,
    pageSize: receivedPageSize,
    currentPage: receivedCurrentPage,
  } = receivePosts;

  useEffect(() => {
    if (userInfo) {
      dispatch(getQAReceivePosts(userInfo.usId));
    }
  }, [dispatch, userInfo]);

  const receivedPageChangeHandler = (page) => {
    dispatch({
      type: RECEIVE_QA_POST_FETCH_SUCCESS,
      payload: receivedPosts,
      currentPage: page,
    });
  };

  const pagedReceivedPosts = paginate(
    receivedPosts,
    receivedCurrentPage,
    receivedPageSize
  );

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      centered
      backdrop="static"
      keyboard={false}
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
              <h5 style={textStyle}>받은 엽서함</h5>
            </div>
            <Image src="/image/seroLogo_sm.png" width="90px" height="22px" />
          </div>
          <CardGroup className="mt-5 pt-5 row justify-content-center">
            {receivedPosts && receivedPosts.length > 2 ? (
              pagedReceivedPosts.map((post, index) => (
                <RecievedPostItem
                  key={index}
                  post={post}
                  postRefHandler={postRefHandler}
                  onHide={onHide}
                />
              ))
            ) : receivedPosts && receivedPosts.length === 1 ? (
              <Fragment>
                <NoPostItem />
                <NoPostItem />
                {receivedPosts.map((post, index) => (
                  <RecievedPostItem
                    key={index}
                    post={post}
                    postRefHandler={postRefHandler}
                    onHide={onHide}
                  />
                ))}
              </Fragment>
            ) : receivedPosts && receivedPosts.length === 2 ? (
              <Fragment>
                <NoPostItem />
                {receivedPosts.map((post, index) => (
                  <RecievedPostItem
                    key={index}
                    post={post}
                    postRefHandler={postRefHandler}
                    onHide={onHide}
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
            {receivedPosts && (
              <Pagination
                itemsCount={receivedPostCount}
                pageSize={receivedPageSize}
                currentPage={receivedCurrentPage}
                onPageChange={receivedPageChangeHandler}
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
  background: "linear-gradient(to bottom, #ffc165 110px, #ffffff 0%)",
};

const textStyle = {
  color: "black",
  fontWeight: "400",
  lineHeight: "23px",
};

const cancleBtn = {
  backgroundColor: "#515151",
  border: "none",
};

export default RecievedPostsModal;
