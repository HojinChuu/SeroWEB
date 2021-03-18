import React, { useEffect, useState } from "react";
import { Image } from "react-bootstrap";

const QAitem = ({ qaItem, history, userInfo }) => {
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
      <td>{qaItem.quId}</td>
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
        {qaItem.quTitle}
      </td>
      <td>
        {qaItem.quUsId === usId || (userInfo && userInfo.usGrant === 1)
          ? qaItem.User.usName
          : qaItem.User.usName.slice(0, -2) + "***"}
      </td>
      <td>{qaItem.createdAt.slice(0, 10).replaceAll("-", ".")}</td>
    </tr>
  );
};

export default QAitem;