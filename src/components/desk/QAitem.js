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
    if (userInfo && userInfo.usGrant === 1) {
      history.push({
        pathname: `/desk/qa/detail/${qaItem.quId}`,
        state: { qaItem, userInfo },
      });
    } else if (qaItem.quShow === 0 || qaItem.quUsId === usId) {
      history.push({
        pathname: `/desk/qa/detail/${qaItem.quId}`,
        state: { qaItem, userInfo },
      });
    }
  };

  const nickNameHandle = () => {
    if (qaItem) {
      let nickName = "";
      switch (qaItem.User.usName.length) {
        case 2:
          nickName = qaItem.User.usName.slice(0, -1) + "*";
          break;
        case 3:
          nickName = qaItem.User.usName.slice(0, -2) + "**";
          break;
        case 4:
          nickName = qaItem.User.usName.slice(0, -2) + "**";
          break;
        case 5:
          nickName = qaItem.User.usName.slice(0, -3) + "***";
          break;
        case 6:
          nickName = qaItem.User.usName.slice(0, -3) + "***";
          break;
        case 7:
          nickName = qaItem.User.usName.slice(0, -4) + "****";
          break;
        default:
          nickName = qaItem.User.usName.slice(0, -5) + "*****";
          break;
      }
      return nickName;
    }
  };

  return (
    <tr className="text-center" onClick={handleClick}>
      <td>{qaItem.quId}</td>
      <td>{qaItem.Category.caContent}</td>
      <td>
        {qaItem.quShow === 1 && qaItem.quUsId !== usId ? (
          userInfo && userInfo.usGrant === 1 ? (
            <></>
          ) : (
            <Image
              src="/image/locked.png"
              width="15"
              height="15"
              className="mr-2 mb-1"
            />
          )
        ) : (
          <></>
        )}
        {qaItem.quTitle}
      </td>
      <td>
        {qaItem.quUsId === usId || (userInfo && userInfo.usGrant === 1)
          ? qaItem.User.usName
          : nickNameHandle()}
      </td>
      <td>{qaItem.createdAt.slice(0, 10).replaceAll("-", ".")}</td>
    </tr>
  );
};

export default QAitem;
