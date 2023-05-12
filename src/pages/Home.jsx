import React from 'react'
import Footer from '../util/Footer'
import ProductList from '../components/ProductList'
import Navbar from '../util/Navbar'
import ContactBar from '../components/ContactBar'

const Home = () => {
  return (
    <div>
        <ContactBar />
        <Navbar />
        <ProductList />
        <Footer />
    </div>
  )
}

export default Home