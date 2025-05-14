import React, { useRef } from 'react'
import './Testimonials.css'
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { assets } from '../../assets/assets';


const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

    const slideForword = () => {
        if (tx > -50) {
            tx -= 25;
        }

        slider.current.style.transform = `translateX(${tx}%)`;
    }

    const slideBackword = () => {
        if (tx < 0) {
            tx += 25;
        }

        slider.current.style.transform = `translateX(${tx}%)`;
    }


    return (
        <div className='container'>
            <div className='title'>
                <p>TESTIMONIAL</p>
                <h2>What Our Customer Says?</h2>
            </div>
            <div className="testimonials">
                <FaRegArrowAltCircleRight className='next-btn' size={30} onClick={slideForword} />
                <FaRegArrowAltCircleLeft className='pre-btn' size={30} onClick={slideBackword} />
                <div className='slides'>
                    <ul ref={slider}>
                        <li>
                            <div className="slide">
                                <div className="user-info">
                                    <img src={assets.user_1} alt="testimonials user1" />
                                    <div>
                                        <h3>Jamson George</h3>
                                        <span>3613 Nowlin Rd</span>
                                    </div>
                                </div>
                                <p>"InfoAtlas made my trip planning so much easier! I’ve always loved exploring cultures, but their country facts and cultural insights took it to the next level. Their travel guide helped me plan a scenic trip through Switzerland. Spot on — I went paragliding for the first time!"</p>
                            </div>
                        </li>
                        <li>
                            <div className="slide">
                                <div className="user-info">
                                    <img src={assets.user_2} alt="testimonials user1" />
                                    <div>
                                        <h3>Linken Reynolds</h3>
                                        <span>Melbourne, Australia</span>
                                    </div>
                                </div>
                                <p>"I found InfoAtlas while preparing for my backpacking trip across Europe — and I’m so glad I did. Their country-specific facts are fascinating, and the safety and travel advice were incredibly useful. It felt like having a local guide with me the whole way."</p>
                            </div>
                        </li>
                        <li>
                            <div className="slide">
                                <div className="user-info">
                                    <img src={assets.user_3} alt="testimonials user1" />
                                    <div>
                                        <h3>Sofia Martínez</h3>
                                        <span>Bogotá, Colombia</span>
                                    </div>
                                </div>
                                <p>"InfoAtlas is a goldmine for curious travelers. I used their guides to learn about Southeast Asia, and their adventure recommendations helped me plan an epic scuba diving experience in the Philippines. I’ll definitely be using it again for my next destination!"</p>
                            </div>
                        </li>
                        <li>
                            <div className="slide">
                                <div className="user-info">
                                    <img src={assets.user_4} alt="testimonials user1" />
                                    <div>
                                        <h3>Ethan Miller</h3>
                                        <span>Toronto, Canada</span>
                                    </div>
                                </div>
                                <p>"Thanks to InfoAtlas, my trip to Japan was more enriching than I ever imagined. The country facts section helped me understand local customs, and their guide led me to hidden gems even locals weren’t aware of. A must-use tool for any traveler!"</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
