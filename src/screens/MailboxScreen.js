import React, { useEffect, useState, Fragment } from "react";
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
import SentSlideCard from "../components/mailbox/SentSlideCard";
import ReceivedSlideCard from "../components/mailbox/ReceivedSlideCard";

const MailboxScreen = ({ history }) => {
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(false);
  const [viewToggle, setViewToggle] = useState(false);

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
    <Fragment>
      <Container>
        <div className="mt-4 row justify-content-between">
          <button
            className="btn btn-lg btn-light rounded"
            onClick={() => setViewToggle(!viewToggle)}
          >
            <span style={{ fontSize: "13px" }}>
              {viewToggle ? "앨범으로 보기" : "슬라이드로 보기"}
            </span>
          </button>
          <button
            className="btn btn-lg btn-light rounded"
            onClick={() => setToggle(!toggle)}
          >
            <span style={{ fontSize: "13px" }}>
              {toggle ? "받은 엽서 보기" : "보낸 엽서 보기"}
            </span>
          </button>
        </div>
      </Container>
      <div className={viewToggle ? "" : "container"}>
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
            ) : viewToggle ? (
              <ReceivedSlideCard
                slideReceivedPosts={receivedPosts}
              ></ReceivedSlideCard>
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
          ) : viewToggle ? (
            <SentSlideCard
              slideSentPosts={sentPosts}
              userInfo={userInfo}
            ></SentSlideCard>
          ) : (
            pagedSentPosts.map((sentPost, index) => (
              <SentCardItem
                sentPost={sentPost}
                userInfo={userInfo}
                key={index}
              />
            ))
          )}
        </Row>

        <div className="mt-5 mb-5">
          {toggle && !viewToggle ? (
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
      </div>
    </Fragment>
  );
};

export default MailboxScreen;
