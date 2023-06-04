import React from 'react'
import Logo from '../atom/Logo'
import timg1 from '../../images/palmpay.png';
import timg2 from '../../images/palmpay (1).png';
import timg3 from '../../images/palmpay (2).png';
import timg4 from '../../images/palmpay (3).png';
import timg5 from '../../images/palmpay (4).png';
import timg8 from '../../images/palmpay (7).png';
import timg6 from '../../images/palmpay (5).png';
import timg7 from '../../images/palmpay (6).png';
import timg9 from '../../images/afriglobe.png';
import { Element } from 'react-scroll';

const Talent = () => {
  return (
    <Element name="talent" id="talent">
    <div className='talent pad'>
      <h3 className='pseccolor text-center pt-lg-5 fw-semibold'>Where Our Talents Work</h3>
      <div className='d-flex flex-wrap justify-content-center gap-4 talw' data-aos="zoom-in-up" data-aos-duration="2000">
        <div className='talent-img'><Logo src={timg1} className="w-100"/></div>
        <div className='talent-img'><Logo src={timg2} className="w-100"/></div>
        <div className='talent-img'><Logo src={timg3} className="w-100"/></div>
        <div className='talent-img'><Logo src={timg4} className="w-100"/></div>
        <div className='talent-img'><Logo src={timg5} className="w-100"/></div>
        <div className='talent-img'><Logo src={timg9} className="w-100"/></div>
        <div className='talent-img'><Logo src={timg8} className="w-100"/></div>
        <div className='talent-img'><Logo src={timg6} className="w-100"/></div>
        <div className='talent-img'><Logo src={timg7} className="w-100"/></div>
      </div>
    </div>
    </Element>
  )
}

export default Talent
