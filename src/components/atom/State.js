import React from "react";
import { useState } from "react";
import elipse from "../../images/Ellipse 1.png";
import Logo from "./Logo";

const State = ({list}) => {
  const [title, setTitle] = useState(false);
  const {top,body} = list

  const handleState = () => {
    setTitle(!title);
  };

  return (
    <div className=" py-2 faqlist">
      {!title && (
        <div
          className="w-100 py-3 px-lg-4 d-flex align-items-center justify-content-between border-bottom rounded-4"
          onClick={handleState}
        >
          <h5 className="w-100 d-flex align-items-center faqh5">
            <Logo src={elipse} className="elip" />
            {top}
          </h5>
          <box-icon name="chevron-right" className="w-100" id="right"></box-icon>
        </div>
      )}
      {title && (
        <div
          className="w-100 faq py-3 px-lg-4 d-flex align-items-center justify-content-between border-bottom rounded-4"
          onClick={handleState}
        >
          <h5 className="w-100 d-flex align-items-center faqh5 fw-semibold">
            <Logo src={elipse} className="elip" />
            {top}
          </h5>
          <box-icon name="chevron-up" className="w-100" id="right"></box-icon>
        </div>
      )}
      {title && (
        <div className="py-3 px-lg-4 faq">
          <pre className="faqthin">
           {body}
          </pre>
        </div>
      )}
    </div>
  );
};

export default State;
