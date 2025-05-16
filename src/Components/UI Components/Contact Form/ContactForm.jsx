import React from 'react'
import './ContactForm.css'
import { TiMessages } from "react-icons/ti";
import { MdOutlineMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";


const ContactForm = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "253166e7-53ff-4c69-b4cc-a3781066eab6");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div className='container'>
            <div className='title'>
                <p>OUR SERVICES</p>
                <h2>What We Offer?</h2>
            </div>
            <div className="contact">
                <div className="contact-col">
                    <h3>Have a question or need help? <TiMessages size={40} /></h3>
                    <p>We’re just a message away! Drop us your query, and we’ll get back to you as soon as possible. 😊</p>
                    <ul>
                        <li><MdOutlineMail size={15} /> info@infoatlas.com</li>
                        <li><FaPhoneAlt size={15} /> +91 8625689520</li>
                        <li><FaLocationDot size={15} /> Laxmi Nagar, Delhi</li>
                    </ul>
                </div>
                <div className="contact-col">
                    <form onSubmit={onSubmit}>
                        <label>Your Name</label>
                        <input type="text" name='name' placeholder='Enter your name' required />
                        <label>Your Email</label>
                        <input type="email" name='email' placeholder='Enter your email' required />
                        <label>Phone</label>
                        <input type="tel" name="phone" placeholder='Enter your phone' required />
                        <label>Your Message</label>
                        <textarea name="message" rows={6} placeholder='Enter Message...'></textarea>
                        <button type="submit">Submit <FaArrowRight /></button>
                    </form>
                    <span>{result}</span>
                </div>
            </div>
        </div>
    )
}

export default ContactForm
