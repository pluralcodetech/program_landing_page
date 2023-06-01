import React, {useRef, useState, useEffect} from 'react'
import Image from '../../atom/Logo'
import circle from '../../../images/Group 20680.png'
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import Button from "../../atom/Button";
import axios from "axios";

const RequestB = () => {
    const [value, setValue] = useState();
  const cref=useRef()
  const [cou, setCou] = useState([]);
  useEffect(()=>{

    axios.get("https://pluralcode.academy/pluralcode_apis/api/bot_course_list")
    .then(response=>setCou(response.data))
    .catch(error=>console.log(error))
},[])
  return (
    <div className='pad'>
      <div className='row'>
        <div className='col-sm-12 col-md-12 col-lg-6'>
        <h1 className="text-white boldad">
          Request <span className="ptcolor boldad">Our Brochure</span> & <span className='ptcolor boldad'>Payment Plan</span>
        </h1>
        <p className="text-white normalad pt-3">
        Provide us your contact details to receive an updated copy of student brochure, curriculum and payment plan.. Once this is done, you will receive an email with the details and one of our Student Advisors will reach out for a 15 min call to walk you through all requirements and answer your questions.
        </p>
        <div className="btncont">
          <a href>
          <Button
            children="Request Brochure"
            className="btn button px-4 pbcolor bb"
            />
            </a>
        </div>
        <div className='d-none d-lg-block'>
            <Image src={circle} className="w-100"/>
        </div>
        </div>
        <div className='col-sm-12 col-md-12 col-lg-6 text-center'>
        <form className="begin-form w-100">
        <h2 className="pseccolor text-center px-3">Request Brochure & Payment Plan</h2>
        <div className="text-start d-flex flex-column my-3">
          <label>Full Name*</label>
          <input type="text" placeholder="Enter full name" className="form-control bg"/>
        </div>
        <div className="text-start d-flex flex-column my-3">
          <label>Email*</label>
          <input type="email" placeholder="Enter email" className="form-control bg"/>
        </div>
        <div className="text-start d-flex flex-column my-3">
          <label>Course of Interest*</label>
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

        <Button className="btn button px-5 pbcolor my-3" children="Request Brochure" />

        <div className="nb">
        Pluralcode will never sell, share or mismanage your data. We only request your contact to allow your advisor to reach out to you promptly and also share important course information.
        </div>
      </form>
        </div>
      </div>
    </div>
  )
}

export default RequestB
