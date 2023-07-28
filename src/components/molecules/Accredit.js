import React from "react";
import Logo from "../atom/Logo";
import sayimg5 from "../../images/Group 142.png";
import acc from "../../images/Frame 60917.png";
import qt1 from "../../images/quoteone.png";
import qt2 from "../../images/quotetwo.png";
import sayimg from "../../images/Group 14 (1).png";
import sayimg1 from "../../images/wom.png";
import sayimg2 from "../../images/Group 153.png";
import sayimg3 from "../../images/Group 153 (1).png";
import sayimg6 from "../../images/Group 14.png";
import { Element } from "react-scroll";

const list = [
  {
    id: "01",
    name: "Etim Samuel",
    role: "Product Designer",
    img: sayimg,
    comment:
      "Had a nice time during the product design class, the mentor was on point and apt. I came in as a learner and finished a pro. The payment plan was good as well. It was an entire lovely experience.",
  },
  {
    id: "02",
    name: "Temiloluwa Abimbola",
    role: "Product Designer",
    img: sayimg2,
    comment:
      "I learnt product design, which is everything a business owner does before any product is being launched and while the product is ongoing. The class was simplified to everyone’s level and was worked around everyone's schedule as well. That made it easy for a working-class person like me to attend. Also, the instructor and academy team were amazing.",
  },
  {
    id: "03",
    name: "Paul Makinde",
    role: "Full-Stack Development",
    img: sayimg3,
    comment:
      "What made my experience great at plural code academy was the fact I was carried along with the staff. Especially my mentor Mr. Cyril who was patient and well-detailed in his teachings. It was more like I was a staff here, everyone here at plural code academy is friendly and the atmosphere is very conducive for learning. My experience on a scale so far is 100%. Thank you to MD for making such a great academy.",
  },
];
const list2 = [
  {
    id: "04",
    name: "Micah Emmanuel",
    role: "Product Designer",
    img: sayimg1,
    comment:
      "I'm currently taking a course on product design and it's been a smooth ride, the instructor is not only detailed but also very patient, it doesn't feel like we're strangers to this course. Absolutely beginner friendly and their client services is great. Would definitely recommend",
  },
  {
    id: "05",
    name: "Oparaugo Tochukwu",
    role: "Product Management",
    img: sayimg6,
    comment:
      "Started there a noob and left with a really great experience, from the tutoring to the mentoring, follow up and recommendations. Promote a community for within and helped me out of the shell. I really enjoyed my time",
  },
  {
    id: "06",
    name: "Ojerinde Adenike",
    role: "Product Designer",
    img: sayimg5,
    comment:
      "I learned a lot and networking was top-notch. We were able to meet with calm external professionals that enlightened us more about product design. It was transparent and I could say confidently that it was worth my time, resources, and emotions.I look forward to making them proud and a point of reference in the future.",
  },
];

const Accredit = () => {
  return (
    <div className=" pseccolorbg topbody">
      <Element name="accredit" id="accredit">
      <div className="pseccolorbg top d-flex flex-column flex-md-row align-items-center flex-column-reverse justify-content-between">
        <div className="text-white">
          <h2>Internationally Accredited</h2>
          <p className="pt-1 pt-lg-3">
            Pluralcode Institute is formally accredited by the American Council
            of Training and Development (ACTD) after meeting its global
            standards for accreditation. We are immensely proud of this and will
            continue to build the largest school of tech in Africa.
          </p>
        </div>
        <div className="log pt-2 pt-lg-0">
          <Logo src={acc} className="ac" />
        </div>
      </div>
      {/* carousel */}
      <div className="accpic">
        <h3 className="text-center acchead py-5">
          What <span className="ptcolor">Our Students</span> Are Saying
        </h3>
        <div className="d-flex accbox">
          {list.map((each, idx) => {
            return (
              <div className="acccard" key={idx}>
                <div className="d-flex align-items-end">
                  <div className="accimg">
                    <Logo src={each.img} className="" />
                  </div>
                  <h5 className="acctext ps-3">
                    {each.name} | <span>{each.role}</span>
                  </h5>
                </div>
                <div className=" mt-3 d-flex">
                  <div>
                    <Logo src={qt1} className="qtone" />
                  </div>
                  <span className="accp">{each.comment}</span>
                  <div className="d-flex align-items-end">
                    <Logo src={qt2} className="qttwo" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="d-flex accbox">
          {list2.map((each, idx) => {
            return (
              <div className="acccard2" key={idx}>
                <div className="d-flex align-items-end">
                  <div className="accimg">
                    <Logo src={each.img} className="" />
                  </div>
                  <h5 className="acctext ps-3">
                    {each.name} | <span>{each.role}</span>
                  </h5>
                </div>
                <div className=" mt-3 d-flex">
                  <div>
                    <Logo src={qt1} className="qtone" />
                  </div>
                  <span className="accp">{each.comment}</span>
                  <div className="d-flex align-items-end">
                    <Logo src={qt2} className="qttwo" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      </Element>
    </div>
  );
};

export default Accredit;
