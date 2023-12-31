import React, { useState } from "react";
import { Link } from "react-scroll";
import Button from "./Button";
import Logo from "./Logo";
import icon from "../../images/icon.png";
import icon2 from "../../images/closeicon.png";
import Sidebar from "./Sidebar";
import "boxicons";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  // const [moredp, setMoredp] = useState(false);

  const handleNav = () => {
    return setNav(!nav);
  };

  // const handleDp = () => {
  //   return setMoredp(!moredp);
  // };
  // const handleCDp = () => {
  //   return setMoredp(!moredp);
  // };

  return (
    <>
      <div className="w-100 d-none redd d-lg-flex justify-content-between align-items-center">
        <div className="navbtntwo szinnext d-flex gap-4 justify-content-between align-items-center">
          <Link
            to="cert"
            offset={-120}
            className="text-decoration-none navtextcolor"
          >
            Entry-Level Courses
          </Link>
          <Link
            to="cert"
            offset={-120}
            className="text-decoration-none navtextcolor"
          >
            Diploma Courses
          </Link>
          <Link
            to="tuit"
            offset={-120}
            className="text-decoration-none navtextcolor"
          >
            Tuition Fees
          </Link>
          <Link
            to="accredit"
            offset={-5}
            className="text-decoration-none navtextcolor"
          >
            Testimonies
          </Link>

          <Link
            to="accredit"
            offset={-270}
            className="text-decoration-none navtextcolor"
          >
            Accreditation
          </Link>

          {/* <div className="d-flex align-items-center more" onMouseEnter={handleDp} onMouseLeave={handleCDp}>
            <Link
              to=""
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
      
                  className="text-decoration-none navtextcolor"
                >
                  Why Pluralcode?
                </Link>
                <Link
                  to="faq"
      
                  offset={-30}
                  className="text-decoration-none navtextcolor"
                >
                  FAQ
                </Link>
              </div>
            )}
          </div> */}
        </div>

        <div className="navbtnone d-flex justify-content-end">
          <Link className="w-100" >
            <Button
              onClick={() => window.location.href = "https://pluralcode.academy/admissions/"}
              children="Begin Enrollment"
              className="w-100 pbcolor btn button"
            />
          </Link>
        </div>
      </div>
      <div onClick={handleNav}>
        {nav ? <Logo src={icon2} className="d-block d-lg-none hamsize" /> : <Logo src={icon} className="d-block d-lg-none hamsize" />}
      </div>
      {nav && <Sidebar />}
    </>
  );
};

export default Navbar;
