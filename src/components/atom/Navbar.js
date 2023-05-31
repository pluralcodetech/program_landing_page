import React, { useState } from "react";
import { Link } from "react-scroll";
import Button from "./Button";
import Logo from "./Logo";
import icon from '../../images/icon.png'
import Sidebar from "./Sidebar";
import 'boxicons'

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav =()=>{
    return setNav(!nav)
  }
  return (
    <>
    <div className="w-100 d-none redd d-lg-flex justify-content-between align-items-center">
      <div className="navbtntwo d-flex gap-4 justify-content-between align-items-center">
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
      <div className="navbtnone d-flex justify-content-end">
        <Link to="cert" smooth={true}>
        <Button children="Begin Enrollment" className="w-100 pbcolor btn button" />
      </Link>
      </div>
    </div>
    <div onClick={handleNav}>

    <Logo src={icon} className="d-block d-lg-none hamsize" />
    </div>
    {nav ? <Sidebar /> : null}
    </>
  );
};

export default Navbar;
