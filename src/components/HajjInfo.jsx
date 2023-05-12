import React from 'react'
import {TiPlaneOutline} from "react-icons/ti"
import {FaHotel,FaCcVisa,FaTrain,FaWhatsappSquare,FaBusAlt,FaWhatsapp} from "react-icons/fa"
// import {MdOutlineCardTravel} from " react-icons/md"
// import {IoBusOutline} from "react-icons/io"
import {GiFootTrip} from "react-icons/gi"
import Hajj from "../assets/macca.png"
import Button from '../util/Button'


const HajjInfo = () => {
  return (
    <div>
        <div className='grid place-items-center'>
            <div className='container rounded-2xl overflow-hidden'>
                <div className='bg-gray-200 grid place-items-center  md:flex md:justify-center gap-8'>
                    <div className='flex items-center gap-3 py-4 px-4 md:w-full'>
                        <img src={Hajj} alt="Macca" />
                        <h2 className='font-bold text-base'>Hajj & Umrah</h2>
                    </div>
                    <nav className='list-none flex items-center justify-between w-full flex-wrap md:flex-nowrap'>
                        <li className='text-base md:text-2xl text-button bg-transparent hover:bg-cyan-200 trasi ease duration-300 py-4 px-4'><a className=" flex items-center gap-3" href="#"><TiPlaneOutline/><span className='text-sm font-bold '>Trip</span></a></li>
                        <li className='text-base md:text-2xl text-button bg-transparent hover:bg-cyan-200 trasi ease duration-300 py-4 px-4'><a className=" flex items-center gap-3" href="#"><FaHotel /><span className='text-sm font-bold '>Hotel</span></a></li>
                        <li className='text-base md:text-2xl text-button bg-transparent hover:bg-cyan-200 trasi ease duration-300 py-4 px-4'><a className=" flex items-center gap-3" href="#"><FaCcVisa/><span className='text-sm font-bold '>Card</span></a></li>
                        <li className='text-base md:text-2xl text-button bg-transparent hover:bg-cyan-200 trasi ease duration-300 py-4 px-4'><a className=" flex items-center gap-3" href="#"><FaTrain /><span className='text-sm font-bold '>Train</span></a></li>
                        <li className='text-base md:text-2xl text-button bg-transparent hover:bg-cyan-200 trasi ease duration-300 py-4 px-4'><a className=" flex items-center gap-3" href="#"><FaBusAlt /><span className='text-sm font-bold '>Bus</span></a></li>
                        <li className='text-base md:text-2xl text-button bg-transparent hover:bg-cyan-200 trasi ease duration-300 py-4 px-4'><a className=" flex items-center gap-3" href="#"><GiFootTrip /><span className='text-sm font-bold '>Travel</span></a></li>
                    </nav>
                </div>
            <div className='px-4 shadow-shadowOne  md:px-0 relative bg-[#e7e7e75c] py-8'>
                <div className='px-12 pb-8 grid grid-cols-responsiveLayoutHajj gap-3 md:grid-cols-responsiveLayoutHajjDefault '>
                    <div className='bg-slate-200 p-2 rounded-md'>
                        <h2>City/Hotel/Street Name</h2>
                        <p>Enter your city</p>
                    </div>
                    <div className='bg-slate-200 p-2 rounded-md'>
                        <h2>Nationality</h2>
                        <p>Bangladesh</p>
                    </div>
                    <div className='grid grid-cols-responsiveLayoutHajj1 gap-2'>
                        <div className='bg-slate-200 p-2 rounded-md'>
                            <div className='flex items-center justify-between'>
                                <h2>Check In</h2>
                                <p>Sun</p>
                            </div>
                            <p>18 Mar 2023</p>
                        </div>
                        <div className='bg-slate-200 p-2 rounded-md'>
                            <div className='flex items-center justify-between'>
                                <h2>Check Out </h2>
                                <p>Sun</p>
                            </div>
                            <p>25 Mar 2023</p>
                        </div>
                    </div>
                    <div className='bg-slate-200 p-2 rounded-md'>
                        <h2>Rooms & Guests</h2>
                        <p>1 Person</p>
                    </div>
                </div>
                    <div className='flex items-center justify-center w-full'>
                        <Button textBtn="search hotels" />
                    </div>
                <div className='whatsup border-4 border-button p-2 w-max rounded-full'>
                    <FaWhatsapp className='text-5xl text-button' />
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default HajjInfo