import React from "react";
import Logo from "../atom/Logo";
import plogo from "../../images/plclogo.png";
import inst from "../../images/bi_instagram.png";
import face from "../../images/Group.png";
import twit from "../../images/Group (1).png";
import link from "../../images/Group (2).png";
import tik from '../../images/Group 20686.png';
import { Link } from "react-scroll";
import tel from '../../images/phone-call 1.png'
import inout from '../../images/Instagram Outline.png'
import email from '../../images/envelope 2.png'
import faceout from '../../images/Facebook Outline.png'
import twitout from '../../images/Twitter Outline.png'

const Footer = () => {
  return (
    <div className="pad pt-5 foot w-100 d-flex flex-column flex-lg-row gap-5 justify-content-between">
      <div>
        <Logo src={plogo} />
        <p className="pt-4 py-2 foottp">Your global tech journey begins here. Master the skills you need to start.</p>
        <div className="d-flex gap-3">
          <Link><Logo src={inst} className="logfoot" /></Link>
          <Link><Logo src={face} className="logfoot" /></Link>
          <Link><Logo src={twit} className="logfoot" /></Link>
          <Link><Logo src={link} className="logfoot" /></Link>
          <Link><Logo src={tik}  className="logfoot"/></Link>
        </div>
      </div>

      <div className="w-100 d-flex flex-wrap foottwo flex-row gap-5 pb-5">
        <div className="footw d-flex flex-column gap-2">
          <h5 className="">Top Courses</h5>
          <Link to="#">Data Analysis</Link>
          <Link to="#">Data Science</Link>
          <Link to="#">Data Engineering</Link>
          <Link to="#">Full-Stack Development</Link>
          <Link to="#">Front-End Development</Link>
          <Link to="#">Product Design</Link>
          <Link to="#">Product Management</Link>
          <Link to="#">Product Marketing</Link>
        </div>
        <div className="footw d-flex flex-column gap-2">
          <h5 className="">Platforms</h5>
          <Link to="#">Pluralcode SandBox</Link>
          <Link to="#">Web Series</Link>
          <Link to="#">Exclusive</Link>
        </div>
        <div className="footw d-flex flex-column gap-2">
          <h5 className="">Schools</h5>
          <Link to="#">School of Data</Link>
          <Link to="#">School of Product</Link>
          <Link to="#">School of Engineering</Link>
        </div>
        <div className="footw d-flex flex-column gap-2">
          <h5 className="fw-semibold">Company</h5>
          <Link to="#">Why Pluralcode</Link>
          <Link to="#">Talk to Student Advisor</Link>
          <Link to="#">Become a Mentor</Link>
          <Link to="#">Custom Software Development</Link>
          <Link to="#">Corporate Trainings</Link>
          <Link to="#">Hire Our Talents</Link>
        </div>
        <div className="footw d-flex flex-column gap-2">
          <h5 className="">Resources</h5>
          <Link to="#">Webinar series</Link>
          <Link to="#">Events</Link>
          <Link to="#">FAQs</Link>
          <Link to="#">Testimonials</Link>
          <Link to="#">Where Our Talents Works</Link>
        </div>
        <div className="footw d-flex flex-column gap-2">
          <h5 className="">Policies</h5>
          <Link to="#">Terms and Condition</Link>
          <Link to="#">Student Loan Policy</Link>
          <Link to="#">Refunds Policy</Link>
          <Link to="#">Privacy Policy</Link>
        </div>
        <div className="d-flex flex-column gap-2">
          <h5 className="">Contact</h5>
          <div className="d-flex gap-3 align-items-center"><Logo src={tel}/><Link to="#">+(234) 708-315-3185.</Link></div>
          <div className="d-flex gap-3 align-items-center"><Logo src={tel}/><Link to="#">+(234) 813-152-9862.</Link></div>
          <div className="d-flex gap-3 align-items-center"><Logo src={twitout} /><Link to="#">pluralcode</Link></div>
          <div className="d-flex gap-3 align-items-center"><Logo src={inout} /><Link to="#">pluralcode_academy</Link></div>
          <div className="d-flex gap-3 align-items-center"><Logo src={faceout}/><Link to="#">pluralcode_academy</Link></div>
          <div className="d-flex gap-3 align-items-center"><Logo src={email}/><Link to="#">support@pluralcode.academy</Link></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
