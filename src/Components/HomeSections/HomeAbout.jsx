import React from 'react'
import './HomeAbout.css'
import { assets } from '../../assets/assets'
import { MdTravelExplore } from "react-icons/md";
import { RiGuideLine } from "react-icons/ri";
import { MdOutlineLocationCity } from "react-icons/md";




const HomeAbout = () => {
  return (
    <div className='container'>
      <div className='title'>
          <p>Our Services</p>
          <h2>What We Offer?</h2>
        </div>
      <div className='programs'>
        <div className='program'>
          <img src={assets.travel_guide} alt="" />
          <div className="caption">
            <MdTravelExplore size={60} />
            <p>Get Travel Guide</p>
          </div>
        </div>
        <div className='program'>
          <img src={assets.offroading_guide} alt="" />
          <div className="caption">
            <RiGuideLine size={60} />
            <p>Get OFF-Roading Help</p>
          </div>
        </div>
        <div className='program'>
          <img src={assets.country_guide} alt="" />
          <div className="caption">
            <MdOutlineLocationCity size={60} />
            <p>Know Your Country</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeAbout
