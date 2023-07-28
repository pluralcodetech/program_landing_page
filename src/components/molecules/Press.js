import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../atom/Logo';
import pix1 from '../../images/Frame 49.png';
import pix2 from '../../images/Frame 49 (1).png';
import pix3 from '../../images/Frame 49 (2).png';

const Press = () => {
  return (
    <div className='text-center py-5  pad begin-enroll'>
      <h1 className='pseccolor pt-5'>Pluralcode in the press</h1>
      <p className='press py-3 m-auto navtextcolor'>Good things are hard to keep hidden and we are no exception. Find out what has been written in the news about Pluralcode, we will continue to work hard and build Africa's largest school of technology.</p>

      <section className="row gap-4 px-2 px-lg-0 seccert justify-content-center text-start">
        <div className="col-sm-12 col-md-12 col-lg-3 p-4 press-box" data-aos="zoom-in-up" data-aos-duration="2000">
          <Logo src={pix1} className="w-100"/>
          <div className="pt-3 d-flex flex-column justify-content-between">
            <div className='ph'>

            <h5 className=''>Techpoint Africa</h5>
            <p className="w-100 text">
            Pluralcode partners with Finquest Finance to launch ‘Learn Now, Pay Later’
            </p>
            
            </div>
            <div className="">
              <Link to="https://techpoint.africa/2023/01/27/pluralcode-partners-with-finquest-finance-to-launch-learn-now-pay-later-for-nigerian-tech-enthusiasts/" className="ptcolor text-decoration-none ps-1">
                View Magazine
              </Link>
            </div>
          </div>
        </div>

        <div className="col-sm-12 col-md-12 col-lg-3 p-4 press-box" data-aos="zoom-in-up" data-aos-duration="2000">
          <Logo src={pix2} className="w-100"/>
          <div className="pt-3 d-flex flex-column justify-content-between">
            <div className='ph'>

            <h5 className=''>TechNext NG</h5>
            <p className="w-100 text">Pluralcode, is on a mission to build Africa's largest tech school</p>
            </div>
            <div className="">
              <Link to="https://technext.ng/2023/01/26/pluralcode-mission-africa-tech-school/" className="ptcolor text-decoration-none">
                View Magazine
              </Link>
            </div>
          </div>
        </div>

        <div className="col-sm-12 col-md-12 col-lg-3 p-4 press-box" data-aos="zoom-in-up" data-aos-duration="2000">
          <Logo src={pix3} className="w-100"/>
          <div className="pt-3 d-flex flex-column justify-content-between">
            <div className='ph'>

            <h5 className=''>Business Day</h5>
            <p className="w-100 text">
            Introducing Pluralcode, a fast-growing Ed-tech company.
            </p>
            </div>
            <div className="">
              <Link to="https://businessday.ng/sponsored/article/nigerian-ed-tech-company-pluralcode-is-on-a-mission-to-build-africas-largest-tech-school/" className="ptcolor text-decoration-none">
                View Magazine
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Press
