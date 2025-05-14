import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'
import { assets } from '../assets/assets'
import facts from '../data/countryapi.json'
import HomeServiceBrief from '../Components/HomeSections/HomeServiceBrief'

const AboutPage = () => {
  return (
    <div className='container'>
    <section className='section-about'>
      <div className='hero-section main'>
        <div className='container grid grid-two-cols'>
          <div className="hero-content">
            <h1 className="heading-xl">
              Unveiling Earth's Marvels
            </h1>
            <p className="paragraph">
              Dive into the astonishing wonders of our planet—from the deepest trenches to the highest peaks, and the mysteries that lie in between.              </p>
            <a href="/country"><button className="btn btn-darken btn-inline bg-white-box">
              Discover More <FaLongArrowAltRight />
            </button></a>
          </div>
          <div className="hero-image">
            <img
              src={assets.hero_img}
              alt="earth's image from space"
              className="banner-image"
            />
          </div>
        </div>
      </div>

      <h2 className="container-title">
        Did You Know?
        <br />
        The Fascinating Facts About Our World
      </h2>

      <div className='gradient-cards'>

        {
          facts && facts.map((data) => {
            const { id, countryName, capital, population, interestingFact } =
              data;
            return <div className='cards' key={id}>
              <div className='container-card bg-green-box'>
                <p className='card-title'> {countryName}</p>
                <p><span className='card-description'>Capital:</span> {capital}</p>
                <p><span className='card-description'>Population:</span> {population}</p>
                <p><span className='card-description'>Interesting Fact:</span> {interestingFact}</p>
              </div>
            </div>
          })
        }
      </div>
    </section>
    <HomeServiceBrief />
    </div>
  )
}

export default AboutPage
