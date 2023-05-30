import React from "react";
import "boxicons";
import Button from "../atom/Button";
import { Player } from "@lottiefiles/react-lottie-player";
import jfile from "../../images/Pluralcode raw-03.json";
import { Link } from "react-scroll";

const UpperPart = () => {
 
  return (
    <div className="row pad upbg m-0 flex-column-reverse flex-lg-row">
      <div className="col-sm-12 col-md-12 col-lg-5 px-0 p-lg-0" data-aos="fade-up" data-aos-duration="2000">
        <h1 className="pseccolor bold pt-5">
          Acquire <span className="ptcolor">Tech Skills</span> For a Borderless
          Career.
        </h1>
        <p className="navtextcolor normal pt-3">
          Learn from elite level mentor and become a top level professional in
          the field of tech
        </p>
        <div className="btncont">
          <Link  to="cert" spy={true} smooth={true}>
          <Button
            children="Begin Enrollment"
            className="btn button px-4 pbcolor"
            />
            </Link>
        </div>
      </div>
      <div className="col-sm-12 col-md-12 col-lg-7 px-0 p-lg-0 overflow-hidden">
        <Player autoplay loop src={jfile} style={{width:'750px'}}></Player>
      </div>
    </div>
  );
};

export default UpperPart;
