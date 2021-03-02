import React from "react";
import { Fragment } from "react";

const QAComment = ({ item }) => {
  return (
    <Fragment>
      <div className="row ml-2 mr-2 p-2  rounded justify-content-between ">
        <div>{item.User.usName}</div>
        <div>{item.createdAt.slice(0, 10)}</div>
      </div>
      <div className="p-3 pb-4">{item.anContent}</div>
      <hr className="ml-3 mr-3" />
    </Fragment>
  );
};

export default QAComment;
