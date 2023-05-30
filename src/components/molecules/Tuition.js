import React, { useEffect, useState } from "react";
import Button from "../atom/Button";
import axios from "axios";
import { Link } from "react-scroll";
import { Element } from "react-scroll";

const Tuition = () => {
  const [loading,setLoading] =useState(true)
  const [err, setErr] = useState("");
  const [fees, setFees] = useState([]);

  useEffect(() => {
    async function getApi() {
      try {
        const response = await axios.get(
          "https://pluralcode.academy/pluralcode_apis/api/list_courses_details"
        );
        setFees(response.data);
        setErr(null)
      } catch (error) {
        console.log(error.message);
        setErr(error.message)
      } finally {
        setLoading(false)
      }
    }
    getApi();
  }, []);

  console.log(fees);

  return (
    <div className="pad">
      <Element name="tuit">
        <h1 className="pseccolor text-center pb-2 pb-lg-4">Tuition Fees</h1>
        <div className="row gap-3">
          <div className="course-box col">
            <h5 className="tuitc fs-5 text-center py-1 py-lg-3">Certificate Courses</h5>
            <table className="w-100">
              <thead>
                <tr className="tuitc">
                  <td className="pe-1">Course</td>
                  <td className="pe-1">Full Payment Plan</td>
                  <td>Part Payment Plan</td>
                </tr>
              </thead>
              {loading && <p className="fs-5">Loading...</p>}
              {err && <p className="fs-5">An error occured</p>}
              <tbody>
                <tr className="tuitcc">
                  <td>{fees?.result?.cloud[0]["name"]}</td>
                  <td>&#8358;{fees?.result?.cloud[0]["course_fee"]}</td>
                  <td>&#8358;{fees?.result?.cloud[0]["part_payment"]}</td>
                </tr>
                <tr className="tuitcc">
                  <td>{fees?.result?.data[0]["name"]}</td>
                  <td>&#8358;{fees?.result?.data[0]["course_fee"]}</td>
                  <td>&#8358;{fees?.result?.data[0]["part_payment"]}</td>
                </tr>
                <tr className="tuitcc">
                  <td>{fees?.result?.data[1]["name"]}</td>
                  <td>&#8358;{fees?.result?.data[1]["course_fee"]}</td>
                  <td>&#8358;{fees?.result?.data[1]["part_payment"]}</td>
                </tr>
                <tr className="tuitcc">
                  <td>{fees?.result?.product[0]["name"]}</td>
                  <td>&#8358;{fees?.result?.product[0]["course_fee"]}</td>
                  <td>&#8358;{fees?.result?.product[0]["part_payment"]}</td>
                </tr>
                <tr className="tuitcc">
                  <td>{fees?.result?.product[1]["name"]}</td>
                  <td>&#8358;{fees?.result?.product[1]["course_fee"]}</td>
                  <td>&#8358;{fees?.result?.product[1]["part_payment"]}</td>
                </tr>
                <tr className="tuitcc">
                  <td>{fees?.result?.product[2]["name"]}</td>
                  <td>&#8358;{fees?.result?.product[2]["course_fee"]}</td>
                  <td>&#8358;{fees?.result?.product[2]["part_payment"]}</td>
                </tr>
                <tr className="tuitcc">
                  <td>{fees?.result?.software[0]["name"]}</td>
                  <td>&#8358;{fees?.result?.software[0]["course_fee"]}</td>
                  <td>&#8358;{fees?.result?.software[0]["part_payment"]}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="course-box col">
            <h5 className="tuitc fs-5 text-center py-1 py-lg-3">Diploma Courses</h5>
            <table className="w-100">
              <thead>
                <tr className="tuitc">
                  <td>Course</td>
                  <td>Full Payment Plan</td>
                  <td>Part Payment Plan</td>
                </tr>
              </thead>
              <tbody>
                 
            <tr className="tuitcc">
            <td>{fees?.diploma?.diploma_software[0]["name"]}</td>
            <td>&#8358;{fees?.diploma?.diploma_software[0]["course_fee"]}</td>
            <td>&#8358;{fees?.diploma?.diploma_software[0]["part_payment"]}</td>
            </tr>
            <tr className="tuitcc">
            <td>{fees?.diploma?.diploma_cloud[0]["name"]}</td>
            <td>&#8358;{fees?.diploma?.diploma_cloud[0]["course_fee"]}</td>
            <td>&#8358;{fees?.diploma?.diploma_cloud[0]["part_payment"]}</td>
            </tr>
            <tr className="tuitcc">
            <td>{fees?.diploma?.diploma_data[0]["name"]}</td>
            <td>&#8358;{fees?.diploma?.diploma_data[0]["course_fee"]}</td>
            <td>&#8358;{fees?.diploma?.diploma_data[0]["part_payment"]}</td>
            </tr>
            </tbody>
            </table>
          </div>
        </div>
        <p className="navtextcolor tuitp">
          Pluralcode often has discount scholarship programs running from time
          to time, if you hurry, you may qualify for one.
        </p>
        <div className="text-center py-3 py-lg-5">
          <Link to="beginen" smooth={true}>
            <Button
              className="btn button px-5 pbcolor"
              children="Begin Enrollment"
            />
          </Link>
        </div>
      </Element>
    </div>
  );
};

export default Tuition;
