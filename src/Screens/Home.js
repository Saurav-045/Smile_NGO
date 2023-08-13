import React from 'react'
import Header from '../Components/Header'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Impact from '../Components/Impact'
import Volunteer from '../Components/Volunteer'
import FrontPage from '../Components/FrontPage'
import Carousel from  '../Components/Carousel'
import Areas from '../Components/Areas'

export default function Home() {
  return (
    <div>
        <Navbar />
        <Header />
        <FrontPage />
        <Volunteer />
        <Areas />
        <Impact />
        <Carousel />   
        <Footer />
    </div>
  )
}
