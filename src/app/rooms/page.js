import React from 'react'
import Navbar from '../components/Navbar'
import { FaGreaterThan } from "react-icons/fa";
import Pagination from '../components/Pagination';


const page = () => {
    return (
        <>
            <div className="room-page">
                <Navbar />

                <div className="about-content">
                    <p style={{ color: "#eae9e6" }}>
                        Home <FaGreaterThan color="#eae9e6" size={14} /> Rooms <FaGreaterThan color="#eae9e6" size={14} />
                    </p>

                    <h1 style={{ color: "white", fontSize: "80px" }}>
                        Cozzy Rooms
                    </h1>
                </div>
            </div>
<Pagination/>
        </>
    )
}

export default page
