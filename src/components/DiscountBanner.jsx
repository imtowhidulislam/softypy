import React from 'react'
import Banner from "../assets/banner.png"
import {CiVideoOn} from "react-icons/ci"

const DiscountBanner = () => {
  return (
    <div className='grid place-items-center my-24'>
      <div className='container'>
        <div className='banner relative'>
          <img src={Banner} className='w-full' alt="banner" />
          <div className='video'>
            <CiVideoOn />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DiscountBanner