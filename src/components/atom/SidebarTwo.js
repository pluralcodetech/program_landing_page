import React, {useState} from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import "boxicons";

const SidebarTwo = () => {
  const [moredp, setMoredp] = useState(false);

  const handleDp = () => {
    return setMoredp(!moredp);
  };
  const handleCDp = () => {
    return setMoredp(!moredp);
  };
  return (
    <div className="w-100  ab d-block d-lg-none ">
      <div className="navbtntwo d-flex flex-column gap-3">
        <Link
          to="/#cert"
          offset={-120}
          className="text-decoration-none navtextcolor"
        >
          Certificate Courses
        </Link>
        <Link
          to="/#cert"
          offset={-120}
          className="text-decoration-none navtextcolor"
        >
          Diploma Courses
        </Link>
        <Link
          to="/#accredit"
          offset={-20}
          className="text-decoration-none navtextcolor"
        >
          Testimonies
        </Link>
        <Link
          to="/#accredit"
          offset={-520}
          className="text-decoration-none navtextcolor"
        >
          Accreditation
        </Link>
        <div className="d-flex align-items-center more" onMouseEnter={handleDp} onMouseLeave={handleCDp}>
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
      <div className="navbtnone d-flex gap-4 mt-4">
        <Link to="/#beginen" >
          <Button
            children="Begin Enrollment"
            className="w-100 pbcolor btn button"
          />
        </Link>
        {/* <Button children="Enroll Now" className="pbcolor btn px-4 button" /> */}
      </div>
    </div>
  );
};

export default SidebarTwo;
