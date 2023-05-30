import React, { useState, useEffect, useRef } from "react";
import "boxicons";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import Button from "../atom/Button";
import axios from "axios";
import { Element } from "react-scroll";

const BeginEnroll = () => {
  const [value, setValue] = useState();
  const cref=useRef()
  const [cou, setCou] = useState([]);
  useEffect(()=>{

    axios.get("https://pluralcode.academy/pluralcode_apis/api/bot_course_list")
    .then(response=>setCou(response.data))
    .catch(error=>console.log(error))
},[])


  return (
    <div className="begin-enroll text-center py-lg-5 my-lg-5 pad">
      <h1 className="pseccolor">Your Global Tech Journey Begins Right Here</h1>
<Element name="beginen">
      <p className="py-4 m-auto navtextcolor">
        Provide us your contact details below to start your enrollment process.
        Once this is done, one of our Student Advisors will reach out for a 15
        min call to walk you through all requirements, scholarships, benefits
        and share the class schedule and payment process.
      </p>
      <form className="begin-form">
        <h2 className="pseccolor">Begin Enrollment</h2>
        <div className="text-start d-flex flex-column my-3">
          <label>Full Name</label>
          <input type="text" placeholder="Enter full name" className="form-control bg"/>
        </div>
        <div className="text-start d-flex flex-column my-3">
          <label>Email*</label>
          <input type="email" placeholder="Enter email" className="form-control bg"/>
        </div>
        <div className="text-start d-flex flex-column my-3">
          <label>Course of Interest</label>
          <select className="form-select coursecol begin-course" ref={cref}>
            <option className="">Course of Interest</option>

          {cou.map((list,idx)=><option key={idx} className="navtextcolor">{list.name}</option>)}
          </select>
        </div>
        <div className="text-start my-3">
          <label>Phone Number (WhatsApp preferred)*</label>
          <PhoneInput
            defaultCountry="NG"
            placeholder="Phone number"
            value={value}
            onChange={setValue}
            className="bg"
          />
        </div>

        <Button className="btn button px-5 pbcolor my-3" children="Book Section" />

        <div className="nb">
        Pluralcode will never sell, share or mismanage your data. We only request your contact to allow your advisor to reach out to you promptly and also share important course information.
        </div>
      </form>
      </Element>
    </div>
  );
};

export default BeginEnroll;
