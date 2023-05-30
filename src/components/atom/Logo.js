import React from 'react'

const Logo = ({src="", alt="", ...rest}) => {
  return (
    <img src={src} alt={alt} {...rest}/>
  )
}

export default Logo
