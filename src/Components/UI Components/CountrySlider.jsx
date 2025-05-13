import React, { useState } from 'react'


const countries = [
    { name: 'USA', price: '$2,50,000', location: 'California', image: 'images/miami.png' },
    { name: 'Mexico', price: '$2,50,000', location: 'San Francisco', image: 'https://i.ibb.co/j6ghkNg/home2.jpg' },
    { name: 'Canada', price: '$2,50,000', location: 'Chicago', image: 'https://i.ibb.co/fSptZsK/home3.jpg' },
    { name: 'Brazil', price: '$2,50,000', location: 'Los Angeles', image: 'https://i.ibb.co/wR8WW8f/home4.jpg' },
    { name: 'UK', price: '$2,50,000', location: 'Miami', image: 'https://i.ibb.co/3fMXG50/home1.jpg' },
    { name: 'Germany', price: '$2,50,000', location: 'Seattle', image: 'https://i.ibb.co/j6ghkNg/home2.jpg' },
    { name: 'France', price: '$2,50,000', location: 'Austin', image: 'https://i.ibb.co/fSptZsK/home3.jpg' },
    { name: 'Australia', price: '$2,50,000', location: 'Phoenix', image: 'https://i.ibb.co/wR8WW8f/home4.jpg' },
];

const CountrySlider = () => {

    const [index, setIndex] = useState(0);
    const maxIndex = countries.length - 4;

    const prevSlide = () => setIndex(index > 0 ? index - 1 : 0);
    const nextSlide = () => setIndex(index < maxIndex ? index + 1 : maxIndex);

    return (
        <div className="country-section">
            <h2><strong>Countries</strong> Explored</h2>
            <p>Crafting Journeys, Building Memories—Explore Our Portfolio</p>

            <div className="slider-container">
                <div className="nav-buttons-wrapper">
                    <button className="nav-button" onClick={prevSlide}>&#8592;</button>
                    <button className="nav-button" onClick={nextSlide}>&#8594;</button>
                </div>
                <div className="countries-wrapper">
                    <div className="countries-slider" style={{ transform: `translateX(-${index * 25}%)` }}>
                        {countries.map((country, idx) => (
                            <div className="country-card" key={idx}>
                                <img src={country.image} alt={country.name} />
                                <div className="country-info">
                                    <h3>{country.name}</h3>
                                    <p>{country.price} | {country.location}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CountrySlider
