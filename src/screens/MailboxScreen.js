import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Container } from "react-bootstrap";
import { getSendPosts, getReceivePosts } from "../actions/mailPostActions";
import Spinner from "../components/helpers/Spinner";
import ReceivedCardItem from "../components/mailbox/ReceivedCardItem";
import SentCardItem from "../components/mailbox/SentCardItem";

const MailboxScreen = () => {
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(false);

  const userLogin = useSelector((state) => state.userLogin);
  const sendPosts = useSelector((state) => state.sendPosts);
  const receivePosts = useSelector((state) => state.receivePosts);

  const { userInfo } = userLogin;
  const { loading: sentPostLoading, sentPosts } = sendPosts;
  const { loading: receivedPostLoading, receivedPosts } = receivePosts;

  useEffect(() => {
    if (userInfo) {
      if (toggle) {
        dispatch(getSendPosts(userInfo.usId));
      } else {
        dispatch(getReceivePosts(userInfo.usId));
      }
    }
  }, [dispatch, userInfo, toggle]);

  const toogleHandler = () => {
    setToggle(!toggle);
  };

  return (
    <Container>
      <div className="mt-4 text-right">
        <button className="btn btn-lg btn-light" onClick={toogleHandler}>
          <span style={{ fontSize: "13px" }}>
            {toggle ? "받은 엽서 보기" : "보낸 엽서 보기"}
          </span>
        </button>
      </div>
      <Row className="justify-content-center cardContainer mb-5 pb-5">
        {!toggle ? (
          receivedPostLoading || !receivedPosts ? (
            <Spinner />
          ) : (
            receivedPosts.map((receivedPost, index) => (
              <ReceivedCardItem receivedPost={receivedPost} key={index} />
            ))
          )
        ) : sentPostLoading || !sentPosts || !userInfo ? (
          <Spinner />
        ) : (
          sentPosts.map((sentPost, index) => (
            <SentCardItem sentPost={sentPost} userInfo={userInfo} key={index} />
          ))
        )}
      </Row>
    </Container>
  );
};

export default MailboxScreen;
