import React from 'react'
import ProductCard from '../util/ProductCard'

function ProductList({title,subTitle}) {
  return (
    <div>
        {/* <h2>{title}</h2> */}
        {/* <h3>{subTitle}</h3> */}
        <h2 className="text-4xl font-bold text-center text-productTitle mb-4">Trending International Destinations Hotels</h2>
        <h3 className='"text-base font-bold text-center text-gray-400"'>The world is now just a hop, skip and jump away and here’s how you can make your travel easier and better. </h3>

        <div className='grid grid-cols-responsiveLayout gap-8'>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>
    </div>
  )
}

export default ProductList