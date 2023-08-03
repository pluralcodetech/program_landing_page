import React from "react";
import Logo from "../atom/Logo";
import frame1 from "../../images/Frame 49 (12).png";
import frame2 from "../../images/Frame 49 (11).png";
import frame3 from "../../images/Frame 49 (22).png";
import frame4 from "../../images/Frame 49 (3).png";
import frame5 from "../../images/Frame 49 (4).png";
import frame6 from "../../images/Frame 49 (5).png";
import frame7 from "../../images/Frame 49 (6).png";
import frame8 from "../../images/Frame 49 (7).png";
import frame9 from "../../images/Frame 49 (8).png";
import frame10 from "../../images/Frame 49 (9).png";
import frame11 from "../../images/Frame 49 (10).png";
import scrum from "../../images/scrum.png";
import dip from "../../images/dip.png";
import dip1 from "../../images/dip1.png";
import dip2 from "../../images/dip2.png";
import dip3 from "../../images/dip3.png";
import { Element } from "react-scroll";

const Certificate = () => {
  return (
    <div className="pad certbg pt-lg-5 mt-3 mt-lg-5">
      <Element name="cert" id="cert">
        <ul className="nav nav-tabs mb-3 lineul" id="pills-tab" role="tablist">
          
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active py-3"
              id="pills-profile-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-profile"
              type="button"
              role="tab"
              aria-controls="pills-profile"
              aria-selected="false"
            >
              Diploma Programs
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link py-3"
              id="pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-home"
              type="button"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
            >
              Entry-Level Programs
            </button>
          </li>
        </ul>
        <div className="tab-content" id="pills-tabContent">
          <div
            className="tab-pane fade  "
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
          >
            <section className="text-center py-5">
              <h2 className="pseccolor fs-1">Entry-Level Programs</h2>
              <p className="cert pt-md-3 pb-4 m-auto navtextcolor">
                Choose the <span className="ptcolor">2-Months</span> Entry-Level Certificate Course you would like to learn and click the link underneath to chat with the Student Advisor and begin your enrollment.
              </p>
            </section>
            <section className="row px-2 px-lg-0 gap-4 seccert  justify-content-between">
              <div
                className="col-sm-12 col-md-12 col-lg-3 imgfolder shadow-lg"
                data-aos="zoom-in-up"
                data-aos-duration="2000"
              >
                <a href="https://pluralcode.academy/admissions/">
                  <Logo src={frame1} className="w-100" />
                </a>
                <div className="pt-3 d-flex flex-column">
                  <div className="certh">
                    <h5 className="">Product Design (UI / UX)</h5>
                    <p className="text">
                      Learn the principles of Product Design, User Research and
                      Interface Design.
                    </p>
                  </div>
                  <div className="d-flex align-items-center">
                    {/* <box-icon
                      type="logo"
                      name="whatsapp"
                      color="#F8991D"
                    ></box-icon> */}
                    <a
                      href="https://pluralcode.academy/admissions/"
                      className="ptcolor text-decoration-none"
                    >Enroll Now
                    </a>
                  </div>
                </div>
              </div>

              <div
                className="col-sm-12 col-md-12 col-lg-3 imgfolder shadow-lg"
                data-aos="zoom-in-up"
                data-aos-duration="2000"
              >
                <a
                  href="https://pluralcode.academy/admissions/
"
                >
                  <Logo src={frame2} className="w-100" />
                </a>
                <div className="pt-3 d-flex flex-column">
                  <div className="certh">
                    <h5 className="">Product Managment</h5>
                    <p className="text">
                      Master Product Management through our 12-week Masterclass.
                    </p>
                  </div>
                  <div className="d-flex align-items-center">
                    
                    <a
                      href="https://pluralcode.academy/admissions/
                    "
                      className="ptcolor text-decoration-none"
                    >
                      Enroll Now
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-sm-12 col-md-12 col-lg-3 imgfolder shadow-lg"
                data-aos="zoom-in-up"
                data-aos-duration="2000"
              >
                <a href="https://pluralcode.academy/admissions/">
                  <Logo src={frame3} className="w-100" />
                </a>
                <div className="pt-3 d-flex flex-column">
                  <div className="certh ">
                    <h5 className="">Business Analytics</h5>
                    <p className="text">
                      Learn the tools and skills for Business Intelligence and
                      Analytics.
                    </p>
                  </div>
                  <div className="d-flex align-items-center">
                    
                    <a
                      href="https://pluralcode.academy/admissions/"
                      className="ptcolor text-decoration-none"
                    >
                      Enroll Now
                    </a>
                  </div>
                </div>
              </div>

              <div
                className="col-sm-12 col-md-12 col-lg-3 imgfolder shadow-lg"
                data-aos="zoom-in-up"
                data-aos-duration="2000"
              >
                <a href="https://pluralcode.academy/admissions/">
                  <Logo src={frame4} className="w-100" />
                </a>
                <div className="pt-3 d-flex flex-column">
                  <div className="certh">
                    <h5 className="">Agile Project Management</h5>
                    <p className="text">
                      Master Agile in Product Management in just 12 weeks of
                      practical learning.
                    </p>
                  </div>
                  <div className="d-flex align-items-center">
                    
                    <a
                      href="https://pluralcode.academy/admissions/"
                      className="ptcolor text-decoration-none"
                    >
                      Enroll Now
                    </a>
                  </div>
                </div>
              </div>
            </section>

            <section className="row px-2 px-lg-0 gap-4 seccert pb-5 mb-5 justify-content-between align-items-center">
              <div
                className="col-sm-12 col-md-12 col-lg-4 imgfolder shadow-lg"
                data-aos="zoom-in-up"
                data-aos-duration="2000"
              >
                <a href="https://pluralcode.academy/admissions/">
                  <Logo src={frame5} className="w-100" />
                </a>
                <div className="pt-3 d-flex flex-column">
                  <div className="certh">
                    <h5 className="">Data Analytics</h5>
                    <p className="text">
                      Become a Professional Data Analyst with mastery of modern
                      tools.
                    </p>
                  </div>
                  <div className="d-flex align-items-center">
                    
                    <a
                      href="https://pluralcode.academy/admissions/"
                      className="ptcolor text-decoration-none"
                    >
                      Enroll Now
                    </a>
                  </div>
                </div>
              </div>

              <div
                className="col-sm-12 col-md-12 col-lg-4 imgfolder shadow-lg"
                data-aos="zoom-in-up"
                data-aos-duration="2000"
              >
                <a href="https://pluralcode.academy/admissions/">
                  <Logo src={frame6} className="w-100" />
                </a>
                <div className="pt-3 d-flex flex-column">
                  <div className="certh">
                    <h5 className="">Front-End Development</h5>
                    <p className="text">
                      Master Web Development through React, Bootstrap and
                      others.
                    </p>
                  </div>
                  <div className="d-flex align-items-center">
                    
                    <a
                      href="https://pluralcode.academy/admissions/"
                      className="ptcolor text-decoration-none"
                    >
                      Enroll Now
                    </a>
                  </div>
                </div>
              </div>

              <div
                className="col-sm-12 col-md-12 col-lg-4 imgfolder shadow-lg"
                data-aos="zoom-in-up"
                data-aos-duration="2000"
              >
                <a href="https://pluralcode.academy/admissions/">
                  <Logo src={frame7} className="w-100" />
                </a>
                <div className="pt-3 d-flex flex-column">
                  <div className="certh">
                    <h5 className="">Cloud Computing</h5>
                    <p className="text">
                      Become a Cloud Computing Expert through our 12 weeks
                      program.
                    </p>
                  </div>
                  <div className="d-flex align-items-center">
                  
                    <a
                      href="https://pluralcode.academy/admissions/"
                      className="ptcolor text-decoration-none"
                    >
                      Enroll Now
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-sm-12 col-md-12 col-lg-4 imgfolder shadow-lg"
                data-aos="zoom-in-up"
                data-aos-duration="2000"
              >
                <a href="https://pluralcode.academy/admissions/">
                  <Logo src={scrum} className="w-100" />
                </a>
                <div className="pt-3 d-flex flex-column">
                  <div className="certh">
                    <h5 className="">Scrum Project Management</h5>
                    <p className="text">
                      Learn the SCRUM principle of project management in our 12
                      weeks program.
                    </p>
                  </div>
                  <div className="d-flex align-items-center">
                  
                    <a
                      href="https://pluralcode.academy/admissions/"
                      className="ptcolor text-decoration-none"
                    >
                      Enroll Now
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div
            className="tab-pane fade show active"
            id="pills-profile"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
          >
            <section className="text-center py-4">
              <h2 className="pseccolor fs-1">Diploma Programs</h2>
              <p className="cert pt-md-3 pb-4 m-auto navtextcolor">
                Choose the <span className="ptcolor">4-Months</span> Diploma
                Program you would like to learn and click the Link underneath to
                chat with the Student Advisor and begin your enrollment.
              </p>
            </section>
            <section className="row px-2 px-lg-0 gap-4 seccert pt-3 pb-5 mb-5 justify-content-between">
              <div
                className="col-sm-12 col-md-12 col-lg-3 imgfolder shadow-lg"
                data-aos="zoom-in-up"
                data-aos-duration="2000"
              >
                <a href="https://pluralcode.academy/admissions/">
                  <Logo src={frame8} className="w-100" />
                </a>
                <div className="pt-3 d-flex flex-column">
                  <div className="certh">
                    <h5 className="">Diploma in Product Mgt.</h5>
                    <p className="text">
                      Master the industry-standards and tools for Product
                      Management.
                    </p>
                  </div>
                  <div className="d-flex align-items-center">
                   
                    <a
                      href="https://pluralcode.academy/admissions/"
                      className="ptcolor text-decoration-none"
                    >
                      Enroll Now
                    </a>
                  </div>
                </div>
              </div>

              <div
                className="col-sm-12 col-md-12 col-lg-3 imgfolder shadow-lg"
                data-aos="zoom-in-up"
                data-aos-duration="2000"
              >
                <a href="https://pluralcode.academy/admissions/">
                  <Logo src={frame9} className="w-100" />
                </a>
                <div className="pt-3 d-flex flex-column">
                  <div className="certh">
                    <h5 className="">Diploma in Data Analytics </h5>
                    <p className="text">
                      Advanced Analytics with a semester of Data Engineering or
                      Data Science.
                    </p>
                  </div>
                  <div className="d-flex align-items-center">
                    
                    <a
                      href="https://pluralcode.academy/admissions/"
                      className="ptcolor text-decoration-none"
                    >
                      Enroll Now
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-sm-12 col-md-12 col-lg-3 imgfolder shadow-lg"
                data-aos="zoom-in-up"
                data-aos-duration="2000"
              >
                <a href="https://pluralcode.academy/admissions/">
                  <Logo src={frame10} className="w-100" />
                </a>
                <div className="pt-3 d-flex flex-column">
                  <div className="certh ">
                    <h5 className="">Diploma in Cloud Dev.</h5>
                    <p className="text">
                      Master Cloud Computing and development with AWS and MS
                      Azure.
                    </p>
                  </div>
                  <div className="d-flex align-items-center">
                   
                    <a
                      href="https://pluralcode.academy/admissions/"
                      className="ptcolor text-decoration-none"
                    >
                      Enroll Now
                    </a>
                  </div>
                </div>
              </div>

              <div
                className="col-sm-12 col-md-12 col-lg-3 imgfolder shadow-lg"
                data-aos="zoom-in-up"
                data-aos-duration="2000"
              >
                <a href="https://pluralcode.academy/admissions/">
                  <Logo src={frame11} className="w-100" />
                </a>
                <div className="pt-3 d-flex flex-column">
                  <div className="certh">
                    <h5 className="fw-semibold">Diploma in Fullstack Dev.</h5>
                    <p className="text">
                      Master JS Based FullStack Development in a practical
                      environment.
                    </p>
                  </div>
                  <div className="d-flex align-items-center">
                 
                    <a
                      href="https://pluralcode.academy/admissions/"
                      className="ptcolor text-decoration-none"
                    >
                      Enroll Now
                    </a>
                  </div>
                </div>
              </div>
            </section>
            <section className="row px-2 px-lg-0 gap-4 seccert pt-3 pb-5 mb-5 justify-content-between">
              <div
                className="col-sm-12 col-md-12 col-lg-3 imgfolder shadow-lg"
                data-aos="zoom-in-up"
                data-aos-duration="2000"
              >
                <a href="https://pluralcode.academy/admissions/">
                  <Logo src={dip} className="w-100" />
                </a>
                <div className="pt-3 d-flex flex-column">
                  <div className="certh">
                    <h5 className="">Diploma in Product Design</h5>
                    <p className="text">
                      Learn advanced UI design, User Experience and Interaction
                      Design.
                    </p>
                  </div>
                  <div className="d-flex align-items-center">
                   
                    <a
                      href="https://pluralcode.academy/admissions/"
                      className="ptcolor text-decoration-none"
                    >
                      Enroll Now
                    </a>
                  </div>
                </div>
              </div>

              <div
                className="col-sm-12 col-md-12 col-lg-3 imgfolder shadow-lg"
                data-aos="zoom-in-up"
                data-aos-duration="2000"
              >
                <a href="https://pluralcode.academy/admissions/">
                  <Logo src={dip1} className="w-100" />
                </a>
                <div className="pt-3 d-flex flex-column">
                  <div className="certh">
                    <h5 className="">Diploma in Agile Proj. MGT.</h5>
                    <p className="text">
                      Agile Project Management & SCRUM from beginner to advanced
                      levels
                    </p>
                  </div>
                  <div className="d-flex align-items-center">
                   
                    <a
                      href="https://pluralcode.academy/admissions/"
                      className="ptcolor text-decoration-none"
                    >
                      Enroll Now
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-sm-12 col-md-12 col-lg-3 imgfolder shadow-lg"
                data-aos="zoom-in-up"
                data-aos-duration="2000"
              >
                <a href="https://pluralcode.academy/admissions/">
                  <Logo src={dip2} className="w-100" />
                </a>
                <div className="pt-3 d-flex flex-column">
                  <div className="certh ">
                    <h5 className="">Diploma in Bus. Analytics.</h5>
                    <p className="text">
                      Learn Business Analysis from beginner to advanced levels
                      in 20 weeks.
                    </p>
                  </div>
                  <div className="d-flex align-items-center">
                 
                    <a
                      href="https://pluralcode.academy/admissions/"
                      className="ptcolor text-decoration-none"
                    >
                      Enroll Now
                    </a>
                  </div>
                </div>
              </div>

              <div
                className="col-sm-12 col-md-12 col-lg-3 imgfolder shadow-lg"
                data-aos="zoom-in-up"
                data-aos-duration="2000"
              >
                <a href="https://pluralcode.academy/admissions/">
                  <Logo src={dip3} className="w-100" />
                </a>
                <div className="pt-3 d-flex flex-column">
                  <div className="certh">
                    <h5 className="fw-semibold">Diploma in Cyber Security</h5>
                    <p className="text">
                      Master Cyber Security and Penetration Testing through this
                      Diploma program.
                    </p>
                  </div>
                  <div className="d-flex align-items-center">
                    
                    <a
                      href="https://pluralcode.academy/admissions/"
                      className="ptcolor text-decoration-none"
                    >
                      Enroll Now
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </Element>
    </div>
  );
};

export default Certificate;
