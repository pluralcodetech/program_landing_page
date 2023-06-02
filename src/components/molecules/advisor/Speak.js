import React, { useRef, useState, useEffect } from "react";
import Image from "../../atom/Logo";
import circle from "../../../images/Group 20679.png";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import Button from "../../atom/Button";
import axios from "axios";
import { Link } from "react-router-dom";
import 'boxicons'

const Speak = () => {
    const [succ, setSucc] = useState({
        message: "",
        advisor_contact_details: "",
      });
      const modcloseref = useRef();
      const errm = useRef();
  const cref = useRef();
  const [cou, setCou] = useState([]);
  useEffect(() => {
    axios
      .get("https://pluralcode.academy/pluralcode_apis/api/bot_course_list")
      .then((response) => setCou(response.data))
      .catch((error) => console.log(error));
  }, []);

  const [formD, setFormD] = useState({
    fullname: "",
    email: "",
    course_of_interest: "",
  });
  const [phone, setPhone] = useState();

  const handleForm = (event) => {
    setFormD((prevForm) => {
      errm.current.style.display = "none";
      return { ...prevForm, [event.target.name]: event.target.value };
    });
  };

  async function submitForm(e) {
    e.preventDefault();
    if (
      formD.fullname === "" ||
      formD.email === "" ||
      formD.course_of_interest === ""
    ) {
      errm.current.style.display = "block";
    }
    try {
      const res = await fetch(
        `https://pluralcode.academy/pluralcode_apis/api/bot_create_advisory?name=${formD.fullname}&email=${formD.email}&phone_number=${setPhone}&course_interested_in=${formD.course_of_interest}`,
        {
          method: "GET",
          headers: { "Content-Type": "applications/json" },
        }
      );
      const result = await res.json();
      if (result.status === "success") {
        setSucc({
          message: result.message,
          advisor_contact_details: result.advisor_contact_details,
        });
        modcloseref.current.style.display = "block";
      } else {
        errm.current.style.display = "block";
      }
      
    } catch (err) {
      console.log(err);
    }
  }
  const closeMod = () => {
    modcloseref.current.style.display = "none";
  };
  return (
    <div className="pad">
      <div className="row align-items-center">
        <div className="col-sm-12 col-md-12 col-lg-6">
          <h1 className="text-white boldad">
            Book <span className="ptcolor">15 Minutes</span> With Our Student{" "}
            <span className="ptcolor">Advisor</span>
          </h1>
          <p className="text-white normalad pt-3">
            Provide us your contact details to schedule a 15 minute conversation
            with our student advisor to answer all your questions and walk you
            through the enrollment process for your course. Once this is done,
            your advisor will reach out to engage you or confirm your preferred
            time.
          </p>
          <div className="d-none d-lg-block">
            <Image src={circle} className=" imgba" />
          </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-6 text-center">
          <form className="begin-form w-100 py-xxl-5 position-relative">
            <h2 className="pseccolor text-center">Book a Free 15 min Call</h2>
            <div className="text-start d-flex flex-column my-3">
            <label>Full Name*</label>
            <input
              type="text"
              value={formD.fullname}
              name="fullname"
              onChange={handleForm}
              placeholder="Enter full name"
              className="form-control bg"
              required
            />
          </div>
          <div className="text-start d-flex flex-column my-3">
            <label>Email*</label>
            <input
              type="email"
              value={formD.email}
              name="email"
              onChange={handleForm}
              placeholder="Enter email"
              className="form-control bg"
              required
            />
          </div>
          <div className="text-start d-flex flex-column my-3">
            <label>Course of Interest*</label>
            <select
              className="form-select  begin-course"
              ref={cref}
              value={formD.course_of_interest}
              name="course_of_interest"
              onChange={handleForm}
              required
            >
              <option className="coursecol">Course of Interest</option>

              {cou.map((list, idx) => (
                <option key={idx} className="navtextcolor" value={list.name}>
                  {list.name}
                </option>
              ))}
              <option className="navtextcolor" value="undecided">
                Undecided
              </option>
            </select>
          </div>
          <div className="text-start my-3">
            <label>Phone Number (WhatsApp preferred)*</label>
            <PhoneInput
              defaultCountry="NG"
              placeholder="Phone number"
              value={phone}
              onChange={setPhone}
              className="bg"
            />
          </div>

            <Button
              className="btn button px-5 pbcolor my-3"
              children="Book Session"
              onClick={submitForm}
            />

            <p ref={errm} className=" dan w-100 text-center text-danger fs-5">
              Fields must not be empty!
            </p>
            <div className="nb">
              Pluralcode will never sell, share or mismanage your data. We only
              request your contact to allow your advisor to reach out to you
              promptly and also share important course information.
            </div>
            <div className=" position-absolute modh" ref={modcloseref}>
              <p className="modw modw2" onClick={closeMod}>
                X
              </p>
              <div className="modchildw text-center p-4 p-lg-5 bg-white rounded-4">
                <p className="w-100 pt-5 fs-4 text-center">{succ.message}</p>
                <p className="w-100">
                  You will receive an email shortly with the Brochure,
                  Curriculum and Payment plans. Also a student advisor will be
                  in touch with you shortly to walk you through other details.
                  You can start a WhatsApp chat  or call with the student
                  advisor by clicking the button below.
                </p>
                <button className="btn button pbcolor px-4">
                  <div className="d-flex align-items-center">
                    <box-icon
                      type="logo"
                      name="whatsapp"
                      color="#FFFFFF"
                    ></box-icon>
                    <Link
                      to={`https://wa.me/${succ.advisor_contact_details}`}
                      className="text-white text-decoration-none ps-1"
                    >{succ.advisor_contact_details}</Link>
                  </div>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Speak;
