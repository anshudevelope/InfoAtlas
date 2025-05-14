import React from 'react'
import './HomeAbout.css'
import { assets } from '../../assets/assets'

const HomeAbout = () => {
  return (
    <div className='container'>
    <div className='home-about'>
      <div className="homeabout-left">
        <img src={assets.homeabout_img} alt="" />
      </div>
      <div className="homeabout-right">
        <h3>ABOUT INFOATLAS</h3>
        <h2>Discover the World Like Never Before</h2>
        <p>your all-in-one destination for uncovering fascinating facts about countries, detailed travel guides, and thrilling adventure planning tips. </p>
        <p><i>Whether you're curious about the cultures of Europe, the wildlife of Africa, or the hidden gems of Southeast Asia, we've got you covered.</i></p>
      </div>
    </div>
    </div>
  )
}

export default HomeAbout
