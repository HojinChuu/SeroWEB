import React, { Fragment } from "react";

const NoticeItem = () => {
  return (
    <Fragment>
      <tr className="text-center">
        <td>1</td>
        <td>세로엽서</td>
        <td>추호진</td>
      </tr>
      <tr className="text-center">
        <td>1</td>
        <td>세로엽서</td>
        <td>추호진</td>
      </tr>
      <tr className="text-center">
        <td>1</td>
        <td>세로엽서</td>
        <td>추호진</td>
      </tr>
      <tr className="text-center">
        <td colSpan="3" id="deskEmpty">
          게시글이 없습니다.
        </td>
      </tr>
    </Fragment>
  );
};

export default NoticeItem;
