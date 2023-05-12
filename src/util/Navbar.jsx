import React, { useEffect, useState } from 'react'
import Logo from "../assets/logo.png"
import {FaSearch,FaBars} from "react-icons/fa"
import Button from './Button';
import ButtonProduct from './ButtonProduct';

const Navbar = () => {
    const [input,setInput] = useState({search:""});
    const [winWidth, setWinWidth] = useState(window.innerWidth);

    const handleClick = () =>{
        console.log("This is a button");
    }

    const setWidth = () =>{
        setWinWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener("resize", setWidth);

        return () => {
            window.removeEventListener("resize", setWidth);
        }
    },[winWidth])
    console.log(winWidth);
    
  return (
    <div className='bg-gray-300 grid place-items-center px-4'>
        <div className='container'>
            <div className='flex items-center justify-between gap-6 '>
                <div className=''>
                    <div><img src={Logo} alt="" /></div>
                </div>
                {
                    winWidth > 800 ? (<>
                        <nav>
                        <li className='capitalize list cursor-pointer bg-transparent hover:bg-searchBtn hover:text-gray-100 transition-all ease-in-out duration-300 py-2 px-4 '>
                            <a>About Us</a>
                        </li>
                    </nav>
                    <div className='border border-gray-500 box-border flex rounded-md overflow-hidden items-center'>
                        <input className='bg-transparent py-3 px-3 border-none outline-none placeholder:capitalize w-32' placeholder='search' type="text" name="search" value={input.search} />
                        <button type='button' onClick={handleClick} className='w-full h-full px-4 py-3'>
                            <FaSearch className='text-3xl text-searchBtn' />
                        </button>
                    </div>
                    <div className='flex gap-2'>
                        <ButtonProduct textBtn="log in" />
                        <Button textBtn="sign up" />
                    </div>
                    </>
    
                    ): <FaBars />
                }
                </div>
        </div>
    </div>
  )
}

export default Navbar