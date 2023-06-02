import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import Logo from "./Logo";
import icon from "../../images/icon.png";
import "boxicons";
import SidebarTwo from "./SidebarTwo";

const NavbarTwo = () => {
  const [nav, setNav] = useState(false);
  const [moredp, setMoredp] = useState(false);

  const handleNav = () => {
    return setNav(!nav);
  };
  
  const handleDp = () => {
    return setMoredp(!moredp);
  };
  const handleCDp = () => {
    return setMoredp(!moredp);
  };
  
  return (
    <>
      <div className="w-100 d-none redd d-lg-flex justify-content-between align-items-center">
        <div className="navbtntwo szinnext d-flex gap-4 justify-content-between align-items-center">
          <Link
            to="/#cert"
            offset={-120}
            className="text-decoration-none text-white"
          >
            Certificate Courses
          </Link>
          <Link
            to="/#cert"
            offset={-120}
            className="text-decoration-none text-white"
          >
            Diploma Courses
          </Link>
          <Link
            to="/#accredit"
            offset={-5}
            className="text-decoration-none text-white"
          >
            Testimonies
          </Link>
          <Link
            to="/#accredit"
            offset={-270}
            className="text-decoration-none text-white"
          >
            Accreditation
          </Link>

          <div className="d-flex more" onMouseEnter={handleDp} onMouseLeave={handleCDp}>
            <Link
              to=""
              className="text-decoration-none text-white"
            >
              More
            </Link>
            <box-icon name="chevron-down" color="#ffffff"></box-icon>
            {moredp && (
              <div className="position-absolute moredp bg-white d-flex flex-column gap-2 shadow-lg py-3 px-4 rounded-3">
                <Link
                  to="/#whypl"
                  offset={-40}
                  className="text-decoration-none navtextcolor"
                >
                  Why Pluralcode?
                </Link>
                <Link
                  to="/#faq"
                  offset={-30}
                  className="text-decoration-none navtextcolor"
                >
                  FAQ
                </Link>
              </div>
            )}
          </div>
        </div>

        <div className="navbtnone d-flex justify-content-end">
          <Link to="/#beginen" >
            <Button
              children="Begin Enrollment"
              className="w-100 pbcolor btn button"
            />
          </Link>
        </div>
      </div>
      <div onClick={handleNav}>
        <Logo src={icon} className="d-block d-lg-none hamsize" />
      </div>
      {nav && <SidebarTwo /> }
    </>
  );
};

export default NavbarTwo;
