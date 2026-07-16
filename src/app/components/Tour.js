import React from 'react'
import { FaPlay } from "react-icons/fa";



const Tour = () => {
    return (
        <>
            <div className="container-fluid tour-section d-flex justify-content-center align-items-center flex-column">
                <div className="container">
                    <div className="row">
                        <div className="d-flex justify-content-center align-items-center flex-column">
                            <p className='fw-bold text-uppercase text-center mb-0' data-aos="fade-up" style={{ fontSize: "13px", letterSpacing: "2px", color: "#ffffff" }}>Watch our luxurious hotel</p>
                            <h1 className='fw-normal text-center text-uppercase mb-0' data-aos="fade-up" style={{ fontSize: "64px", lineHeight: "1.4", color: "#ffffff" }}>Take A Tour</h1>
                            <div
                                className="d-flex justify-content-center align-items-center rounded-circle mx-auto play-btn" data-aos="fade-up"
                                style={{
                                    width: "80px",
                                    height: "80px",
                                    backgroundColor: "#c5a880",
                                    cursor: "pointer",
                                }}
                            >
                                <FaPlay
                                    color="#fff"
                                    size={28}
                                    style={{ marginLeft: "3px" }} // Play icon کو visually center کرنے کے لیے
                                />
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Tour
