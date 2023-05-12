import React from 'react'

const Button = ({textBtn,bgColor}) => {
  return (
    <div className="my-4">
        <div>
            <button className={`text-xl font-bold cursor-pointer capitalize py-4 px-8 rounded-md bg-${bgColor} text-gray-50`}>{textBtn}</button>
        </div>
    </div>
  )
}

export default Button