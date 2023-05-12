import React, { useState } from 'react'
import ProductCard from '../util/ProductCard'
import Heading from './Heading'

function ProductList({title,subTitle}) {
  return (
    <div className="grid place-items-center my-24">
        <Heading title={title} subTitle={subTitle}/>

      <div className='container px-4 sm:px-0'>
        <div className='grid grid-cols-responsiveLayout gap-8 place-items-center'>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>
      </div>
    </div>
  )
}

export default ProductList