import React, { useState } from "react";

import FormContainer from "../../components/helpers/FormContainer";
import AddressSearchModal from "../../components/users/AddressSearchModal";
import Message from "../../components/helpers/Message";

const InputAddressScreen = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  const [postCode, setPostCode] = useState("");
  const [postSearch, setPostSearch] = useState(false);
  const [message, setMessage] = useState("");

  const addressCompleteHandler = (data) => {
    let fullAddress = data.address;
    let extraAddress = "";
    let zoneCodes = data.zonecode;

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }

    setAddress(fullAddress);
    setPostCode(zoneCodes);
    setPostSearch(false);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!name || !address || !addressDetail || !postCode) {
      setMessage("전부 입력해 주세요");
    } else {
      console.log(name);
      console.log(address);
      console.log(addressDetail);
      console.log(postCode);
    }
  };

  return (
    <FormContainer>
      <div className="card p-4 mt-3 rounded">
        <h2 className="text-center">주소를 입력해주세요</h2>
        {message && <Message variant="danger">{message}</Message>}
        <form onSubmit={submitHandler}>
          <div id="name" className="form-group">
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group" id="address">
            <div className="row justify-content-between">
              <div className="col-md-10 col-xs-10">
                <label>Address</label>
              </div>
              <div className="col-md-2 col-xs-2">
                <button
                  type="button"
                  className="btn btn-outline-light btn-sm"
                  style={{ color: "grey" }}
                  onClick={() => setPostSearch(true)}
                >
                  Search
                </button>
              </div>
            </div>
            <input
              type="text"
              placeholder="Enter Address"
              className="form-control"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              readOnly
              required
            />
          </div>

          <div className="form-group" id="addressDetail">
            <div className="row">
              <div className="col-md-8 col-xs-8">
                <label>Address Detail</label>
                <input
                  type="text"
                  placeholder="Enter Address Detail"
                  className="form-control"
                  value={addressDetail}
                  onChange={(e) => setAddressDetail(e.target.value)}
                />
              </div>
              <div className="col-md-4 col-xs-4">
                <label>Post Code</label>
                <input
                  type="text"
                  placeholder="Enter Post Code"
                  className="form-control"
                  value={postCode}
                  onChange={(e) => setPostCode(e.target.value)}
                  readOnly
                  required
                />
              </div>
            </div>
          </div>
          <button type="submit" className="btn btn-block mt-4 btn-primary">
            확인
          </button>
        </form>
      </div>
      {postSearch && (
        <AddressSearchModal
          visible={postSearch}
          onComplete={addressCompleteHandler}
          cancelBtn={() => setPostSearch(false)}
        />
      )}
    </FormContainer>
  );
};

export default InputAddressScreen;
