import React from 'react'
import Navbar from '../components/Navbar'
import { FaGreaterThan } from "react-icons/fa";
import Pagination from '../components/Pagination';
import Image from "next/image";
import Footer from '../components/Footer';



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
            <div className="container-fluid py-5" style={{ backgroundColor: "#f8f8f8" }}>
                <div className="container py-5">
                    <div className="row gx-3 gy-3">
                        <p className='fw-bold text-uppercase text-center mb-0' style={{ fontSize: "13px", letterSpacing: "2px", color: "#c5a880" }}>Our Rooms</p>
                        <h1 className='fw-light text-center text-uppercase mb-5' style={{ fontSize: "64px", lineHeight: "1.4" }}>Featured Rooms</h1>

                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="booking-room d-flex flex-column">

                                {/* Image */}
                                <div className="order-1 order-lg-2 booking-image" style={{ height: "280px" }}>
                                    <Image
                                        src="/assets/room-1.jpg"
                                        alt="Room"
                                        width={1200}
                                        height={800}
                                        quality={100}
                                        className="img-fluid w-100"
                                        style={{ height: "100%" }}
                                    />
                                </div>

                                {/* Content */}
                                <div
                                    className="booking-content p-5 text-center order-2 order-lg-1"
                                    style={{ boxShadow: "0px 5px 25px -2px rgba(0, 0, 0, 0.06)" }}
                                >


                                    <h3 className="service-title fs-4 text-uppercase fw-normal">
                                        Suite Room
                                    </h3>

                                    <p
                                        className="service-text"
                                        style={{ color: "#999999", textAlign: "center", lineHeight: "35px" }}
                                    >
                                        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                                    </p>
                                    <div className="d-flex justify-content-center align-items-center gap-2">
                                        <h6 className='text-uppercase fw-bold mt-2' style={{ fontSize: "14px", color: "#c5a880", padding: "5px 10px" }}> $450 / night</h6>
                                        <a className='text-uppercase fw-bold text-decoration-none d-block' href="" style={{ fontSize: "14px", color: "#222222", border: "1px solid rgba(0, 0, 0, 0.05)", borderRadius: "2px", padding: "5px 10px" }}>Book Now</a>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="booking-room d-flex flex-column">

                                {/* Image */}
                                <div className="order-2 order-lg-1 booking-image" style={{ height: "280px" }}>
                                    <Image
                                        src="/assets/room-2.jpg"
                                        alt="Room"
                                        width={1200}
                                        height={800}
                                        quality={100}
                                        className="img-fluid w-100"
                                        style={{ height: "100%" }}
                                    />
                                </div>

                                {/* Content */}
                                <div
                                    className="booking-content p-5 text-center order-2 order-lg-1"
                                    style={{ boxShadow: "0px 5px 25px -2px rgba(0, 0, 0, 0.06)" }}
                                >


                                    <h3 className="service-title fs-4 text-uppercase fw-normal">
                                        Family Room
                                    </h3>

                                    <p
                                        className="service-text"
                                        style={{ color: "#999999", textAlign: "center", lineHeight: "35px" }}
                                    >
                                        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                                    </p>
                                    <div className="d-flex justify-content-center align-items-center gap-2">
                                        <h6 className='text-uppercase fw-bold mt-2' style={{ fontSize: "14px", color: "#c5a880", padding: "5px 10px" }}> $450 / night</h6>
                                        <a className='text-uppercase fw-bold text-decoration-none d-block' href="" style={{ fontSize: "14px", color: "#222222", border: "1px solid rgba(0, 0, 0, 0.05)", borderRadius: "2px", padding: "5px 10px" }}>Book Now</a>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="booking-room d-flex flex-column">

                                {/* Image */}
                                <div className="order-1 order-lg-2 booking-image" style={{ height: "280px" }}>
                                    <Image
                                        src="/assets/room-3.jpg"
                                        alt="Room"
                                        width={1200}
                                        height={800}
                                        quality={100}
                                        className="img-fluid w-100"
                                        style={{ height: "100%" }}
                                    />
                                </div>

                                {/* Content */}
                                <div
                                    className="booking-content p-5 text-center order-2 order-lg-1"
                                    style={{ boxShadow: "0px 5px 25px -2px rgba(0, 0, 0, 0.06)" }}
                                >


                                    <h3 className="service-title fs-4 text-uppercase fw-normal">
                                        Deluxe Room
                                    </h3>

                                    <p
                                        className="service-text"
                                        style={{ color: "#999999", textAlign: "center", lineHeight: "35px" }}
                                    >
                                        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                                    </p>
                                    <div className="d-flex justify-content-center align-items-center gap-2">
                                        <h6 className='text-uppercase fw-bold mt-2' style={{ fontSize: "14px", color: "#c5a880", padding: "5px 10px" }}> $450 / night</h6>
                                        <a className='text-uppercase fw-bold text-decoration-none d-block' href="" style={{ fontSize: "14px", color: "#222222", border: "1px solid rgba(0, 0, 0, 0.05)", borderRadius: "2px", padding: "5px 10px" }}>Book Now</a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="row mt-3 gx-3 gy-3">


                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="booking-room d-flex flex-column">

                                {/* Image */}
                                <div className="order-1 order-lg-2 booking-image" style={{ height: "280px" }}>
                                    <Image
                                        src="/assets/room-4.jpg"
                                        alt="Room"
                                        width={1200}
                                        height={800}
                                        quality={100}
                                        className="img-fluid w-100"
                                        style={{ height: "100%" }}
                                    />
                                </div>

                                {/* Content */}
                                <div
                                    className="booking-content p-5 text-center order-2 order-lg-1"
                                    style={{ boxShadow: "0px 5px 25px -2px rgba(0, 0, 0, 0.06)" }}
                                >


                                    <h3 className="service-title fs-4 text-uppercase fw-normal">
                                        Classic Room
                                    </h3>

                                    <p
                                        className="service-text"
                                        style={{ color: "#999999", textAlign: "center", lineHeight: "35px" }}
                                    >
                                        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                                    </p>
                                    <div className="d-flex justify-content-center align-items-center gap-2">
                                        <h6 className='text-uppercase fw-bold mt-2' style={{ fontSize: "14px", color: "#c5a880", padding: "5px 10px" }}> $450 / night</h6>
                                        <a className='text-uppercase fw-bold text-decoration-none d-block' href="" style={{ fontSize: "14px", color: "#222222", border: "1px solid rgba(0, 0, 0, 0.05)", borderRadius: "2px", padding: "5px 10px" }}>Book Now</a>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="booking-room d-flex flex-column">

                                {/* Image */}
                                <div className="order-2 order-lg-1 booking-image" style={{ height: "280px" }}>
                                    <Image
                                        src="/assets/room-5.jpg"
                                        alt="Room"
                                        width={1200}
                                        height={800}
                                        quality={100}
                                        className="img-fluid w-100"
                                        style={{ height: "100%" }}
                                    />
                                </div>

                                {/* Content */}
                                <div
                                    className="booking-content p-5 text-center order-2 order-lg-1"
                                    style={{ boxShadow: "0px 5px 25px -2px rgba(0, 0, 0, 0.06)" }}
                                >


                                    <h3 className="service-title fs-4 text-uppercase fw-normal">
                                        Superior Room
                                    </h3>

                                    <p
                                        className="service-text"
                                        style={{ color: "#999999", textAlign: "center", lineHeight: "35px" }}
                                    >
                                        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                                    </p>
                                    <div className="d-flex justify-content-center align-items-center gap-2">
                                        <h6 className='text-uppercase fw-bold mt-2' style={{ fontSize: "14px", color: "#c5a880", padding: "5px 10px" }}> $450 / night</h6>
                                        <a className='text-uppercase fw-bold text-decoration-none d-block' href="" style={{ fontSize: "14px", color: "#222222", border: "1px solid rgba(0, 0, 0, 0.05)", borderRadius: "2px", padding: "5px 10px" }}>Book Now</a>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="booking-room d-flex flex-column">

                                {/* Image */}
                                <div className="order-1 order-lg-2 booking-image" style={{ height: "280px" }}>
                                    <Image
                                        src="/assets/room-6.jpg"
                                        alt="Room"
                                        width={1200}
                                        height={800}
                                        quality={100}
                                        className="img-fluid w-100"
                                        style={{ height: "100%" }}
                                    />
                                </div>

                                {/* Content */}
                                <div
                                    className="booking-content p-5 text-center order-2 order-lg-1"
                                    style={{ boxShadow: "0px 5px 25px -2px rgba(0, 0, 0, 0.06)" }}
                                >


                                    <h3 className="service-title fs-4 text-uppercase fw-normal">
                                        Luxury Room
                                    </h3>

                                    <p
                                        className="service-text"
                                        style={{ color: "#999999", textAlign: "center", lineHeight: "35px" }}
                                    >
                                        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                                    </p>
                                    <div className="d-flex justify-content-center align-items-center gap-2">
                                        <h6 className='text-uppercase fw-bold mt-2' style={{ fontSize: "14px", color: "#c5a880", padding: "5px 10px" }}> $450 / night</h6>
                                        <a className='text-uppercase fw-bold text-decoration-none d-block' href="" style={{ fontSize: "14px", color: "#222222", border: "1px solid rgba(0, 0, 0, 0.05)", borderRadius: "2px", padding: "5px 10px" }}>Book Now</a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Pagination />
            <Footer />
        </>
    )
}

export default page
