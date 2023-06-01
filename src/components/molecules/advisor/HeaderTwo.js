import React from "react";
import Logo from "../../atom/Logo";
import plcLogo from "../../../images/plclogo2.png";
import NavbarTwo from "../../atom/NavbarTwo";

const HeaderTwo = () => {
  return (
    <div className="pad pdhead sticky-top w-100 d-flex pseccolorbg stk ind justify-content-between align-items-center">
      <div className="logosize">
        <Logo src={plcLogo} alt="Pluralcode" />
      </div>
      <NavbarTwo />
    </div>
  );
};

export default HeaderTwo;
