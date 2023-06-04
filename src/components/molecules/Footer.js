import React from "react";
import Logo from "../atom/Logo";
import plogo from "../../images/plclogo.png";
import inst from "../../images/bi_instagram.png";
import face from "../../images/Group.png";
import twit from "../../images/Group (1).png";
import link from "../../images/Group (2).png";
import tik from '../../images/Group 20686.png';
import { Link } from "react-router-dom";
import tel from '../../images/phone-call 1.png'
import inout from '../../images/Instagram Outline.png'
import email from '../../images/envelope 2.png'
import faceout from '../../images/Facebook Outline.png'
import twitout from '../../images/Twitter Outline.png'

const Footer = () => {
  return (
    <div className="pad pt-5 foot w-100 d-flex flex-column flex-lg-row gap-5 justify-content-between">
      <div>
        <Logo src={plogo} className="ftlogo"/>
        <p className="pt-4 py-2 foottp">Your global tech journey begins here. Master the skills you need to start.</p>
        <div className="d-flex gap-3">
          <a href="https://instagram.com/pluralcode_academy?igshid=MzRlODBiNWFlZA=="><Logo src={inst} className="logfoot" /></a>
          <a href="https://www.facebook.com/PlcTechAcademy?mibextid=LQQJ4d"><Logo src={face} className="logfoot" /></a>
          <a href="https://twitter.com/pluralcode?s=21&t=B1MuR2VoGVHj3cpdZyDZzw"><Logo src={twit} className="logfoot" /></a>
          <a href="https://www.linkedin.com/company/pluralcode-technologies/"><Logo src={link} className="logfoot" /></a>
          <a href="https://www.tiktok.com/@pluralcodeacademy?_t=8cARWxT1YVK&_r=1"><Logo src={tik}  className="logfoot"/></a>
        </div>
      </div>

      <div className="w-100 row foottwo m-0 gap-4 gap-lg-0 justify-content-between  justify-content-lg-start pb-lg-5">
        <div className="p-0 col-sm-5 smww col-md-4 col-lg-3 d-flex flex-column gap-2">
          <h5 className="">Top Courses</h5>
          <Link to="/#cert">Data Analysis</Link>
          <Link to="/#cert">Data Science</Link>
          <Link to="/#cert">Data Engineering</Link>
          <Link to="/#cert">Full-Stack Development</Link>
          <Link to="/#cert">Front-End Development</Link>
          <Link to="/#cert">Product Design</Link>
          <Link to="/#cert">Product Management</Link>
          <Link to="/#cert">Product Marketing</Link>
        </div>
        <div className="p-0 col-sm-5 smww col-md-4 col-lg-3 d-flex flex-column gap-2">
          <h5 className="">Platforms</h5>
          <Link to="https://pluralcode.academy/sandbox">Pluralcode SandBox</Link>
          <Link to="https://pluralcode.academy/webseries">Web Series</Link>
          <Link to="https://pluralcode.academy/exclusive">Exclusive</Link>
        </div>
        <div className="p-0 col-sm-5 smww col-md-4 col-lg-3 d-flex flex-column gap-2">
          <h5 className="">Schools</h5>
          <Link to="https://pluralcode.academy/schools/data">School of Data</Link>
          <Link to="https://pluralcode.academy/schools/product">School of Product</Link>
          <Link to="https://pluralcode.academy/schools/programming">School of Engineering</Link>
        </div>
        <div className="p-0 col-sm-5 smww col-md-4 col-lg-3 d-flex flex-column gap-2">
          <h5 className="">Company</h5>
          <Link to="/#whypl">Why Pluralcode</Link>
          <Link to="/advisor">Talk to Student Advisor</Link>
          <Link to="https://pluralcode.academy/mentor">Become a Mentor</Link>
          <Link to="https://pluralcode.academy/services">Custom Software Development</Link>
          <Link to="https://pluralcode.academy/corporate-training">Corporate Trainings</Link>
          <Link to="https://pluralcode.academy/hire-talent">Hire Our Talents</Link>
        </div>
        <div className="p-0 col-sm-5 smww col-md-4 col-lg-3 d-flex flex-column gap-2">
          <h5 className="">Resources</h5>
          <Link to="https://pluralcode.academy/webseries">Webinar series</Link>
          <Link to="https://pluralcode.academy/sandbox">Events</Link>
          <Link to="/#faq">FAQs</Link>
          <Link to="/#accredit">Testimonials</Link>
          <Link to="/#talent">Where Our Talents Works</Link>
        </div>
        <div className="p-0 col-sm-5 smww col-md-4 col-lg-3 d-flex flex-column gap-2">
          <h5 className="">Policies</h5>
          <Link to="https://pluralcode.academy/payment/terms.html">Terms and Condition</Link>
          <Link to="https://pluralcode.academy/payment/terms.html">Student Loan Policy</Link>
          <Link to="https://pluralcode.academy/payment/terms.html">Refunds Policy</Link>
          <Link to="https://pluralcode.academy/payment/terms.html">Privacy Policy</Link>
        </div>
        <div className="d-flex cw p-0 col-sm-5 col-md-4 col-lg-3 flex-column gap-2">
          <h5 className="">Contact</h5>
          <div className="d-flex gap-3 align-items-center"><Logo className="flw" src={tel}/><Link to="tel:+2347083153185">+(234) 708-315-3185.</Link></div>
          <div className="d-flex gap-3 align-items-center"><Logo className="flw" src={tel}/><a href="tel:+2348131529862">+(234) 813-152-9862.</a></div>
          <div className="d-flex gap-3 align-items-center"><Logo className="flw" src={twitout} /><a href="https://twitter.com/pluralcode?s=21&t=B1MuR2VoGVHj3cpdZyDZzw">pluralcode</a></div>
          <div className="d-flex gap-3 align-items-center"><Logo className="flw" src={inout} /><a href="https://instagram.com/pluralcode_academy?igshid=MzRlODBiNWFlZA==">pluralcode_academy</a></div>
          <div className="d-flex gap-3 align-items-center"><Logo className="flw" src={faceout}/><a href="https://www.facebook.com/PlcTechAcademy?mibextid=LQQJ4d">pluralcode_academy</a></div>
          <div className="d-flex gap-3 align-items-center"><Logo className="flw" src={email}/><Link to="mailto:Info@pluralcode.academy">support@pluralcode.academy</Link></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
