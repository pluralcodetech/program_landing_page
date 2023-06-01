import React, {useRef, useState, useEffect} from 'react'
import Image from '../../atom/Logo'
import circle from '../../../images/Group 20679.png'
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import Button from "../../atom/Button";
import axios from "axios";

const Speak = () => {
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
          Book <span className="ptcolor">15 Minutes</span> With Our Student <span className='ptcolor'>Advisor</span>
        </h1>
        <p className="text-white normalad pt-3">
        Provide us your contact details to schedule a 15 minute conversation with our student advisor to answer all your questions and walk you through the enrollment process for your course. Once this is done, your advisor will reach out to engage you or confirm your preferred time.
        </p>
        <div className='d-none d-lg-block'>
            <Image src={circle} className="w-100"/>
        </div>
        </div>
        <div className='col-sm-12 col-md-12 col-lg-6 text-center'>
        <form className="begin-form w-100">
        <h2 className="pseccolor text-center">Book a Free 15 min Call</h2>
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

        <Button className="btn button px-5 pbcolor my-3" children="Book Session" />

        <div className="nb">
        Pluralcode will never sell, share or mismanage your data. We only request your contact to allow your advisor to reach out to you promptly and also share important course information.
        </div>
      </form>
        </div>
      </div>
    </div>
  )
}

export default Speak
