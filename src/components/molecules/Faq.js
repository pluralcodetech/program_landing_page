import React from "react";
import List from "./List";
import State from "../atom/State";
import "boxicons";
// import Button from "../atom/Button";

const Faq = () => {
  const faq = List.map((list) => {
    return <State key={list.top} list={list} />;
  });
  return (
    <div className="py-5">
      <div className="text-center pt-5">
        <h2 className="pseccolor faqtitle fs-1 fw-bold py-2">
          Frequently Asked Questions
        </h2>
        {/* <div className="inptcont m-auto d-flex align-items-center">
          <input
            type="text"
            placeholder="Search for a question"
            className="w-100 p-4 inpt border-0"
          />
          <box-icon name="search"></box-icon>
        </div> */}
      </div>
      {faq}
      {/* <div className="w-50 py-3 py-lg-5 m-auto d-flex flex-column flex-lg-row justify-content-center align-items-center gap-4">
        <Button children="Enroll Now" className="px-5 btn col-sm-12 col-md-6 col-lg-4 pbcolor button"/>
        <div className="d-flex align-items-center justify-content-center">
          <box-icon type="logo" name="whatsapp" color="#F8991D"></box-icon>
          <a href="tel:080" className="ptcolor text-decoration-none ps-1">
            Chat On Whatsapp
          </a>
        </div>
      </div> */}
    </div>
  );
};

export default Faq;
