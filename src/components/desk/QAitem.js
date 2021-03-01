import React from "react";

const QAitem = ({ qaItem, index, history }) => {
  const handleClick = () => {
    history.push({
      pathname: `/desk/qa/detail/${qaItem.quId}`,
      state: { qaItem },
    });
  };
  return (
    <tr className="text-center" onClick={handleClick}>
      <td>{index + 1}</td>
      <td>{qaItem.Category.caContent}</td>
      <td>{qaItem.quContent}</td>
      <td>{qaItem.User.usName}</td>
      <td>{qaItem.createdAt.slice(0, 10).replaceAll("-", ".")}</td>
    </tr>
  );
};

export default QAitem;
