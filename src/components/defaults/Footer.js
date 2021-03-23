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
            {width >= 1080 ? (
              <div className="col col-12 pt-5 pb-5">
                <div className="m-auto" style={{ width: "1047px" }}>
                  <div className="row justify-content-between title">
                    <div>Copyright &copy; 2021 Seropost.All right reserved</div>
                    <div>
                      <span>
                        <a href="https://seropost.com/privacy.html">
                          개인정보 처리방침
                        </a>
                      </span>
                      <span>
                        <a href="https://seropost.com/privacy.html">이용약관</a>
                      </span>
                      <span>
                        <a href="https://seropost.com/desk/qa">고객센터</a>
                      </span>
                    </div>
                  </div>
                  <div className="row mt-4 subTitle justify-content-center">
                    <span>개인정보책임관리자: 안준용</span>
                    <span>사업자등록번호: 123-45-678910</span>
                    <span>통신판매업신고번호: 제2021-대구북구-0443호</span>
                    <span>
                      주소: 대구광역시 북구 대학로 53 해피하우스 201호
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="col pt-2 pr-2 pl-2">
                <div className="title" style={{ fontSize: "14px" }}>
                  <div className="ml-3">
                    Copyright &copy; 2021 Seropost.All right reserved
                  </div>
                  <div>
                    <span style={{ fontSize: "14px", marginLeft: "17px" }}>
                      <a href="https://seropost.com/privacy.html">
                        개인정보 처리방침
                      </a>
                    </span>
                    <span style={{ fontSize: "14px", marginLeft: "7px" }}>
                      <a href="https://seropost.com/privacy.html">이용약관</a>
                    </span>
                    <span style={{ fontSize: "14px", marginLeft: "7px" }}>
                      <a href="https://seropost.com/desk/qa">고객센터</a>
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
