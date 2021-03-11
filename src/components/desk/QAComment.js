import React, { Fragment } from "react";

const QAComment = ({ item, userInfo }) => {
  return (
    <Fragment>
      <div className="row ml-2 mr-2 p-2 rounded justify-content-between">
        <div>
          {item.User.usGrant === 1
            ? "세로엽서(SEROPOST)"
            : (userInfo && item.quUsId === userInfo.usId) ||
              (userInfo && userInfo.usGrant === 1)
            ? item.User.usName
            : item.User.usName.slice(0, -2) + "***"}
        </div>
        <div>{item.createdAt.slice(0, 10)}</div>
      </div>
      <div className="p-3 pb-4">{item.anContent}</div>
      <hr className="ml-3 mr-3" />
    </Fragment>
  );
};

export default QAComment;
