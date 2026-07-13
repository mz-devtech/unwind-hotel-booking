import React from 'react'
import { FaQuoteLeft } from "react-icons/fa";


const Testimonial = () => {
    return (
        <>
            <div className="container-fluid py-5 review-section" style={{ backgroundColor: "#f8f8f8" }}>
                <div className="container">
                    <div className="row g-3">
                        <p className='fw-bold text-uppercase text-center mb-0' style={{ fontSize: "13px", letterSpacing: "2px", color: "#c5a880" }}>Testimonial</p>
                        <h1 className='fw-light text-center text-uppercase mb-5' style={{ fontSize: "64px", lineHeight: "1.4" }}>Happy Guests</h1>

                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="testimonial-card p-4 rounded-2" style={{ backgroundColor: "white" }}>
                                <div className="d-flex align-items-center gap-3 position-relative">
                                    <div>
                                        <img style={{ height: "80px", width: "80px", borderRadius: "50%" }} src="/assets/person_2.jpg" alt="" />
                                    </div>
                                    <div className="d-flex flex-column gap-2">
                                        <h3 className='fw-bold' style={{ fontSize: "22px" }}>Roger Scott

                                        </h3>
                                        <span className='text-uppercase' style={{ color: "#c5a880", fontSize: "13px", }}>Marketing Manager</span>
                                    </div>

                                    <div className='quotes'
                                        style={{
                                            width: "30px",
                                            height: "30px",
                                            background: "#c5a880",
                                            borderRadius: "50%",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            position: "absolute",
                                            left: "55px",
                                            bottom: "0"
                                        }}
                                    >
                                        <FaQuoteLeft color="#fff" size={16} />
                                    </div>

                                </div>
                                <p className='mb-0 mt-3 lead' style={{ textAlign: "justify" }}>
                                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                                </p>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="testimonial-card p-4 rounded-2" style={{ backgroundColor: "white" }}>
                                <div className="d-flex align-items-center gap-3 position-relative">
                                    <div>
                                        <img style={{ height: "80px", width: "80px", borderRadius: "50%" }} src="/assets/person_1.jpg" alt="" />
                                    </div>
                                    <div className="d-flex flex-column gap-2">
                                        <h3 className='fw-bold' style={{ fontSize: "22px" }}>Roger Scott

                                        </h3>
                                        <span className='text-uppercase' style={{ color: "#c5a880", fontSize: "13px", }}>Marketing Manager</span>
                                    </div>

                                    <div className='quotes'
                                        style={{
                                            width: "30px",
                                            height: "30px",
                                            background: "#c5a880",
                                            borderRadius: "50%",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            position: "absolute",
                                            left: "55px",
                                            bottom: "0"
                                        }}
                                    >
                                        <FaQuoteLeft color="#fff" size={16} />
                                    </div>

                                </div>
                                <p className='mb-0 mt-3 lead' style={{ textAlign: "justify" }}>
                                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                                </p>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="testimonial-card p-4 rounded-2" style={{ backgroundColor: "white" }}>
                                <div className="d-flex align-items-center gap-3 position-relative">
                                    <div>
                                        <img style={{ height: "80px", width: "80px", borderRadius: "50%" }} src="/assets/person_2.jpg" alt="" />
                                    </div>
                                    <div className="d-flex flex-column gap-2">
                                        <h3 className='fw-bold' style={{ fontSize: "22px" }}>Roger Scott

                                        </h3>
                                        <span className='text-uppercase' style={{ color: "#c5a880", fontSize: "13px", }}>Marketing Manager</span>
                                    </div>

                                    <div className='quotes'
                                        style={{
                                            width: "30px",
                                            height: "30px",
                                            background: "#c5a880",
                                            borderRadius: "50%",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            position: "absolute",
                                            left: "55px",
                                            bottom: "0"
                                        }}
                                    >
                                        <FaQuoteLeft color="#fff" size={16} />
                                    </div>

                                </div>
                                <p className='mb-0 mt-3 lead' style={{ textAlign: "justify" }}>
                                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                                </p>
                            </div>
                        </div>



                    </div>
                </div>
            </div>

        </>
    )
}

export default Testimonial
