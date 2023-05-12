import React from 'react'
import Button from './Button'
import ButtonProduct from './ButtonProduct'

const ProductCard = () => {
  return (
    <div>
        <div className='card shadow-shadowOne rounded-md'>
            <div className='imgContainer'>
                <img src="https://unsplash.it/500/500?image=546" alt="image" />
            </div>
            <div className='my-3'>
                <div className='flex items-center justify-between gap-5'>
                    <h2>New York City Hotels</h2>
                    <p>1 Night</p>
                </div>
            </div>
            <h2>Starts From <span className='text-button font-bold'>$184</span></h2>
            <div className='w-full flex items-center justify-center'>
                <ButtonProduct textBtn="view details" />
            </div>
        </div>
    </div>
  )
}

export default ProductCard