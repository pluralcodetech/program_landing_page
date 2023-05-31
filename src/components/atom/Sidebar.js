import React from 'react'
import { Link } from "react-scroll";
import Button from "./Button";
import 'boxicons'

const Sidebar = () => {
  return (
      <div className="w-100  ab ">
      <div className="navbtntwo d-flex flex-column gap-3">
      <Link to="cert" smooth={true} className="text-decoration-none navtextcolor">
          Certificate Courses
        </Link>
        <Link to="cert" smooth={true} className="text-decoration-none navtextcolor">
          Diploma Courses
        </Link>
        <Link to="accredit" smooth={true} className="text-decoration-none navtextcolor">
          Testimonies
        </Link>
        <Link to="accredit" smooth={true} className="text-decoration-none navtextcolor">
          Accreditation
        </Link>
        <div className="d-flex">

        <Link to="" smooth={true} className="text-decoration-none navtextcolor">
          More
        </Link>
        <box-icon name='chevron-down' color="#232323"></box-icon>
        </div>
      </div>
      <div className="navbtnone d-flex gap-4 mt-4">
      <Link to="cert" smooth={true}>
        <Button children="Begin Enrollment" className="w-100 pbcolor btn button" />
      </Link>
        {/* <Button
          children="Speak to Advisor"
          className="ptcolor px-4 btn pborder"
        />
        <Button children="Enroll Now" className="pbcolor btn px-4 button" /> */}
      </div>
    </div>
  )
}

export default Sidebar
