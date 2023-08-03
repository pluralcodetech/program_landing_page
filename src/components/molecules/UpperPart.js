import React, { useState, useEffect } from "react";
import "boxicons";
import Button from "../atom/Button";
import { Link } from "react-router-dom";
import Logo from "../atom/Logo";
import upImg from "../../images/Group 20700.png"

const UpperPart = () => {
  // const [viewC, setViewC] = useState(false)
  const [dipcou, setDipCou] = useState([])
  const [entcou, setEntCou] = useState([])
  // const handleCourse = () =>{
  //   setViewC(!viewC)
  // }
 
  useEffect(() => {
    fetch("https://backend.pluralcode.institute/course-list")
      .then((response) => response.json())
      .then((result) => {
        setEntCou(result.certcourses);
        setDipCou(result.diplomacourses);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className=" pad pt-0 upperbg m-0 align-items-center">
      <div className="upperw m-auto pt-4 pt-lg-5 px-0 p-lg-0"
       data-aos="fade-up" data-aos-duration="2000"
       >
        <h1 className="pseccolor bold text-center pt-4">
          Acquire <span className="ptcolor">Tech Skills</span> For a Borderless
          Career.
        </h1>
        <p className="navtextcolor text-center m-auto normal pt-2">
        Learn from expert mentors, master in-demand skills and become a global professional in tech
        </p>
        <div className="upIm m-auto pt-4">
          <Logo src={upImg} className="w-100"/>

        <div className="btncont m-auto mt-4 d-flex flex-column flex-lg-row gap-lg-2 bg-white">
          <select  className="text-decoration-none border-0 pseccolor text-center justify-content-center w-100 d-flex align-items-center">
          {/* <Button
            children="Select"
            className="btn pseccolor"
            />
            <box-icon name='chevron-down' color="#222057"></box-icon> */}
            <option className="">Select Course</option>
            {entcou.map(each=><option>{each.name}</option>)}
        {dipcou.map(each=><option>{each.name}</option>)} 
            </select>
          <Link  to="https://pluralcode.academy/admissions/" className="w-100" >
          <Button
            children="Start Learning"
            className="btn button px-4 py-2 pbcolor bb"
            />
            </Link>
        </div>
        
        </div>
      </div>
    </div>
  );
};

export default UpperPart;
