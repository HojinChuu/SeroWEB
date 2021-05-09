import React, { useEffect, useState, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Row,
  Container,
  Image,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import {
  RECEIVE_POST_FETCH_SUCCESS,
  SEND_POST_FETCH_SUCCESS,
} from "../constants/mailPostConstants";
import { getSendPosts, getReceivePosts } from "../actions/mailPostActions";
import { paginate } from "../utils/paginate";

import Spinner from "../components/helpers/Spinner";
import ReceivedCardItem from "../components/mailbox/ReceivedCardItem";
import SentCardItem from "../components/mailbox/SentCardItem";
import Pagination from "../components/helpers/Pagination";
import SlideCard from "../components/mailbox/SlideCard";
import SlideReceivedCardItem from "../components/mailbox/SlideReceivedCardItem";
import SlideSentCardItem from "../components/mailbox/SlideSentCardItem";

const MailboxScreen = ({ history }) => {
  const [toggle, setToggle] = useState(false);
  const [viewToggle, setViewToggle] = useState(false);

  const dispatch = useDispatch();
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
        <div className="row justify-content-between pl-3 pr-3 mb-2 mt-5">
          <DropdownButton
            id="slideBtn"
            title={viewToggle ? "Slide view" : "Gallery view"}
          >
            <Dropdown.Item onClick={() => setViewToggle(false)}>
              Gallery view
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setViewToggle(true)}>
              Slide view
            </Dropdown.Item>
          </DropdownButton>
          <div>
            <button
              className="btn btn-light p-2 pl-3 pr-3 mr-2"
              onClick={() => setToggle(!toggle)}
              disabled={toggle}
              style={toggle ? postBtnActive : postBtn}
            >
              <span style={{ fontSize: "13px" }}>제작한 엽서</span>
            </button>
            <button
              className="btn btn-light p-2 pl-3 pr-3"
              onClick={() => setToggle(!toggle)}
              disabled={!toggle}
              style={!toggle ? postBtnActive : postBtn}
            >
              <span style={{ fontSize: "13px" }}>받은 엽서</span>
            </button>
          </div>
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
                width={viewToggle ? "23.4%" : "40%"}
                style={{ marginTop: "200px" }}
              />
            ) : viewToggle ? (
              <SlideCard>
                <div className="swiper-wrapper">
                  {receivedPosts.map((item, index) => (
                    <SlideReceivedCardItem
                      slideReceivedPost={item}
                      key={index}
                    />
                  ))}
                </div>
              </SlideCard>
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
              width={viewToggle ? "33.4%" : "40%"}
              style={{ marginTop: "200px" }}
            />
          ) : viewToggle ? (
            <SlideCard>
              <div className="swiper-wrapper">
                {sentPosts.map((item, index) => (
                  <SlideSentCardItem
                    slideSentPost={item}
                    userInfo={userInfo}
                    key={index}
                  />
                ))}
              </div>
            </SlideCard>
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

const postBtn = {
  backgroundColor: "#e0dfde",
  border: "none",
  borderRadius: "10px",
};

const postBtnActive = {
  backgroundColor: "#4e6f64",
  color: "white",
  borderRadius: "10px",
  opacity: 1,
};

export default MailboxScreen;
