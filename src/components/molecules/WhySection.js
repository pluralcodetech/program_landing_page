import React from "react";
import Logo from "../atom/Logo";
import Why from "../atom/Why";
import pix from "../../images/image 7.png";
import { Element } from "react-scroll";

const WhySection = () => {
  return (
    <Element name="whypl" id="whypl">
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
            360° Learning
          "
            p="
            The most immersive learning experience out there, period! You can attend weekly live trainings led by industry experts in onsite or virtual classrooms, get access to Pluralcode’s learning portal with several hours of material to watch at your pace, join engaging group projects, and access practical internship opportunities. Whether you’re a beginner looking to get their first job or a seasoned professional looking to up-skill even further, Pluralcode’s learning structure will help you get there."
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
    </Element>
  );
};

export default WhySection;
