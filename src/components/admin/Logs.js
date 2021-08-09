import React, { Fragment } from "react";

const Logs = () => {
  return (
    <Fragment>
      <div className="row justify-content-between p-4">
        <div className="row">
          <button className="btn btn-outline-dark rounded">
            <i className="fas fa-redo-alt"></i>
          </button>
        </div>
        <form className="row ml-3">
          <div>
            <input placeholder="유저이름" className="form-control" />
          </div>
          <button className="btn btn-sm btn-dark" type="submit">
            검색
          </button>
        </form>
      </div>
      <div className="table-responsive">
        <table className="table table-striped table-lg">
          <thead>
            <tr className="text-center">
              <th>유저명</th>
              <th>연락처</th>
              <th>결제엽서</th>
              <th>결제상태</th>
              <th>결제시간</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center">
              <td>추호진</td>
              <td>01041644960</td>
              <td>33번</td>
              <td>-</td>
              <td>2021-04-04 12:30:33</td>
            </tr>

            <tr className="text-center">
              <td>추호진</td>
              <td>01041644960</td>
              <td>33번</td>
              <td>
                <span style={{ color: "#bb1e10" }}>Toss Payment Error</span>
              </td>
              <td>2021-04-04 12:29:49</td>
            </tr>
            <tr className="text-center">
              <td>추호진</td>
              <td>01041644960</td>
              <td>33번</td>
              <td>
                <span style={{ color: "#bb1e10" }}>Toss Payment Error</span>
              </td>
              <td>2021-04-04 12:29:49</td>
            </tr>
            <tr className="text-center">
              <td>추호진</td>
              <td>01041644960</td>
              <td>32번</td>
              <td>-</td>
              <td>2021-04-04 12:29:33</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

export default Logs;
