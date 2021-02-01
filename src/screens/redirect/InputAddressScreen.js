import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAddress } from "../../actions/linkActions";

import FormContainer from "../../components/helpers/FormContainer";
import AddressSearchModal from "../../components/users/AddressSearchModal";
import Message from "../../components/helpers/Message";
import { Spinner } from "react-bootstrap";

const InputAddressScreen = ({ location, history }) => {
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  const [postCode, setPostCode] = useState("");
  const [postSearch, setPostSearch] = useState(false);
  const [message, setMessage] = useState("");
  const [seCode] = useState(location.search.split("=")[1]);

  const dispatch = useDispatch();
  const addressInput = useSelector((state) => state.addressInput);
  const { success, loading } = addressInput;

  useEffect(() => {
    if (success || location.search.split("=")[0] !== "?seid") {
      history.push("/");
    }
  }, [success, history, location]);

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
      dispatch(
        postAddress(seCode, phone, name, address, addressDetail, postCode)
      );
    }
  };

  return (
    <FormContainer>
      {loading ? (
        <Spinner />
      ) : (
        <div className="card p-4 mt-3 rounded">
          <h2 className="text-center">주소를 입력해주세요</h2>
          {message && <Message variant="danger">{message}</Message>}
          <form onSubmit={submitHandler}>
            <div className="form-group" id="phone">
              <label>Phone Number</label>
              <input
                type="text"
                placeholder="Enter Phone Number"
                className="form-control"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
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
      )}
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
