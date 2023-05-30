import React from 'react';
import { Link } from 'react-scroll';
import Logo from '../atom/Logo';
import pix1 from '../../images/Frame 49.png';
import pix2 from '../../images/Frame 49 (1).png';
import pix3 from '../../images/Frame 49 (2).png';

const Press = () => {
  return (
    <div className='text-center py-5 my-5 pad'>
      <h1 className='pseccolor'>Pluralcode in the press</h1>
      <p className='press py-3 m-auto navtextcolor'>Good things are hard to keep hidden and we are no exception. Find out what has been written in the news about Pluralcode, we will continue to work hard and build Africa's largest school of technology.</p>

      <section className="row gap-4 seccert justify-content-center text-start">
        <div className="col-sm-12 col-md-12 col-lg-3 p-4 press-box" data-aos="zoom-in-up" data-aos-duration="2000">
          <Logo src={pix1} className="w-100"/>
          <div className="pt-3 d-flex flex-column justify-content-between">
            <div className='ph'>

            <h5 className='fw-semibold'>Techpoint Africa</h5>
            <p className="text">
            Pluralcode partners with Finquest Finance to launch ‘Learn Now, Pay Later’
            </p>
            </div>
            <div className="">
              <Link to="#" className="ptcolor text-decoration-none ps-1">
                View Magazine
              </Link>
            </div>
          </div>
        </div>

        <div className="col-sm-12 col-md-12 col-lg-3 p-4 press-box" data-aos="zoom-in-up" data-aos-duration="2000">
          <Logo src={pix2} className="w-100"/>
          <div className="pt-3 d-flex flex-column justify-content-between">
            <div className='ph'>

            <h5 className='fw-semibold'>TechNext NG</h5>
            <p className="text">Pluralcode, is on a mission to build Africa's largest tech school</p>
            </div>
            <div className="">
              <Link to="#" className="ptcolor text-decoration-none">
                View Magazine
              </Link>
            </div>
          </div>
        </div>

        <div className="col-sm-12 col-md-12 col-lg-3 p-4 press-box" data-aos="zoom-in-up" data-aos-duration="2000">
          <Logo src={pix3} className="w-100"/>
          <div className="pt-3 d-flex flex-column justify-content-between">
            <div className='ph'>

            <h5 className='fw-semibold'>Business Day</h5>
            <p className="text">
            Introducing Pluralcode, a fast-growing Ed-tech company.
            </p>
            </div>
            <div className="">
              <Link to="" className="ptcolor text-decoration-none">
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
