import React from 'react'
import Footer from '../util/Footer'
import ProductList from '../components/ProductList'
import Navbar from '../util/Navbar'

const Home = () => {
  return (
    <div>
        <Navbar />
        <ProductList />
        <Footer />
    </div>
  )
}

export default Home