import React from 'react'
import { NavLink } from "react-router-dom";
import Button from "./Button";

const Sidebar = () => {
  return (
      <div className="w-100 fw-semibold ab ">
      <div className="navbtntwo d-flex flex-column gap-3">
        <NavLink to="" className="text-decoration-none navtextcolor">
          Certificate Courses
        </NavLink>
        <NavLink to="" className="text-decoration-none navtextcolor">
          Why Pluralcode?
        </NavLink>
        <NavLink to="" className="text-decoration-none navtextcolor">
          Testimonies
        </NavLink>
        <NavLink to="" className="text-decoration-none navtextcolor">
          Accreditation
        </NavLink>
        <NavLink to="" className="text-decoration-none navtextcolor">
          FAQ
        </NavLink>
      </div>
      <div className="navbtnone d-flex gap-4 mt-4">
        <Button
          children="Speak to Advisor"
          className="ptcolor px-4 btn pborder"
        />
        <Button children="Enroll Now" className="pbcolor btn px-4 button" />
      </div>
    </div>
  )
}

export default Sidebar
