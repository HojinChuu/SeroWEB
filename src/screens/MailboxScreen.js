import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Container, Image } from "react-bootstrap";
import { getSendPosts, getReceivePosts } from "../actions/mailPostActions";
import { paginate } from "../utils/paginate";
import {
  RECEIVE_POST_FETCH_SUCCESS,
  SEND_POST_FETCH_SUCCESS,
} from "../constants/mailPostConstants";

import Spinner from "../components/helpers/Spinner";
import ReceivedCardItem from "../components/mailbox/ReceivedCardItem";
import SentCardItem from "../components/mailbox/SentCardItem";
import Pagination from "../components/helpers/Pagination";
import SlideCard from "../components/mailbox/SlideCard";

const MailboxScreen = ({ history }) => {
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(false);

  const userLogin = useSelector((state) => state.userLogin);
  const sendPosts = useSelector((state) => state.sendPosts);
  const receivePosts = useSelector((state) => state.receivePosts);

  const { userInfo } = userLogin;
  const {
    loading: sentPostLoading,
    sentPosts,
    postCount: sentPostCount,
    pageSize: sentPageSize,
    currentPage: sentCurrentPage,
  } = sendPosts;
  const {
    loading: receivedPostLoading,
    receivedPosts,
    postCount: receivedPostCount,
    pageSize: receivedPageSize,
    currentPage: receivedCurrentPage,
  } = receivePosts;

  useEffect(() => {
    if (!userInfo && !localStorage.getItem("userToken")) {
      history.push("/");
    }
  }, [history, userInfo]);

  useEffect(() => {
    if (userInfo) {
      toggle
        ? dispatch(getSendPosts(userInfo.usId))
        : dispatch(getReceivePosts(userInfo.usId));
    }
  }, [dispatch, userInfo, toggle]);

  const sentPageChangeHandler = (page) => {
    dispatch({
      type: SEND_POST_FETCH_SUCCESS,
      payload: sentPosts,
      currentPage: page,
    });
  };

  const receivedPageChangeHandler = (page) => {
    dispatch({
      type: RECEIVE_POST_FETCH_SUCCESS,
      payload: receivedPosts,
      currentPage: page,
    });
  };

  const pagedSentPosts = paginate(sentPosts, sentCurrentPage, sentPageSize);
  const pagedReceivedPosts = paginate(
    receivedPosts,
    receivedCurrentPage,
    receivedPageSize
  );

  return (
    <Container>
      <div className="mt-4 text-right">
        <button
          className="btn btn-lg btn-light rounded"
          onClick={() => setToggle(!toggle)}
        >
          <span style={{ fontSize: "13px" }}>
            {toggle ? "받은 엽서 보기" : "보낸 엽서 보기"}
          </span>
        </button>
      </div>
      <Row className="justify-content-center cardContainer">
        {!toggle ? (
          receivedPostLoading || !receivedPosts ? (
            <Spinner />
          ) : receivedPosts.length === 0 ? (
            <Image
              src="/image/empty_post.png"
              width="40%"
              style={{ margin: "200px" }}
            />
          ) : (
            pagedReceivedPosts.map((receivedPost, index) => (
              <ReceivedCardItem receivedPost={receivedPost} key={index} />
            ))
          )
        ) : sentPostLoading || !sentPosts || !userInfo ? (
          <Spinner />
        ) : sentPosts.length === 0 ? (
          <Image
            src="/image/empty_post.png"
            width="40%"
            style={{ margin: "200px" }}
          />
        ) : (
          pagedSentPosts.map((sentPost, index) => (
            <SentCardItem sentPost={sentPost} userInfo={userInfo} key={index} />
          ))
        )}
      </Row>
      {receivedPosts && (
        <SlideCard slideReceivedPosts={receivedPosts}></SlideCard>
      )}
      <div className="mt-5 mb-5">
        {toggle ? (
          <Pagination
            itemsCount={sentPostCount}
            pageSize={sentPageSize}
            currentPage={sentCurrentPage}
            onPageChange={sentPageChangeHandler}
          />
        ) : (
          <Pagination
            itemsCount={receivedPostCount}
            pageSize={receivedPageSize}
            currentPage={receivedCurrentPage}
            onPageChange={receivedPageChangeHandler}
          />
        )}
      </div>
    </Container>
  );
};

export default MailboxScreen;
