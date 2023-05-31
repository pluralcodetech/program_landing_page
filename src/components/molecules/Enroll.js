import React from "react";
import picc2 from "../../images/image 109.png";
import Why from "../atom/Why";
import Logo from "../atom/Logo";

const Enroll = () => {
  return (
    <div className="pad padd enbg">
      <h2 className="text-center pseccolor py-lg-5 ">
        How to Enroll?
      </h2>
      <div
        className="d-flex flex-column flex-lg-row gap-3 py-3"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <div className="w-100">
          <Why
            h2="
          Free Advisory Session
          "
            p="
          Select the course you are interested in and speak with the Student Advisor for 5 - 10 minutes to get all the relevant information about the program. After your session, you will be walked through the process of enrollment, payment plans, self-paced study pack and calendar for academic activities."
            className="w-100 why whyh text-white pseccolorbg p-lg-4"
          />
        </div>
        <div
          className="w-100 p-0 why"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <Logo src={picc2} className="whyimg" />
        </div>
      </div>
      <div
        className="d-flex flex-column flex-lg-row gap-3 pt-0 py-3"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <div className="w-100">
          <Why
            h2="Application & Assessment"
            p="After your initial onboarding, you may be required to take a background assessment test. This test is required to understand your current level of skill in your course of study and must be passed in order to continue your application. Assessment is not required when the advisor is satisfied with your current skill level or background on the subject. Once this is sufficiently addressed, student can move on to the final phase of enrollment."
            className="why whyh text-white pbcolor p-lg-4"
          />
        </div>
        <div className="w-100">
          <Why
            h2="Tuition & Documents."
            p="The final stage of your enrollment is Tuition & Documents. An invoice will be generated with your tuition fee and payment plan reflected, you will be required to pay this as soon as possible in order not to stall your admission process. Once tuition is paid, we will require a verifiable ID (NIN, Drivers License, Passport etc), Proof of address and Reference/Emergency contact information to complete your KYC and fully admit you into the academy."
            className=" why whyh text-white navtextcolorbg p-lg-4"
          />
        </div>
      </div>
    </div>
  );
};

export default Enroll;
