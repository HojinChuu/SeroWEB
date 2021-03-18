import React from "react";
import { Card, Row } from "react-bootstrap";
import { IMAGE_URL } from "../../config";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const SentPostItem = ({ post, postRefHandler, onHide, userInfo }) => {
  const { width } = useWindowDimensions();

  const onClickHandler = () => {
    postRefHandler(post.poId);
    onHide();
  };

  return (
    <Card
      className={width > 990 ? "col col-4" : "col col-10"}
      style={cardStyle}
      id="modalPostCard"
      onClick={onClickHandler}
    >
      <Card.Img
        variant="top"
        src={IMAGE_URL + "/" + post.poPhoto}
        width="100%"
        height="350px"
      />
      <div id="flipCardTitle">
        <button className="btn btn-block pr-4 pl-4 ml-2">
          <Row className="justify-content-between align-items-center">
            <Row className="align-items-center">
              <span>보낸이:</span>
              <span className="ml-1">{userInfo.usName}</span>
            </Row>
            <span>{post.createdAt.slice(0, 10).replaceAll("-", ".")}</span>
          </Row>
        </button>
      </div>
    </Card>
  );
};

const cardStyle = {
  border: "none",
  backgroundColor: "transparent",
};

export default SentPostItem;
