import React from 'react'
import {BsTelephone} from "react-icons/bs"


const ContactBar = () => {
  return (
    <div className='grid place-items-center bg-contactBar'>
        <div className='container'>
            <div className='flex items-center justify-center gap-4 py-4'>
                <div className='flex items-center gap-2'>
                    <BsTelephone className='text-button text-base font-bold' />
                    <h2>+88-01885-XXX-XXX</h2>
                </div>
                <h2 className='text-base font-bold'>Contact Us</h2>
            </div>
        </div>
    </div>
  )
}

export default ContactBar