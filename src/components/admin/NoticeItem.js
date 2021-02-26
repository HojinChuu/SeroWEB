import React from "react";
import { useDispatch } from "react-redux";
import { removeNotice } from "../../actions/adminActions";

const NoticeItem = ({ notice, index }) => {
  const dispatch = useDispatch();

  return (
    <tr className="text-center">
      <td>{index + 1}</td>
      <td>{notice.noTitle}</td>
      <td>{notice.createdAt.slice(0, 10).replaceAll("-", ".")}</td>
      <td>
        <button
          className="btn btn-sm btn-outline-danger rounded"
          onClick={() => dispatch(removeNotice(notice.noId))}
        >
          <i className="fa fa-trash"></i>
        </button>
      </td>
    </tr>
  );
};

export default NoticeItem;
