import React, { Fragment } from "react";

const AdminAnswer = ({ answerItem }) => {
  return (
    <Fragment>
      <hr />
      <div className="row" style={{ alignItems: "center" }}>
        {answerItem.User.usGrant === 1 ? (
          <small className="mr-auto ml-2 mb-1" style={{ color: "purple" }}>
            세로포스트
          </small>
        ) : (
          <small className="mr-auto ml-2 mb-1" style={{ color: "red" }}>
            {answerItem.User.usName}
          </small>
        )}
        <span className="p-2">{answerItem.anContent}</span>
        <small className="ml-auto mr-2">
          {answerItem.createdAt.slice(0, 10)}
        </small>
      </div>
    </Fragment>
  );
};

export default AdminAnswer;
