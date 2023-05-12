import React from 'react'
import {FaFacebookSquare,FaTwitterSquare,FaWhatsappSquare,FaInstagramSquare} from "react-icons/fa";
import {AiOutlineMail,AiOutlineGlobal} from "react-icons/ai";
import {BsTelephone} from "react-icons/bs"
// import {GrLocation} from "react-icons/gr"
import {ImLocation2} from "react-icons/im"
// import {IoLocationOutline} from "react-icons/io"

import Button from './Button'

const Footer = () => {
  return (
    <div className='bg-footerClr p-16 grid place-items-center'>
        <div className='container'>
            <div className='grid grid-cols-responsiveLayout gap-8 place-items-start text-gray-50'>
                <div className=''>
                    <h2 className='text-xl font-bold capitalize'>bd office address</h2>
                    <br />
                    <div className='flex justify-btween gap-3'>
                        <BsTelephone className="text-2xl" />
                        <h2 className="text-base font-bold ">+0034546566</h2>
                    </div>
                    <div className='flex justify-btween gap-3 my-4'>
                        <BsTelephone className="text-2xl" />
                        <h2 className="text-base font-bold ">+3463463234</h2>
                    </div>
                    <div  className='flex justify-btween gap-3'>
                        <ImLocation2 className='text-4xl text-gray-50 className="text-4xl"' />
                        <h2 className="text-base font-bold ">Dhaka Tower, L XX, XX Topkhana Rd, Purana Paltan, Dhaka XX</h2>
                    </div>
                </div>
                <div>
                    <h2 className='text-xl font-bold capitalize'>USA Office Address</h2>
                    <br />
                    <div className='flex justify-btween gap-3'>
                        <BsTelephone className='text-2xl' />
                        <h2 className="text-base font-bold ">+1 470 XXXXXX(USA)</h2>
                    </div>
                    <div className='flex justify-btween gap-3 my-4'>
                        <BsTelephone className="text-2xl" />
                        <h2 className="text-base font-bold ">+1 470 XXXXXX(USA)</h2>
                    </div>
                    <div  className='flex justify-btween gap-3'>
                        <ImLocation2 className='text-4xl text-gray-50 className="text-4xl"' />
                        {/* <IoLocationOutline className="text-4xl text-gray-50" /> */}
                        <h2>USA Address: XXX Arbor Creek Ln, Doraville, GA XXXX</h2>
                    </div>
                </div>
                <div>
                    <h2 className='text-xl font-bold capitalize'>Social Media</h2>
                    <br />
                    <div className='flex justify-btween gap-3'>
                        <FaFacebookSquare className="text-4xl" />
                        <FaTwitterSquare className="text-4xl" />
                        <FaInstagramSquare className="text-4xl" />
                        <FaWhatsappSquare className="text-4xl" />
                    </div>
                    <div  className='flex justify-btween gap-3 my-4'>
                        <AiOutlineMail className="text-2xl" />
                        <h2 className="text-base font-bold ">XYZ@gmail.com</h2>
                    </div>
                    <div  className='flex justify-btween gap-3'>
                        <AiOutlineGlobal className="text-2xl" />
                        <h2 className="text-base font-bold ">www.XYZ.com</h2>
                    </div>
                </div>
            </div>
            <Button bgColor="button" textBtn="Button" />
        </div>
    </div>
  )
}

export default Footer