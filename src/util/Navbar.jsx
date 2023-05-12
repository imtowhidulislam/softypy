import React from 'react'
import Logo from "../assets/logo.png"
import {FaSearch} from "react-icons/fa"

const Navbar = () => {
  return (
    <div>
        <div>
            <div>
                <div>
                    <div><img src={Logo} alt="" /></div>
                    <nav>
                        <li>
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
                <div></div>
            </div>
        </div>
    </div>
  )
}

export default Navbar