import React, { useState } from 'react'
import Logo from "../assets/logo.png"
import {FaSearch} from "react-icons/fa"
import Button from './Button';
import ButtonProduct from './ButtonProduct';

const Navbar = () => {
    const [input,setInput] = useState({search:""});

    const handleClick = () =>{
        console.log("This is a button");
    }
    
  return (
    <div className='bg-gray-300 grid place-items-center'>
        <div className='container'>
            <div className='flex items-center justify-between gap-6 flex-wrap'>
                <div className='flex gap-4 items-center '>
                    <div><img src={Logo} alt="" /></div>
                    <nav>
                        <li className='capitalize list cursor-pointer bg-transparent hover:bg-searchBtn hover:text-gray-100 transition-all ease-in-out duration-300 py-2 px-4 '>
                            <a>About Us</a>
                        </li>
                    </nav>
                </div>
                <div className='border border-gray-500 box-border flex rounded-md overflow-hidden items-center'>
                    <input className='bg-transparent py-3 px-3 border-none outline-none placeholder:capitalize' placeholder='search' type="text" name="search" value={input.search} />
                    <button type='button' onClick={handleClick} className='w-full h-full px-4 py-3'>
                        <FaSearch className='text-3xl text-searchBtn' />
                    </button>
                </div>
                <div className='flex gap-2'>
                    <ButtonProduct textBtn="log in" />
                    <Button textBtn="sign up" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar