import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAddress, updateAddress } from "../../actions/linkActions";
import { bindAddress } from "../../utils/bindAddress";
import showAlert from "../../utils/alert";
import { getUserInfo } from "../../actions/userActions";

import FormContainer from "../../components/helpers/FormContainer";
import AddressSearchModal from "../../components/users/AddressSearchModal";
import Message from "../../components/helpers/Message";
import Spinner from "../../components/helpers/Spinner";

const InputAddressScreen = ({ location, history }) => {
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  const [postCode, setPostCode] = useState("");
  const [postSearch, setPostSearch] = useState(false);
  const [message, setMessage] = useState("");
  const [seCode] = useState(location.search.split("=")[1]);
  const [updateToggle, setUpdateToggle] = useState(false);

  const dispatch = useDispatch();
  const addressInput = useSelector((state) => state.addressInput);
  const userLogin = useSelector((state) => state.userLogin);

  const { success, loading, error } = addressInput;
  const { userToken, userInfo } = userLogin;

  useEffect(() => {
    if (error) {
      showAlert
        .error("", "이미 처리된 코드입니다", false, "OK")
        .then(({ isConfirmed }) => {
          if (isConfirmed) history.push("/");
        });
    } else if (success) {
      showAlert
        .success(
          "처리되었습니다!",
          "엽서가 도착하는데 5일정도 소요됩니다.",
          false,
          "OK"
        )
        .then(({ isConfirmed }) => {
          if (isConfirmed) history.push("/");
        });
    } else if (location.search.split("=")[0] !== "?seid") {
      history.push("/");
    }
  }, [success, history, location, error]);

  const addressCompleteHandler = (data) => {
    const { fullAddress, zoneCodes } = bindAddress(data);
    setAddress(fullAddress);
    setPostCode(zoneCodes);
    setPostSearch(false);
  };

  const inputAddressHandler = () => {
    if (userInfo) {
      setPhone(userInfo.usPhoneNumber);
      setName(userInfo.usName);
      setAddress(userInfo.usAddress);
      setAddressDetail(userInfo.usAddressDetail);
      setPostCode(userInfo.usAddressNumber);
    } else {
      localStorage.setItem("addressCode", location.search.split("=")[1]);
      history.push({
        pathname: `/login`,
      });
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!name || !address || !addressDetail || !postCode) {
      setMessage("전부 입력해 주세요.");
    }
    if (addressDetail.length < 6) {
      setMessage("상세주소는 6자 이상 입력하세요.");
    } else {
      if (updateToggle) {
        dispatch(
          updateAddress(userInfo.usId, address, addressDetail, postCode)
        );
        dispatch(
          postAddress(
            seCode,
            userInfo.usPhoneNumber,
            userInfo.usName,
            address,
            addressDetail,
            postCode
          )
        );
      } else {
        dispatch(
          postAddress(seCode, phone, name, address, addressDetail, postCode)
        );
      }
    }
  };

  useEffect(() => {
    if (userToken) {
      dispatch(getUserInfo());
    }
  }, [dispatch, userToken]);

  return (
    <FormContainer>
      {loading ? (
        <Spinner />
      ) : (
        <div className="card p-4 mt-3 rounded mb-3">
          <h2 className="text-center">주소를 입력해주세요</h2>
          {message && <Message variant="danger">{message}</Message>}
          <form onSubmit={submitHandler}>
            <div className="form-group" id="phone">
              <label>Phone Number</label>
              <input
                type="text"
                placeholder="전화번호를 입력하세요"
                className="form-control"
                value={userInfo ? userInfo.usPhoneNumber : phone}
                onChange={(e) => setPhone(e.target.value)}
                readOnly={userInfo}
              />
            </div>
            <div id="name" className="form-group">
              <label>Name</label>
              <input
                type="text"
                placeholder="이름을 입력하세요"
                className="form-control"
                value={userInfo ? userInfo.usName : name}
                onChange={(e) => setName(e.target.value)}
                readOnly={userInfo}
              />
            </div>
            <div className="form-group" id="address">
              <div className="row justify-content-between">
                <div className="col">
                  <label>Address</label>
                  <button
                    type="button"
                    className="btn btn-sm"
                    style={{ color: "grey" }}
                    onClick={() => setPostSearch(true)}
                  >
                    <i className="fas fa-search-location fa-lg"></i>
                  </button>
                </div>
              </div>
              <input
                type="text"
                placeholder="주소"
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
                    placeholder="상세주소를 입력하세요"
                    className="form-control"
                    value={addressDetail}
                    onChange={(e) => setAddressDetail(e.target.value)}
                  />
                </div>
                <div className="col-md-4 col-xs-4">
                  <label>Post Code</label>
                  <input
                    type="text"
                    placeholder="우편번호"
                    className="form-control"
                    value={postCode}
                    onChange={(e) => setPostCode(e.target.value)}
                    readOnly
                    required
                  />
                </div>
              </div>
            </div>
            {userInfo && (
              <div className="row">
                <div className="mr-2 ml-3">
                  <input
                    type="checkbox"
                    id="addressUpdateCheck"
                    onChange={(e) => setUpdateToggle(!updateToggle)}
                  />
                </div>
                <div style={{ fontSize: "12px", lineHeight: "18px" }}>
                  <label htmlFor="addressUpdateCheck">
                    앞으로도 입력한 주소를 배송지로 사용하겠습니다.
                  </label>
                </div>
              </div>
            )}
            <button
              type="submit"
              className="btn btn-block mt-4 btn-dark"
              style={{ backgroundColor: "#515151" }}
            >
              확인
            </button>
            <button
              type="button"
              className="btn btn-block btn-light"
              style={{ color: "grey" }}
              onClick={inputAddressHandler}
            >
              내 정보 불러오기
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
