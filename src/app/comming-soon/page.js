import React from 'react'

import { FaGreaterThan } from "react-icons/fa";

import Link from "next/link";
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';


const NotFound = () => {
    return (
        <>
            <div className="resto-page">
                <Navbar />
                <div className="about-content">
                    <p style={{ color: "#eae9e6" }}>
                        <Link
                            href="/"
                            className="btn text-white px-4 py-2"
                            style={{
                                background: "#c5a880",
                            }}
                        >
                            Back to Home
                        </Link> Cooming Soon<FaGreaterThan color="#eae9e6" size={14} />
                    </p>

                    <h1 style={{ color: "white", fontSize: "80px" }}>
                        Comming Soon
                    </h1>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default NotFound
