import React from 'react'
import {TiPlaneOutline} from "react-icons/ti"
import {FaHotel,FaCcVisa,FaTrain,FaWhatsappSquare,FaBusAlt} from "react-icons/fa"
// import {MdOutlineCardTravel} from " react-icons/md"
// import {IoBusOutline} from "react-icons/io"
import {GiFootTrip} from "react-icons/gi"
import Hajj from "../assets/macca.png"


const HajjInfo = () => {
  return (
    <div>
        <div className='grid place-items-center'>
            <div className='container bg-[#443b3b6e] rounded-2xl overflow-hidden'>
                <div className='bg-gray-200 flex items justify-between gap-12 px-4'>
                    <div className='flex w-full items-center gap-3 py-4 px-4'>
                        <img src={Hajj} alt="Macca" />
                        <h2 className='font-bold text-xl'>Hajj & Umrah</h2>
                    </div>
                    <nav className='list-none flex items-center justify-between w-full'>
                        <li className='text-3xl text-button bg-transparent hover:bg-cyan-200 trasi ease duration-300 py-4 px-4'><a className=" flex items-center gap-3" href="#"><TiPlaneOutline/><span className='text-xl font-bold '>Trip</span></a></li>
                        <li className='text-3xl text-button bg-transparent hover:bg-cyan-200 trasi ease duration-300 py-4 px-4'><a className=" flex items-center gap-3" href="#"><FaHotel /><span className='text-xl font-bold '>Hotel</span></a></li>
                        <li className='text-3xl text-button bg-transparent hover:bg-cyan-200 trasi ease duration-300 py-4 px-4'><a className=" flex items-center gap-3" href="#"><FaCcVisa/><span className='text-xl font-bold '>Card</span></a></li>
                        <li className='text-3xl text-button bg-transparent hover:bg-cyan-200 trasi ease duration-300 py-4 px-4'><a className=" flex items-center gap-3" href="#"><FaTrain /><span className='text-xl font-bold '>Train</span></a></li>
                        <li className='text-3xl text-button bg-transparent hover:bg-cyan-200 trasi ease duration-300 py-4 px-4'><a className=" flex items-center gap-3" href="#"><FaBusAlt /><span className='text-xl font-bold '>Bus</span></a></li>
                        <li className='text-3xl text-button bg-transparent hover:bg-cyan-200 trasi ease duration-300 py-4 px-4'><a className=" flex items-center gap-3" href="#"><GiFootTrip /><span className='text-xl font-bold '>Travel</span></a></li>
                    </nav>
                </div>
            <div className=''>
                <div className='px-12 py-20 grid grid-cols-responsiveLayoutHajj gap-3'>
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
            </div>
            </div>
        </div>
    </div>
  )
}

export default HajjInfo