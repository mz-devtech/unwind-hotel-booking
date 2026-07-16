import React from 'react'
import Navbar from '../components/Navbar'
import { FaGreaterThan } from "react-icons/fa";
import Footer from '../components/Footer';
import RestoandBar from '../components/RestoandBar';


const page = () => {
    return (
        <>
            <div className="resto-page">
                <Navbar />

                <div className="about-content">
                    <p style={{ color: "#eae9e6" }}>
                        Home <FaGreaterThan color="#eae9e6" size={14} /> Resto & Bar <FaGreaterThan color="#eae9e6" size={14} />
                    </p>

                    <h1 style={{ color: "white", fontSize: "80px" }}>
                        Resto & Bar
                    </h1>
                </div>
            </div>


            <RestoandBar />


            <Footer />

        </>
    )
}

export default page
