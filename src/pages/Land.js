import React from 'react'
import Box from '../components/Box'
import Footer from '../components/Footer'
import Home from '../components/Home'
import Product from '../components/Product'
import Navbar from '../components/Navbar'

function Land() {
  return (
    <div>
        <Navbar/>
        <Home/>
        <Product />
        <Box/>
        <Footer/>
    </div>
  )
}

export default Land