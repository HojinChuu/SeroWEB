import React, { Fragment, useEffect } from "react";
import { Accordion } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getFaqs } from "../../actions/deskActions";

import FAQItem from "./FAQItem";
import Loader from "../helpers/Loader";

const FAQs = ({ history }) => {
  const dispatch = useDispatch();
  const fetchFaqs = useSelector((state) => state.fetchFaqs);
  const { loading, faqs } = fetchFaqs;

  useEffect(() => {
    dispatch(getFaqs());
  }, [history, dispatch]);

  return (
    <Fragment>
      <h1 id="deskTitle">FAQ.</h1>
      {loading ? (
        <div className="row">
          <Loader />
        </div>
      ) : (
        <Accordion>
          {faqs &&
            faqs.map((faq, index) => (
              <FAQItem faq={faq} key={faq.faId} index={index} />
            ))}
        </Accordion>
      )}
    </Fragment>
  );
};

export default FAQs;
