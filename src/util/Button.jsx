import React from 'react'

const Button = ({textBtn}) => {
  return (
    <div className="my-4">
        <div>
            <button className="text-xl font-bold cursor-pointer capitalize py-4 px-8 rounded-md text-gray-50 bg-searchBtn">{textBtn}</button>
        </div>
    </div>
  )
}

export default Button