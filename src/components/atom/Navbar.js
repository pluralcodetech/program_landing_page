import React, { useState } from "react";
import { Link } from "react-scroll";
import Button from "./Button";
import Logo from "./Logo";
import icon from '../../images/icon.png'
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav =()=>{
    return setNav(!nav)
  }
  return (
    <>
    <div className="w-100 d-none redd d-lg-flex justify-content-between align-items-center">
      <div className="navbtntwo d-flex justify-content-between align-items-center">
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
      <div className="navbtnone d-flex justify-content-end">
        <Link to="cert" smooth={true}>
        <Button children="Begin Enrollment" className="w-100 pbcolor btn button" />
      </Link>
      </div>
    </div>
    <div onClick={handleNav}>

    <Logo src={icon} className="d-block d-lg-none" />
    </div>
    {nav ? <Sidebar /> : null}
    </>
  );
};

export default Navbar;
