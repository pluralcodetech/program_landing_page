import React, {useEffect, useState} from "react";
import "boxicons";
import Button from "../atom/Button";
// import Logo from "../atom/Logo";
// import upImg from "../../images/Group 20700.png"
import { Link } from "react-router-dom";

const Lowerpart = () => {
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
    <div className=" pad py-lg-5 lowerbg m-0 align-items-center">
      <div className="upperw m-auto pt-4 pt-lg-5 px-0 p-lg-0"
       data-aos="fade-up" data-aos-duration="2000"
       >
        <h1 className="pseccolor bold text-center pt-4">
          Start <span className="ptcolor">Learning</span>
        </h1>
        <p className="navtextcolor text-center m-auto normal pt-2">
        Pick a course below to start learning, complete your application process and begin your tech journey right away.
        </p>
        <div className="upIm m-auto pt-4">

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
          <Link  to="#" className="w-100" >
          <Button
            children="Start Learning"
            className="btn button px-4 pbcolor bb"
            />
            </Link>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Lowerpart
