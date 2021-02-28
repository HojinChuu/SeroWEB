import React from "react";
import { useDispatch } from "react-redux";
import { removeNotice } from "../../actions/adminActions";
import showAlert from "../../utils/alert";

const NoticeItem = ({ notice, index }) => {
  const dispatch = useDispatch();

  const removeHandler = (id) => {
    showAlert
      .error("", "삭제 하시겠어요?", true, "YES")
      .then(({ isConfirmed }) => {
        if (isConfirmed) {
          dispatch(removeNotice(id));
        }
      });
  };

  return (
    <tr className="text-center">
      <td style={{ lineHeight: "25px" }}>{index + 1}</td>
      <td style={{ lineHeight: "25px" }}>
        {notice.noTitle.length > 4
          ? notice.noTitle.slice(0, 20) + "..."
          : notice.noTitle}
      </td>
      <td style={{ lineHeight: "25px" }}>
        {notice.createdAt.slice(0, 10).replaceAll("-", ".")}
      </td>
      <td>
        <button
          className="btn btn-sm btn-outline-dark rounded pl-3 pr-3"
          onClick={() => removeHandler(notice.noId)}
        >
          <i className="fa fa-trash"></i>
        </button>
      </td>
    </tr>
  );
};

export default NoticeItem;
