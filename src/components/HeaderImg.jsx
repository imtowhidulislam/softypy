import React from 'react'
import Heading from './Heading'
import HajjInfo from './HajjInfo'

const HeaderImg = () => {
  return (
    <div className="HeroImg mb-64">
        <div className='grid place-items-center headerContainer relative'>
            <div className='text-2xl max-w-3xl mb-28'>
                <Heading title="Welcome to Ghuronti! Find Tours, Flights & Hotels Packages" />
            </div>
            <div className='Hajj'>
                <HajjInfo /> 
            </div>
        </div>
    </div>
  )
}

export default HeaderImg