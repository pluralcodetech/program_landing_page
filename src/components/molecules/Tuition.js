import React, { useEffect, useState } from "react";
import Button from "../atom/Button";
import axios from "axios";
import { Link } from "react-scroll";
import { Element } from "react-scroll";

const Tuition = () => {
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");
  const [cert, setCert] = useState([]);
  const [onsite, setOnsite] = useState([]);
  const [online, setOnline] = useState([]);

  useEffect(() => {
    async function getApi() {
      try {
        const response = await axios.get(
          "https://pluralcode.academy/pluralcode_apis/api/list_courses_details"
        );
        setCert(response.data.certification);
        setOnline(response.data.virtual_diploma);
        setOnsite(response.data.onsite_diploma);
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
            <h5 className="tuitc fs-5 text-center py-1 py-lg-3">
              Certificate Courses
            </h5>
            {loading && <p className="fs-5">Loading...</p>}
            {err && <p className="fs-5">An error occured</p>}
            <table className="w-100">
              <thead>
                <tr className="tuitc">
                  <td className="">Course</td>
                  <td className="">Full Payment Plan (NG)</td>
                  <td>Part Payment Plan (NG)</td>
                  <td>Full Payment Plan (US)</td>
                  <td>Part Payment Plan (US)</td>
                </tr>
              </thead>
              {cert.map((cert) => (
                <tbody key={cert.id}>
                  <tr className="tuitcc">
                    <td>{cert["name"]}</td>
                    <td>&#8358; {numFor.format(cert["course_fee"])}</td>
                    <td>&#8358; {numFor.format(cert["part_payment"])}</td>
                    <td>$ {cert["usd_full_payment"]}</td>
                    <td>$ {cert["usd_part_payment"]}</td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
          <div className="course-box col">
            <h5 className="tuitc fs-5 text-center py-1 py-lg-3">
              Onsite Diploma Courses
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
              {onsite.map((onsiteCourse) => (
                <tbody key={onsiteCourse.id}>
                  <tr className="tuitcc">
                    <td>{onsiteCourse["name"]}</td>
                    <td>&#8358; {numFor.format(onsiteCourse["course_fee"])}</td>
                    <td>
                      &#8358; {numFor.format(onsiteCourse["part_payment"])}
                    </td>
                    <td>$ {onsiteCourse["usd_full_payment"]}</td>
                    <td>$ {onsiteCourse["usd_part_payment"]}</td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
          <div className="course-box col">
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
          </div>
        </div>
        <p className="navtextcolor tuitp">
          Pluralcode often has discount scholarship programs running from time
          to time, if you hurry, you may qualify for one.
        </p>
        <div className="text-center py-3 py-lg-5">
          <Link to="beginen">
            <Button
              className="btn button px-5 pbcolor"
              children="Begin Enrollment"
            />
          </Link>
        </div>
    </div>
      </Element>
  );
};

export default Tuition;
