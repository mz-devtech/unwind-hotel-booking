import React from 'react'
import Image from "next/image";

const About = () => {
    return (
        <>
            <div className="container-fluid" style={{ backgroundColor: "#f8f8f8" }}>
                <div className="container about-section" style={{ padding: "20px 0px 50px 0px" }}>
                    <div className="row">
                        <div className="col-12 col-lg-6">
                            <div className="row">
                                <div className="col-12 col-lg-6">
                                    <div className="service-card d-flex flex-column">

                                        {/* Image */}
                                        <div
                                            className="order-1 order-lg-2"
                                            style={{
                                                height: "200px",
                                                position: "relative",
                                                overflow: "hidden",
                                            }}
                                        >
                                            <Image
                                                src="/assets/f-services.jpg"
                                                alt="Room"
                                                fill
                                                sizes="(max-width: 991px) 100vw, 50vw"
                                                quality={100}
                                                style={{
                                                    objectFit: "cover",
                                                }}
                                            />
                                        </div>

                                        {/* Content */}
                                        <div
                                            className="service-content p-3 mb-3 text-center order-2 order-lg-1"
                                            style={{ boxShadow: "0px 5px 25px -2px rgba(0, 0, 0, 0.06)" }}
                                        >
                                            <Image
                                                src="/assets/Screenshot_2-removebg-preview.png"
                                                alt="Room"
                                                width={70}
                                                height={70}
                                                quality={100}
                                            />

                                            <h3 className="service-title fs-4 text-uppercase fw-normal">
                                                Cozy Room
                                            </h3>

                                            <p
                                                className="service-text"
                                                style={{ color: "#999999", lineHeight: "35px" }}
                                            >
                                                Far far away, behind the word mountains, far from the countries
                                                Vokalia.
                                            </p>
                                        </div>

                                    </div>
                                </div>

                                <div className="col-12 col-lg-6">
                                    <div className="service-card">

                                        <div
                                            style={{
                                                height: "200px",
                                                position: "relative",
                                                overflow: "hidden",
                                            }}
                                        >
                                            <Image
                                                src="/assets/f-services-2.jpg"
                                                alt="Room"
                                                fill
                                                sizes="(max-width: 991px) 100vw, 50vw"
                                                quality={100}
                                                style={{
                                                    objectFit: "cover",
                                                }}
                                            />
                                        </div>

                                        <div
                                            className="service-content p-3 mt-3 text-center"
                                            style={{ boxShadow: "0px 5px 25px -2px rgba(0, 0, 0, 0.06)" }}
                                        >
                                            <Image
                                                src="/assets/Screenshot_1-removebg-preview.png"
                                                alt="Room"
                                                width={70}
                                                height={70}
                                                quality={100}
                                            />

                                            <h3 className="service-title fs-4 text-uppercase fw-normal">
                                                Cozy Room
                                            </h3>

                                            <p
                                                className="service-text"
                                                style={{ color: "#999999", lineHeight: "35px" }}
                                            >
                                                Far far away, behind the word mountains, far from the countries
                                                Vokalia.
                                            </p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-lg-6">
                            <div>
                                <h6
                                    className="text-uppercase fw-bold mt-3"
                                    style={{
                                        fontSize: "13px",
                                        color: "#c5a880",
                                        letterSpacing: "2px",
                                    }}
                                >
                                    About Us
                                </h6>

                                <h1
                                    className="fw-normal"
                                    style={{
                                        fontSize: "64px",
                                        lineHeight: "1.4",
                                    }}
                                >
                                    Unwind A Hotel Booking Agency
                                </h1>

                                <p
                                    style={{
                                        color: "#999999",
                                        lineHeight: "35px",
                                    }}
                                >
                                    Far far away, behind the word mountains, far from the
                                    countries Vokalia and Consonantia, there live the blind
                                    texts. Separated they live in Bookmarksgrove right at the
                                    coast of the Semantics, a large language ocean.
                                </p>

                                <button
                                    className="rounded-0 text-uppercase py-3 px-4 fw-semibold"
                                    style={{
                                        border: "1px solid #c5a880",
                                        backgroundColor: "#c5a880",
                                        color: "#fff",
                                    }}
                                >
                                    Book Your Room Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;