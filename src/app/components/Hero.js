import React from 'react'
import Navbar from './Navbar'
import { FiArrowRight } from "react-icons/fi";
import CheckAvailbility from './CheckAvailbility';


const Hero = () => {
    return (
        <>
            <div className='hero'>

                <Navbar />
                <div className="hero-content  container">
                    <p className='fw-bold text-uppercase mb-0 text-center mx-3 mx-md-0 mx-lg-0' style={{ fontSize: "13px", color: "#fff", letterSpacing: "1px" }}>Enjoy Your Wonderful Holidays With A Great Luxury Experience!</p>
                    <h1 className='fw-bold text-center' style={{ fontSize: "80px", color: "#fff", lineHeight: "1.2" }}>Most Relaxing Place</h1>
                    <div className="d-flex gap-1 justify-content-center align-items-center">
                        <button className='rounded-0 text-uppercase py-3 px-4 d-none d-md-block d-lg-block' style={{ border: "1px solid #c5a880", backgroundColor: "#c5a880", color: "#fff" }}>Take a Tour <FiArrowRight size={24} /></button>
                        <button className='rounded-0 text-uppercase py-3 px-4 d-none d-md-block d-lg-block' style={{ border: "1px solid rgba(255, 255, 255, 0.7)", backgroundColor: "transparent", color: "#fff" }}>Learn More <FiArrowRight size={24} /></button>

                    </div>

                </div>

            </div>
            <div style={{ }} className='check-avail'>
                <CheckAvailbility />

            </div>
        </>
    )
}

export default Hero
