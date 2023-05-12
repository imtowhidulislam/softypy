import React from 'react'

const Heading = ({title,subTitle}) => {
  return (
    <div className='mb-12 px-8 sm:px-4'>
        <h2 className="text-4xl font-bold text-center text-productTitle mb-4">{title}</h2>
        <div className='grid place-items-center'>
            <h3 className='"text-base max-w-xl text-gray-400 font-bold text-center text-gray-400"'>{subTitle}</h3>
        </div>
    </div>
  )
}

export default Heading