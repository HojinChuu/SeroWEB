import React, { useEffect, useState } from "react";
import { Image } from "react-bootstrap";

const QAitem = ({ qaItem, index, history, userInfo }) => {
  const [usId, setUsId] = useState(0);

  useEffect(() => {
    if (userInfo) {
      setUsId(userInfo.usId);
    }
  }, [history, userInfo]);

  const handleClick = () => {
    if (qaItem.quShow === 0 || qaItem.quUsId === usId) {
      history.push({
        pathname: `/desk/qa/detail/${qaItem.quId}`,
        state: { qaItem, userInfo },
      });
    }
  };

  return (
    <tr className="text-center" onClick={handleClick}>
      <td>{index + 1}</td>
      <td>{qaItem.Category.caContent}</td>
      <td>
        {qaItem.quShow === 1 && qaItem.quUsId !== usId && (
          <Image
            src="/image/locked.png"
            width="15"
            height="15"
            className="mr-2 mb-1"
          />
        )}
        {qaItem.quContent}
      </td>
      <td>{qaItem.User.usName}</td>
      <td>{qaItem.createdAt.slice(0, 10).replaceAll("-", ".")}</td>
    </tr>
  );
};

export default QAitem;
