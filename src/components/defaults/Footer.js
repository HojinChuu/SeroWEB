import React, { Fragment } from "react";
import { useLocation } from "react-router-dom";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const Footer = () => {
  const location = useLocation();
  const { width } = useWindowDimensions();

  return (
    <Fragment>
      {location.pathname !== "/qrcode" && (
        <footer>
          <div className="row justify-content-center">
            {width >= 1200 ? (
              <div
                className={
                  location.pathname === "/" && width <= 414
                    ? // ? "col col-8 p-5 mb-4"
                      "col col-8 p-5"
                    : "col col-8 p-5"
                }
              >
                <div className="row justify-content-between title">
                  <div className="col">
                    Copyright &copy; 2021 Seropost.All right reserved
                  </div>
                  <div>
                    <span>개인정보 처리방침</span>
                    <span>이용약관</span>
                    <span>고객센터</span>
                  </div>
                </div>
                <div className="row mt-4 subTitle justify-content-around">
                  <span>개인정보책임관리자: 안준용</span>
                  <span>사업자등록번호: 123-45-678910</span>
                  <span>통신판매업신고번호: 제2021-대구북구-0443호</span>
                  <span>주소: 대구광역시 북구 대학로 53 해피하우스 201호</span>
                </div>
              </div>
            ) : (
              <div
                className={
                  location.pathname === "/" && width <= 414
                    ? // ? "col p-3 mb-4"
                      "col pt-2 pr-2 pl-2 "
                    : "col pt-2 pr-2 pl-2"
                }
              >
                <div className="title" style={{ fontSize: "14px" }}>
                  <div className="ml-3">
                    Copyright &copy; 2021 Seropost.All right reserved
                  </div>
                  <div>
                    <span style={{ fontSize: "14px", marginLeft: "17px" }}>
                      개인정보 처리방침
                    </span>
                    <span style={{ fontSize: "14px", marginLeft: "0" }}>
                      이용약관
                    </span>
                    <span style={{ fontSize: "14px", marginLeft: "0" }}>
                      고객센터
                    </span>
                  </div>
                </div>
                <div className="p-3 subTitle" style={{ fontSize: "14px" }}>
                  <div>개인정보책임관리자: 안준용</div>
                  <div>사업자등록번호: 123-45-678910</div>
                  <div>통신판매업신고번호: 제2021-대구북구-0443호</div>
                  <div>주소: 대구광역시 북구 대학로 53 해피하우스 201호</div>
                </div>
              </div>
            )}
          </div>
        </footer>
      )}
    </Fragment>
  );
};

export default Footer;
