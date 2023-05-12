import React, { useState } from 'react'
import Logo from "../assets/logo.png"
import {FaSearch} from "react-icons/fa"
import Button from './Button';
import ButtonProduct from './ButtonProduct';

const Navbar = () => {
    const [input,setInput] = useState({search:""});
  return (
    <div>
        <div>
            <div className='flex items-center justify-between gap-6 flex-wrap'>
                <div className='flex gap-4 items-center '>
                    <div><img src={Logo} alt="" /></div>
                    <nav>
                        <li className='capitalize list'>
                            <a>About Us</a>
                        </li>
                    </nav>
                </div>
                <div>
                    <input type="text" name="search" value={input.search} />
                    <div>
                        <FaSearch />
                    </div>
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