import React, { Fragment } from "react";
import { useLocation } from "react-router-dom";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const Footer = () => {
  const location = useLocation();
  const { width } = useWindowDimensions();

  let type = navigator.userAgent.toLowerCase();
  if (navigator.userAgent.toLowerCase().search("mac") !== -1) {
    type = "mac";
  } else {
    type = "window";
  }

  return (
    <Fragment>
      {location.pathname !== "/qrcode" && (
        <footer>
          <div className="row justify-content-center">
            {width >= 1080 ? (
              <div className="col col-12 pt-5 pb-5">
                <div className="m-auto" style={{ width: "1047px" }}>
                  <div
                    className="row m-auto justify-content-between title"
                    style={{ width: "1000px" }}
                  >
                    <div>Copyright &copy; 2021 Seropost.All right reserved</div>
                    <div>
                      <span className="mr-3">
                        <a href="https://seropost.com/privacy.html">
                          개인정보 처리방침
                        </a>
                      </span>
                      <span className="mr-3">
                        <a href="https://seropost.com/tos.html">이용약관</a>
                      </span>
                      <span>
                        <a type="_blank" href="mailto:official@seropost.com">
                          고객센터
                        </a>
                      </span>
                    </div>
                  </div>
                  <div
                    className="row mt-4 mr-auto ml-auto subTitle justify-content-between"
                    style={
                      type === "mac"
                        ? { width: "1000px", fontSize: "14px" }
                        : { width: "1000px", fontSize: "13px" }
                    }
                  >
                    <span>상호명: 세로엽서</span>
                    <span>사업자등록번호: 277-19-01178</span>
                    <span>연락처: 010-8946-0931</span>
                    <span>대표자: 윤애자</span>
                    <span>
                      사업장소재지: 경상남도 창원시 성산구 대정로 142, 108동
                      1104호
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
                      <a href="https://seropost.com/tos.html">이용약관</a>
                    </span>
                    <span style={{ fontSize: "14px", marginLeft: "7px" }}>
                      <a type="_blank" href="mailto:official@seropost.com">
                        고객센터
                      </a>
                    </span>
                  </div>
                </div>
                <div className="p-3 subTitle" style={{ fontSize: "14px" }}>
                  <div>상호명: 세로엽서</div>
                  <div>사업자등록번호: 277-19-01178</div>
                  <div>연락처: 010-8946-0931</div>
                  <div>대표자: 윤애자</div>
                  <div>
                    사업장소재지: 경상남도 창원시 성산구 대정로 142, 108동
                    1104호
                  </div>
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
