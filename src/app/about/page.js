import React from 'react'
import Navbar from '../components/Navbar'
import { FaGreaterThan } from "react-icons/fa";
import About from '../components/About';
import Booking from '../components/Booking';
import Tour from '../components/Tour';
import Testimonial from '../components/Testimonial';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';


const page = () => {
    return (
        <>
            <div className="about-page" style={{ backgroundColor: "#f8f8f8" }}>
                <Navbar />

                <div className="about-content">
                    <p style={{ color: "#eae9e6" }}>
                        Home <FaGreaterThan color="#eae9e6" size={14} /> About us <FaGreaterThan color="#eae9e6" size={14} />
                    </p>

                    <h1 style={{ color: "white", fontSize: "80px" }}>
                        About Us
                    </h1>
                </div>
            </div >
            <div className='' style={{ backgroundColor: "#f8f8f8", padding: "90px,0px" }}>
                <About />
            </div>
            <div className='' style={{ backgroundColor: "#f8f8f8", padding: "90px,0px" }}>
                <Booking />

            </div>
            <div className='' style={{ backgroundColor: "#f8f8f8", padding: "90px,0px" }}>
                <Tour />
            </div>
            <div className='' style={{ backgroundColor: "#f8f8f8", padding: "90px,0px" }}>
                <Testimonial />
            </div>
            <div className='' style={{ backgroundColor: "#f8f8f8", padding: "90px,0px" }}>
                <Gallery />
            </div>
            <div className='' style={{ backgroundColor: "#1a1a1a", padding: "90px,0px" }}>
                <Footer />
            </div>





        </>
    )
}

export default page
