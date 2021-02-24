import React from "react";

const NoticeItem = ({ notice, index }) => {
  return (
    <tr className="text-center">
      <td>{index + 1}</td>
      <td>{notice.noTitle}</td>
      <td>{notice.createdAt.slice(0, 10).replaceAll("-", ".")}</td>
    </tr>
  );
};

export default NoticeItem;
