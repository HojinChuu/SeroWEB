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
  WRITTEN_POST_FETCH_SUCCESS,
  SEND_POST_FETCH_SUCCESS,
} from "../constants/mailPostConstants";
import {
  getWrittenPosts,
  getReceivePosts,
  getSendPosts,
} from "../actions/mailPostActions";
import { paginate } from "../utils/paginate";

import Spinner from "../components/helpers/Spinner";
import ReceivedCardItem from "../components/mailbox/ReceivedCardItem";
import WrittenCardItem from "../components/mailbox/WrittenCardItem";
import SentCardItem from "../components/mailbox/SentCardItem";
import Pagination from "../components/helpers/Pagination";
import SlideCard from "../components/mailbox/SlideCard";
import SlideReceivedCardItem from "../components/mailbox/SlideReceivedCardItem";
import SlideWrittenCardItem from "../components/mailbox/SlideWrittenCardItem";
import SlideSentCardItem from "../components/mailbox/SlideSentCardItem";

const MailboxScreen = ({ history }) => {
  const [postToggle, setPostToggle] = useState(1);
  const [viewToggle, setViewToggle] = useState(false);

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const writtenPosts = useSelector((state) => state.writtenPosts);
  const receivePosts = useSelector((state) => state.receivePosts);
  const sendPosts = useSelector((state) => state.sendPosts);

  const { userInfo } = userLogin;
  const {
    loading: writtenPostLoading,
    writePosts,
    postCount: writtenPostCount,
    pageSize: writtenPageSize,
    currentPage: writtenCurrentPage,
  } = writtenPosts;
  const {
    loading: receivedPostLoading,
    receivedPosts,
    postCount: receivedPostCount,
    pageSize: receivedPageSize,
    currentPage: receivedCurrentPage,
  } = receivePosts;
  const {
    loading: sentPostLoading,
    sentPosts,
    postCount: sentPostCount,
    pageSize: sentPageSize,
    currentPage: sentCurrentPage,
  } = sendPosts;

  useEffect(() => {
    if (!userInfo && !localStorage.getItem("userToken")) {
      history.push("/");
    }
  }, [history, userInfo]);

  useEffect(() => {
    if (userInfo) {
      postToggle === 0
        ? dispatch(getWrittenPosts(userInfo.usId))
        : postToggle === 1
        ? dispatch(getReceivePosts(userInfo.usId))
        : dispatch(getSendPosts(userInfo.usId));
    }
  }, [dispatch, userInfo, postToggle]);

  const writtenPageChangeHandler = (page) => {
    dispatch({
      type: WRITTEN_POST_FETCH_SUCCESS,
      payload: sentPosts,
      currentPage: page,
    });
  };

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

  const pagedWrittenPosts = paginate(
    writePosts,
    writtenCurrentPage,
    writtenPageSize
  );
  const pagedReceivedPosts = paginate(
    receivedPosts,
    receivedCurrentPage,
    receivedPageSize
  );
  const pagedSentPosts = paginate(sentPosts, sentCurrentPage, sentPageSize);

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
            <DropdownButton
              id="postToggle"
              title={
                postToggle === 0
                  ? "제작한 엽서"
                  : postToggle === 1
                  ? "받은 엽서"
                  : "보낸 엽서"
              }
            >
              <Dropdown.Item onClick={() => setPostToggle(0)}>
                제작한 엽서
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setPostToggle(1)}>
                받은 엽서
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setPostToggle(2)}>
                보낸 엽서
              </Dropdown.Item>
            </DropdownButton>
          </div>
        </div>
      </Container>
      <div className={viewToggle ? "" : "container"}>
        <Row className="justify-content-center cardContainer">
          {postToggle === 1 ? (
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
          ) : postToggle === 0 ? (
            writtenPostLoading || !writePosts || !userInfo ? (
              <Spinner />
            ) : writePosts.length === 0 ? (
              <Image
                src="/image/empty_post.png"
                width={viewToggle ? "33.4%" : "40%"}
                style={{ marginTop: "200px" }}
              />
            ) : viewToggle ? (
              <SlideCard>
                <div className="swiper-wrapper">
                  {writePosts.map((item, index) => (
                    <SlideWrittenCardItem
                      slideWrittenPost={item}
                      userInfo={userInfo}
                      key={index}
                    />
                  ))}
                </div>
              </SlideCard>
            ) : (
              pagedWrittenPosts.map((writtenPost, index) => (
                <WrittenCardItem
                  writtenPost={writtenPost}
                  userInfo={userInfo}
                  key={index}
                />
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
          {postToggle === 0 && !viewToggle ? (
            <Pagination
              itemsCount={writtenPostCount}
              pageSize={writtenPageSize}
              currentPage={writtenCurrentPage}
              onPageChange={writtenPageChangeHandler}
            />
          ) : postToggle === 1 && !viewToggle ? (
            <Pagination
              itemsCount={receivedPostCount}
              pageSize={receivedPageSize}
              currentPage={receivedCurrentPage}
              onPageChange={receivedPageChangeHandler}
            />
          ) : (
            <Pagination
              itemsCount={sentPostCount}
              pageSize={sentPageSize}
              currentPage={sentCurrentPage}
              onPageChange={sentPageChangeHandler}
            />
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default MailboxScreen;
