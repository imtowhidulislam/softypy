import React from 'react'
import {BiLeftArrowCircle,BiRightArrowCircle} from "react-icons/bi"
import {ImQuotesLeft}from "react-icons/im"
import Heading from './Heading'

const Quote = () => {
  return (
    <div className='  my-24'>
        <div className='pb-12'>
            <Heading title="Customer satisfaction is our top priority" subTitle="Our clients praise us for our great results, personable service, expert knowledge. Here are what just a few of them had to say" />
        </div>
        <div className='bg-messageBg grid place-items-center'>
            <div className='container'>
                
                <div className='relative grid place-items-center py-16'>
                    <div className='max-w-2xl'>
                        <h2 className='text-xl text-center'>
                        Your thoughtfulness and support of Ghuronti is very much appreciated. You are a very dear friend to the Chamber, and I want to assure you that your confidence in Ghuronti will be justified.
                        </h2>
                    </div>
                    <div className='arrows'>
                        <BiLeftArrowCircle />
                        <BiRightArrowCircle />
                    </div>
                    <div className='quote'>
                        <ImQuotesLeft />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Quote