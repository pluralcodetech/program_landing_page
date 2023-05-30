import React from 'react'

const Why = ({h2="", p="", className="rounded-4 why text-white pbcolor p-4"}) => {
  return (
    <div className={className}>
      <h2 className=''>{h2}
      </h2>
      <p>{p}
</p>

    </div>
  )
}

export default Why
