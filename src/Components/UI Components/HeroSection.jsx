import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'
import { assets } from '../../assets/assets'

const HeroSection = () => {
    return (
        <main className='hero-section main'>
            <div className='container grid grid-two-cols'>
                <div className="hero-content">
                    <h1 className="heading-xl">
                        Journey Across the Globe, Country by Country
                    </h1>
                    <p className="paragraph">
                        Uncover each nation's unique story — from culture and heritage to stunning landscapes. Easily browse, search, and filter to explore countries in depth.
                    </p>
                    <a href="/country"><button className="btn btn-darken btn-inline bg-white-box">
                        Begin Your Journey <FaLongArrowAltRight />
                    </button></a>
                </div>
                <div className="hero-image">
                    <img
                        src={assets.hero_img2}
                        alt="earth's image from space"
                        className="banner-image"
                    />
                </div>
            </div>
        </main>
    )
}

export default HeroSection
