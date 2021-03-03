import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Accordion } from "react-bootstrap";
import { DESK_FAQ_FETCH_SUCCESS } from "../../constants/deskConstants";
import { getFaqs } from "../../actions/deskActions";
import { paginate } from "../../utils/paginate";

import FAQItem from "./FAQItem";
import Loader from "../helpers/Loader";
import Pagination from "../helpers/Pagination";

const FAQs = ({ history }) => {
  const dispatch = useDispatch();
  const deskFaqs = useSelector((state) => state.deskFaqs);
  const { loading, faqs, faqsCount, pageSize, currentPage } = deskFaqs;

  useEffect(() => {
    dispatch(getFaqs());
  }, [history, dispatch]);

  const pageChangeHandler = (page) => {
    dispatch({
      type: DESK_FAQ_FETCH_SUCCESS,
      payload: faqs,
      currentPage: page,
    });
  };

  const pagedfaqs = paginate(faqs, currentPage, pageSize);

  return (
    <Fragment>
      <h1 id="deskTitle">FAQ.</h1>
      {loading ? (
        <div className="row">
          <Loader />
        </div>
      ) : (
        <Accordion>
          {faqs && faqs.length !== 0 ? (
            pagedfaqs.map((faq, index) => (
              <FAQItem faq={faq} key={faq.faId} index={index} />
            ))
          ) : (
            <div className="mt-4">자주 묻는 질문이 없습니다.</div>
          )}
        </Accordion>
      )}
      <div className="mt-5 mb-5">
        {faqs && (
          <Pagination
            itemsCount={faqsCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={pageChangeHandler}
          />
        )}
      </div>
    </Fragment>
  );
};

export default FAQs;
