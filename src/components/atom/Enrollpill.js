import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'

const Enrollpill = ({h3="", p="",src="", h5="",to="",linkchildren="", className="rounded-4 text-white stepone d-flex", children}) => {
  return (
    <div className={className}>
        <div className='p-2 p-md-4 d-flex flex-column justify-content-end enn'>
        <h3 className='fw-semibold sml'>{h3}</h3>
        <h5 className='smll'>{h5}</h5>
        <Link to={to} className="text-decoration-none ptcolor">{linkchildren}</Link>
        <p className='pseccolor enp'>{p}</p>
        {children}
        </div>
        <div className='pen'>
            <Logo src={src} className="en"/>
        </div>
      
    </div>
  )
}

export default Enrollpill
