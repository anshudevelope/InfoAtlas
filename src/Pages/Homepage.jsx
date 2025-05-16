import React from 'react'
import HeroSection from '../Components/UI Components/HeroSection'
import HomeAbout from '../Components/HomeSections/HomeAbout'
import HomeServiceBrief from '../Components/HomeSections/HomeServiceBrief'
import Testimonials from '../Components/HomeSections/Testimonials'
import ContactForm from '../Components/UI Components/Contact Form/ContactForm'

const Homepage = () => {
  return (
    <>
    <HeroSection />
    <HomeServiceBrief />
    <HomeAbout />
    <Testimonials />
    <ContactForm />
    </>
  )
}

export default Homepage
