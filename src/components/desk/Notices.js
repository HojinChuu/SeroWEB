import React, { Fragment } from "react";

import NoticeItem from "./NoticeItem";

const Notices = () => {
  return (
    <Fragment>
      <h1 style={{ margin: 0, paddingTop: 0, marginBottom: "5px" }}>NOTICE.</h1>
      <div className="table-responsive">
        <table className="deskTable">
          <thead>
            <tr className="text-center">
              <th>NO.</th>
              <th>제목</th>
              <th>작성자</th>
            </tr>
          </thead>
          <tbody>
            <NoticeItem />
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

export default Notices;
