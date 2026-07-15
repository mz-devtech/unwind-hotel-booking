import React from 'react'
import Navbar from '../components/Navbar'
import { FaGreaterThan } from "react-icons/fa";
import RestoandBar from '../components/RestoandBar';
import Footer from '../components/Footer';


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

            <div className='' style={{ padding: "90px", backgroundColor: "#f8f8f8" }}>
                <RestoandBar />
            </div>



            <Footer />

        </>
    )
}

export default page
