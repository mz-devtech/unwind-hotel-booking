
"use client";

import CountUp from "react-countup";
import React from 'react'

const Counter = () => {
    return (
        <>
            <div className="container-fluid py-5" style={{ backgroundColor: "#f8f8f8" }}>
                <div className="row g-0">
                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="counter-card " style={{ backgroundColor: "#222222", padding: "90px" }}>
                            <h3 className='text-center fs-1 fw-bold' style={{ color: "#c5a880", lineHeight: "1" }}>
                                <CountUp end={38900} duration={3} separator="," />
                            </h3>
                            <p className='mb-0 text-center' style={{ color: "#ffffffcc", whiteSpace: "nowrap" }}># of Happy Guests</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="counter-card " style={{ backgroundColor: "#222222", padding: "90px" }}>
                            <h3 className='text-center fs-1 fw-bold' style={{ color: "#c5a880", lineHeight: "1" }}>
                                <CountUp end={320} duration={3} />
                            </h3>
                            <p className='mb-0 text-center' style={{ color: "#ffffffcc" }}># of Rooms</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="counter-card " style={{ backgroundColor: "#222222", padding: "90px" }}>
                            <h3 className='text-center fs-1 fw-bold' style={{ color: "#c5a880", lineHeight: "1" }}>
                                <CountUp end={1000} duration={3} separator="," />
                            </h3>
                            <p className='mb-0 text-center' style={{ color: "#ffffffcc" }}># of Staffs</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="counter-card " style={{ backgroundColor: "#222222", padding: "90px" }}>
                            <h3 className='text-center fs-1 fw-bold' style={{ color: "#c5a880", lineHeight: "1" }}>
                                <CountUp end={587} duration={3} />
                            </h3>
                            <p className='mb-0 text-center' style={{ color: "#ffffffcc" }}># of Destination</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Counter
