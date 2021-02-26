import React from "react";

const FindPasswordForm = () => {
  return (
    <div
      className="card p-4 mt-3 rounded mb-4 loginForm"
      style={{ backgroundColor: "transparent" }}
    >
      <h1 className="text-center">비밀번호 찾기</h1>
      <form>
        <div className="form-group" id="phone">
          <label>Phone Number</label>
          <input
            type="phone"
            placeholder="Enter Phone Number"
            className="form-control"
            // value={phone}
            // onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div className="form-group" id="password">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="btn btn-block btn-primary mt-4 btn-lg rounded"
        >
          OK
        </button>
      </form>
    </div>
  );
};

export default FindPasswordForm;
