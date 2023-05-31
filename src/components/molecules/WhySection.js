import React from "react";
import Logo from "../atom/Logo";
import Why from "../atom/Why";
import pix from "../../images/image 7.png";

const WhySection = () => {
  return (
    <div className="pt-1 pt-lg-5  whh enbg">
      <h3 className="pseccolor text-center pad fw-semibold">WHY PLURALCODE?</h3>
      <div
        className="pad py-3 d-flex flex-column flex-lg-row flex-column-reverse gap-3 justify-content-between"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <div className="w-100">
          <Why
            h2="
          Flexible Learning
          "
            p="
          Students can opt-in for our Onsite classes, virtual classes as well as Exclusive, One-on-One Mentorship. At Pluralcode we understand that you often have work, school and other pursuits to deal with and so we have structured program options to adapt to your specific needs and schedule. Contact any of our student advisors to find out how this works and how you can take advantage of it to up-skill for your ‘borderless career’ while you work or school."
            className="w-100 why whyh text-white pseccolorbg  p-lg-4"
          />
        </div>
        <div
          className="w-100 rounded-4 why p-0"
          data-aos="zoom-in-up"
          data-aos-duration="2000"
        >
          <Logo src={pix} className="whyimg" />
        </div>
      </div>
      <div
        className="pad pt-lg-0 d-flex flex-column yh flex-lg-row gap-3 justify-content-between"
        data-aos="zoom-in-up"
        data-aos-duration="2000"
      >
        <div className="w-100">
          <Why
            h2="Career Labs"
            p="Your career journey starts right now! and we mean that. Our free career advisory session is available to you right away at the click of a button, and after you resume classes, you are exposed to an occasional schedule of activities; mock interviews, capstone projects, career coaching sessions etc all designed to prepare you for work in your specified field. Our top graduates are also added to the school’s opportunity pool from which our hiring partners recruit occasionally."
            className=" w-100 why whyh text-white pbcolor p-lg-4"
          />
        </div>
        <div className="w-100">
          <Why
            h2="Industry Validation"
            p="As an internationally Accredited tech academy, Pluralcode makes a point to bring in only the best skilled professionals as mentors, not theorists, but practitioners who play a leading role in major companies and industry at large. This as well as the Pluralcode Certificate will validate your skill and readiness for your big jump into the tech space both locally and internationally. We have invested years into creating standards that put you in the forefront of competence."
            className=" w-100 why whyh text-white navtextcolorbg p-lg-4"
          />
        </div>
      </div>
    </div>
  );
};

export default WhySection;
