import React, { useState } from "react";
import { Link } from "react-scroll";
import Button from "./Button";
import Logo from "./Logo";
import icon from "../../images/icon.png";
import Sidebar from "./Sidebar";
import "boxicons";

const Navbar = () => {
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
            to="cert"
            smooth={true}
            className="text-decoration-none navtextcolor"
          >
            Certificate Courses
          </Link>
          <Link
            to="cert"
            smooth={true}
            className="text-decoration-none navtextcolor"
          >
            Diploma Courses
          </Link>
          <Link
            to="accredit"
            smooth={true}
            className="text-decoration-none navtextcolor"
          >
            Testimonies
          </Link>
          <Link
            to="accredit"
            smooth={true}
            className="text-decoration-none navtextcolor"
          >
            Accreditation
          </Link>

          <div className="d-flex more" onMouseEnter={handleDp} onMouseLeave={handleCDp}>
            <Link
              to=""
              smooth={true}
              className="text-decoration-none navtextcolor"
            >
              More
            </Link>
            <box-icon name="chevron-down" color="#232323"></box-icon>
            {moredp && (
              <div className="position-absolute moredp bg-white d-flex flex-column gap-2 shadow-lg py-3 px-4 rounded-3">
                <Link
                  to="whypl"
                  offset={-40}
                  smooth={true}
                  className="text-decoration-none navtextcolor"
                >
                  Why Pluralcode?
                </Link>
                <Link
                  to="faq"
                  smooth={true}
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
          <Link to="cert" smooth={true}>
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
      {nav && <Sidebar /> }
    </>
  );
};

export default Navbar;
