import React from 'react'
import Navbar from '../components/Navbar'
import { FaGreaterThan } from "react-icons/fa";


const page = () => {
    return (
        <>
            <div className="about-page">
                <Navbar />

                <div className="about-content">
                    <p style={{ color: "#eae9e6" }}>
                        Home <FaGreaterThan color="#eae9e6" size={14} /> About us <FaGreaterThan color="#eae9e6" size={14} />
                    </p>

                    <h1 style={{ color: "white", fontSize: "80px" }}>
                        About Us
                    </h1>
                </div>
            </div>

        </>
    )
}

export default page
