import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createNotice } from "../../actions/adminActions";

import Spinner from "../helpers/Spinner";

const Notices = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const dispatch = useDispatch();
  const adminNotices = useSelector((state) => state.adminNotices);
  const { loading, success, error } = adminNotices;

  useEffect(() => {
    if (success || error) {
      setTitle("");
      setContent("");
    }
  }, [success, error]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createNotice(title, content));
  };

  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <form onSubmit={submitHandler} className="mt-4" id="adminNotice">
          <div className="form-group" id="phone">
            <label>TITLE</label>
            <input
              type="phone"
              placeholder="Enter the Title"
              className="form-control"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="form-group" id="password">
            <label>CONTENT</label>
            <textarea
              className="form-control"
              placeholder="Enter the Content"
              rows="15"
              style={{ resize: "none" }}
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
          </div>

          <button
            type="submit"
            className="btn btn-block btn-dark mt-4 btn-lg rounded"
          >
            OK
          </button>
        </form>
      )}
    </Fragment>
  );
};

export default Notices;
