import React from 'react'
import Footer from '../util/Footer'
import ProductList from '../components/ProductList'
import Navbar from '../util/Navbar'
import ContactBar from '../components/ContactBar'
import DiscountBanner from '../components/DiscountBanner'
import Quote from '../components/Quote'
import HeaderImg from '../components/HeaderImg'

const Home = () => {
  return (
    <div>
        <ContactBar />
        <Navbar />
        <HeaderImg />
        <ProductList title="Trending International Destinations Hotels" subTitle="The world is now just a hop, skip and jump away and here’s how you can make your travel easier and better." />
        <DiscountBanner />
        <ProductList title="Trending Indian Destinations Hotels" subTitle="India’s diverse topography, history and culture offers enough experiences to fulfil any type of wanderlust." />
        <Quote />
        <Footer />
    </div>
  )
}

export default Home