import React from 'react'

const Heading = ({title,subTitle}) => {
  return (
    <div className='mb-12'>
        <h2 className="text-4xl font-bold text-center text-productTitle mb-4">{title}</h2>
        <h3 className='"text-base font-bold text-center text-gray-400"'>{subTitle}</h3>
    </div>
  )
}

export default Heading