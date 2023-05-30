import React from 'react'
import { Link } from "react-scroll";
import Button from "./Button";

const Sidebar = () => {
  return (
      <div className="w-100 fw-semibold ab ">
      <div className="navbtntwo d-flex flex-column gap-3">
      <Link to="cert" smooth={true} className="text-decoration-none navtextcolor">
          Certificate Courses
        </Link>
        <Link to="cert" smooth={true} className="text-decoration-none navtextcolor">
          Diploma Courses
        </Link>
        <Link to="tuit" smooth={true} className="text-decoration-none navtextcolor">
          Tuition Fees
        </Link>
        <Link to="accredit" smooth={true} className="text-decoration-none navtextcolor">
          Testimonies
        </Link>
        <Link to="accredit" smooth={true} className="text-decoration-none navtextcolor">
          Accreditation
        </Link>
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
