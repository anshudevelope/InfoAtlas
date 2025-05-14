import React from 'react'
import HeroSection from '../Components/UI Components/HeroSection'
import HomeAbout from '../Components/HomeSections/HomeAbout'
import HomeServiceBrief from '../Components/HomeSections/HomeServiceBrief'
import Testimonials from '../Components/HomeSections/Testimonials'

const Homepage = () => {
  return (
    <>
    <HeroSection />
    <HomeServiceBrief />
    <HomeAbout />
    <Testimonials />
    </>
  )
}

export default Homepage
