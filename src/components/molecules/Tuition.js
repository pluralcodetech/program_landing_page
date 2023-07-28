import React, { useEffect, useState } from "react";
import axios from "axios";
import elipse from "../../images/Ellipse 1.png";
import { Element } from "react-scroll";
import Logo from "../atom/Logo";

const Tuition = () => {
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");
  const [cert, setCert] = useState([]);
  // const [onsite, setOnsite] = useState([]);
  // const [online, setOnline] = useState([]);

  const [title, setTitle] = useState(false);
  const top="Difference between the Diploma and the Entry-Level Courses"
  const body= `The Entry-Level certificate courses focus on foundational knowledge of the course, with 2 months intensive live classes designed to get you ready for your first job in the field.
  
  The Diploma on the other hand focuses on getting you from beginner to advanced level in s 4 month period spread across 2 semesters, examinations, projects, additional 1-2 month internships and concludes with the issuing of internationally valid Diploma from Pluralcode & one of our accreditation partners in the USA, Canada or Europe.`

  const handleState = () => {
    setTitle(!title);
  };
  useEffect(() => { 
    async function getApi() {
      try {
        const response = await axios.get(
          "https://backend.pluralcode.institute/websitecourse-list"
        );
        setCert(response.data);
        // setOnline(response.data.virtual_diploma);
        // setOnsite(response.data.onsite_diploma);
        setErr(null);
      } catch (error) {
        console.log(error.message);
        setErr(error.message);
      } finally {
        setLoading(false);
      }
    }
    getApi();
  }, []);

  const numFor = Intl.NumberFormat("en-US");

  return (
      <Element name="tuit" id="tuit">
    <div className="pad ">
        <h1 className="pseccolor text-center pb-2 pb-lg-4">Tuition Fees</h1>
        <div className="row gap-3 m-0 flex-column">
          <div className="course-box col">
            <h5 className="tuitc tuitfee fs-5 text-center py-1 py-lg-3">
            Tuition fees and payment plans for each program type
            </h5>
            {loading && <p className="fs-5">Loading...</p>}
            {err && <p className="fs-5">An error occured</p>}
            <table className="w-100">
              <thead>
                <tr className="tuitc">
                  <td className="">Program Type</td>
                  <td className="">Full Payment Plan (US)</td>
                  <td>Part Payment Plan (US)</td>
                  <td>Full Payment Plan (NG)</td>
                  <td>Part Payment Plan (NG)</td>
                </tr>
              </thead>
              {cert.map((cert) => (
                <tbody key={cert.name}>
                  <tr className="tuitcc">
                    <td>{cert["name"]}</td>
                    <td>$ {isNaN(cert["usdprice"]) ? 0 : numFor.format(cert["usdprice"])}</td>
                    {isNaN(cert["partpaymentusd"]) ? <td>-</td> :<td>$ {numFor.format(cert["partpaymentusd"])}</td>
                      }
                    <td>&#8358; {isNaN(cert["paymentFeengn"]) ? 0 : numFor.format(cert["paymentFeengn"])}</td>
                     {isNaN(cert["partpaymentfeengn"]) ? <td>-</td> :<td>&#8358; {numFor.format(cert["partpaymentfeengn"])}</td>
}
                    
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
         
          {/* <div className="course-box col">
            <h5 className="tuitc fs-5 text-center py-1 py-lg-3">
              Virtual (Online) Diploma Courses
            </h5>
            <table className="w-100">
              <thead>
                <tr className="tuitc">
                  <td>Course</td>
                  <td>Full Payment Plan (NG)</td>
                  <td>Part Payment Plan (NG)</td>
                  <td>Full Payment Plan (US)</td>
                  <td>Part Payment Plan (US)</td>
                </tr>
              </thead>
              {online.map((onlineCourse) => (
                <tbody key={onlineCourse.id}>
                  <tr className="tuitcc">
                    <td>{onlineCourse["name"]}</td>
                    <td>&#8358; {numFor.format(onlineCourse["course_fee"])}</td>
                    <td>
                      &#8358; {numFor.format(onlineCourse["part_payment"])}
                    </td>
                    <td>$ {onlineCourse["usd_full_payment"]}</td>
                    <td>$ {onlineCourse["usd_part_payment"]}</td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div> */}
        </div>
        <div className=" mt-5 py-2 faqlist">
      {!title && (
        <div
          className="w-100 py-3 px-lg-5 d-flex align-items-center justify-content-between border-bottom rounded-4"
          onClick={handleState}
        >
          <h6 className="w-100 d-flex align-items-center faqh5">
            <Logo src={elipse} className="elip" />
            {top}
          </h6>
          <box-icon name="chevron-right" className="w-100" id="right"></box-icon>
        </div>
      )}
      {title && (
        <div
          className="w-100 faq py-3 px-lg-5 d-flex align-items-center justify-content-between border-bottom rounded-4"
          onClick={handleState}
        >
          <h6 className="w-100 d-flex align-items-center faqh5 fw-semibold">
            <Logo src={elipse} className="elip" />
            {top}
          </h6>
          <box-icon name="chevron-up" className="w-100" id="right"></box-icon>
        </div>
      )}
      {title && (
        <div className="py-3 px-lg-5 faq">
          <p className="dipEnt">Diploma Vs Entry-Level</p>
          <pre className="faqthin ">
           {body}
          </pre>
        </div>
      )}
    </div>
    </div>
      </Element>
  );
};

export default Tuition;
