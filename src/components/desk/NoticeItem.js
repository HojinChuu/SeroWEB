import React from "react";

const NoticeItem = ({ notice, index, history }) => {
  const handleClick = () => {
    history.push({
      pathname: `/desk/notice/${notice.noId}`,
      state: { notice },
    });
  };

  return (
    <tr className="text-center" onClick={handleClick}>
      <td>{index + 1}</td>
      <td>
        {notice.noTitle.length > 4
          ? notice.noTitle.slice(0, 30) + "..."
          : notice.noTitle}
      </td>
      <td>{notice.createdAt.slice(0, 10).replaceAll("-", ".")}</td>
    </tr>
  );
};

export default NoticeItem;
