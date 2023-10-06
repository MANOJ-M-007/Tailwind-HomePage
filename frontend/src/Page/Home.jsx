import React from 'react'
import Navbar from '../Components/Navbar'
import Banner from '../Components/Banner'
import Analytics from '../Components/Analytics'
import Messege from '../Components/Messege'
import Cards from '../Components/Cards'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div className='bg-black'>
      <Navbar/>
      <Banner/>
      <Analytics/>
      <Messege/>
      <Cards/>
      <Footer/>
    </div>
  )
}

export default Home
