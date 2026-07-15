import React from 'react'
import Navbar from '../components/Navbar'
import { FaGreaterThan } from "react-icons/fa";
import Pagination from '../components/Pagination';
import Footer from '../components/Footer';
import Image from "next/image";



const page = () => {
    return (
        <>
            <div className="blog-page">
                <Navbar />

                <div className="about-content">
                    <p style={{ color: "#eae9e6" }}>
                        Home <FaGreaterThan color="#eae9e6" size={14} /> Blog <FaGreaterThan color="#eae9e6" size={14} />
                    </p>

                    <h1 style={{ color: "white", fontSize: "80px" }}>
                        Our Blog
                    </h1>
                </div>
            </div>

            <div>

                <div className="container-fluid py-5" style={{ backgroundColor: "#f8f8f8" }}>
                    <div className="container">
                        <div className="row gap-4 ">

                            <p
                                className="fw-bold text-uppercase text-center mb-0"
                                style={{ fontSize: "13px", letterSpacing: "2px", color: "#c5a880" }}
                            >
                                Our Blog
                            </p>

                            <h1
                                className="fw-light text-center text-uppercase mb-5"
                                style={{ fontSize: "64px", lineHeight: "1.4" }}
                            >
                                Recent Blog
                            </h1>

                            <div
                                className="col p-0 rounded-2"
                                style={{
                                    backgroundColor: "white",
                                    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                                }}
                            >
                                <div style={{ position: "relative", width: "100%", height: "280px" }}>
                                    <Image
                                        src="/assets/image_1.jpg"
                                        alt=""
                                        fill
                                        className="img-fluid d-block w-100"
                                        style={{ objectFit: "cover" }}
                                    />
                                </div>

                                <div className="px-5">
                                    <div className="mt-3 d-flex justify-content-between align-items-center flex-wrap">
                                        <p className="mb-0" style={{ color: "#999999" }}>
                                            Admin
                                        </p>
                                        <p className="mb-0" style={{ color: "#999999" }}>
                                            Dec. 23, 2020
                                        </p>

                                        <p style={{ color: "#c5a880" }}>3 Comments</p>
                                    </div>

                                    <h3 className="fw-normal" style={{ fontSize: "22px" }}>
                                        Best Hotel Near Beach in Hawaii
                                    </h3>

                                    <p
                                        className="mb-0 lh-2"
                                        style={{ textAlign: "justify", color: "#bababa" }}
                                    >
                                        A small river named Duden flows by their place and supplies it
                                        with the necessary regelialia.
                                    </p>
                                </div>
                            </div>

                            <div
                                className="col p-0 rounded-2"
                                style={{
                                    backgroundColor: "white",
                                    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                                }}
                            >
                                <div style={{ position: "relative", width: "100%", height: "280px" }}>
                                    <Image
                                        src="/assets/image_2.jpg"
                                        alt=""
                                        fill
                                        className="img-fluid d-block w-100"
                                        style={{ objectFit: "cover" }}
                                    />
                                </div>

                                <div className="px-5">
                                    <div className="mt-3 d-flex justify-content-between align-items-center flex-wrap">
                                        <p className="mb-0" style={{ color: "#999999" }}>
                                            Admin
                                        </p>
                                        <p className="mb-0" style={{ color: "#999999" }}>
                                            Dec. 23, 2020
                                        </p>

                                        <p style={{ color: "#c5a880" }}>3 Comments</p>
                                    </div>

                                    <h3 className="fw-normal" style={{ fontSize: "22px" }}>
                                        Best Hotel Near Beach in Hawaii
                                    </h3>

                                    <p
                                        className="lh-2"
                                        style={{ textAlign: "justify", color: "#bababa" }}
                                    >
                                        A small river named Duden flows by their place and supplies it
                                        with the necessary regelialia.
                                    </p>
                                </div>
                            </div>

                            <div
                                className="col p-0 rounded-2"
                                style={{
                                    backgroundColor: "white",
                                    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                                }}
                            >
                                <div style={{ position: "relative", width: "100%", height: "280px" }}>
                                    <Image
                                        src="/assets/image_3.jpg"
                                        alt=""
                                        fill
                                        className="img-fluid d-block w-100"
                                        style={{ objectFit: "cover" }}
                                    />
                                </div>

                                <div className="px-5">
                                    <div className="mt-3 d-flex justify-content-between align-items-center flex-wrap">
                                        <p className="mb-0" style={{ color: "#999999" }}>
                                            Admin
                                        </p>
                                        <p className="mb-0" style={{ color: "#999999" }}>
                                            Dec. 23, 2020
                                        </p>

                                        <p style={{ color: "#c5a880" }}>3 Comments</p>
                                    </div>

                                    <h3 className="fw-normal" style={{ fontSize: "22px" }}>
                                        Best Hotel Near Beach in Hawaii
                                    </h3>

                                    <p
                                        className="mb-0 lh-2"
                                        style={{ textAlign: "justify", color: "#bababa" }}
                                    >
                                        A small river named Duden flows by their place and supplies it
                                        with the necessary regelialia.
                                    </p>
                                </div>
                            </div>

                            <div
                                className="col p-0 rounded-2"
                                style={{
                                    backgroundColor: "white",
                                    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                                }}
                            >
                                <div style={{ position: "relative", width: "100%", height: "280px" }}>
                                    <Image
                                        src="/assets/image_4.jpg"
                                        alt=""
                                        fill
                                        className="img-fluid d-block w-100"
                                        style={{ objectFit: "cover" }}
                                    />
                                </div>

                                <div className="px-5">
                                    <div className="mt-3 d-flex justify-content-between align-items-center flex-wrap">
                                        <p className="mb-0" style={{ color: "#999999" }}>
                                            Admin
                                        </p>
                                        <p className="mb-0" style={{ color: "#999999" }}>
                                            Dec. 23, 2020
                                        </p>

                                        <p style={{ color: "#c5a880" }}>3 Comments</p>
                                    </div>

                                    <h3 className="fw-normal" style={{ fontSize: "22px" }}>
                                        Best Hotel Near Beach in Hawaii
                                    </h3>

                                    <p
                                        className="mb-0 lh-2"
                                        style={{ textAlign: "justify", color: "#bababa" }}
                                    >
                                        A small river named Duden flows by their place and supplies it
                                        with the necessary regelialia.
                                    </p>
                                </div>
                            </div>

                        </div>
                          <div className="row gap-4 mt-5">

                         

                            <div
                                className="col p-0 rounded-2"
                                style={{
                                    backgroundColor: "white",
                                    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                                }}
                            >
                                <div style={{ position: "relative", width: "100%", height: "280px" }}>
                                    <Image
                                        src="/assets/image_5.jpg"
                                        alt=""
                                        fill
                                        className="img-fluid d-block w-100"
                                        style={{ objectFit: "cover" }}
                                    />
                                </div>

                                <div className="px-5">
                                    <div className="mt-3 d-flex justify-content-between align-items-center flex-wrap">
                                        <p className="mb-0" style={{ color: "#999999" }}>
                                            Admin
                                        </p>
                                        <p className="mb-0" style={{ color: "#999999" }}>
                                            Dec. 23, 2020
                                        </p>

                                        <p style={{ color: "#c5a880" }}>3 Comments</p>
                                    </div>

                                    <h3 className="fw-normal" style={{ fontSize: "22px" }}>
                                        Best Hotel Near Beach in Hawaii
                                    </h3>

                                    <p
                                        className="mb-0 lh-2"
                                        style={{ textAlign: "justify", color: "#bababa" }}
                                    >
                                        A small river named Duden flows by their place and supplies it
                                        with the necessary regelialia.
                                    </p>
                                </div>
                            </div>

                            <div
                                className="col p-0 rounded-2"
                                style={{
                                    backgroundColor: "white",
                                    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                                }}
                            >
                                <div style={{ position: "relative", width: "100%", height: "280px" }}>
                                    <Image
                                        src="/assets/image_6.jpg"
                                        alt=""
                                        fill
                                        className="img-fluid d-block w-100"
                                        style={{ objectFit: "cover" }}
                                    />
                                </div>

                                <div className="px-5">
                                    <div className="mt-3 d-flex justify-content-between align-items-center flex-wrap">
                                        <p className="mb-0" style={{ color: "#999999" }}>
                                            Admin
                                        </p>
                                        <p className="mb-0" style={{ color: "#999999" }}>
                                            Dec. 23, 2020
                                        </p>

                                        <p style={{ color: "#c5a880" }}>3 Comments</p>
                                    </div>

                                    <h3 className="fw-normal" style={{ fontSize: "22px" }}>
                                        Best Hotel Near Beach in Hawaii
                                    </h3>

                                    <p
                                        className="lh-2"
                                        style={{ textAlign: "justify", color: "#bababa" }}
                                    >
                                        A small river named Duden flows by their place and supplies it
                                        with the necessary regelialia.
                                    </p>
                                </div>
                            </div>

                            <div
                                className="col p-0 rounded-2"
                                style={{
                                    backgroundColor: "white",
                                    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                                }}
                            >
                                <div style={{ position: "relative", width: "100%", height: "280px" }}>
                                    <Image
                                        src="/assets/image_7.jpg"
                                        alt=""
                                        fill
                                        className="img-fluid d-block w-100"
                                        style={{ objectFit: "cover" }}
                                    />
                                </div>

                                <div className="px-5">
                                    <div className="mt-3 d-flex justify-content-between align-items-center flex-wrap">
                                        <p className="mb-0" style={{ color: "#999999" }}>
                                            Admin
                                        </p>
                                        <p className="mb-0" style={{ color: "#999999" }}>
                                            Dec. 23, 2020
                                        </p>

                                        <p style={{ color: "#c5a880" }}>3 Comments</p>
                                    </div>

                                    <h3 className="fw-normal" style={{ fontSize: "22px" }}>
                                        Best Hotel Near Beach in Hawaii
                                    </h3>

                                    <p
                                        className="mb-0 lh-2"
                                        style={{ textAlign: "justify", color: "#bababa" }}
                                    >
                                        A small river named Duden flows by their place and supplies it
                                        with the necessary regelialia.
                                    </p>
                                </div>
                            </div>

                            <div
                                className="col p-0 rounded-2"
                                style={{
                                    backgroundColor: "white",
                                    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                                }}
                            >
                                <div style={{ position: "relative", width: "100%", height: "280px" }}>
                                    <Image
                                        src="/assets/image_8.jpg"
                                        alt=""
                                        fill
                                        className="img-fluid d-block w-100"
                                        style={{ objectFit: "cover" }}
                                    />
                                </div>

                                <div className="px-5">
                                    <div className="mt-3 d-flex justify-content-between align-items-center flex-wrap">
                                        <p className="mb-0" style={{ color: "#999999" }}>
                                            Admin
                                        </p>
                                        <p className="mb-0" style={{ color: "#999999" }}>
                                            Dec. 23, 2020
                                        </p>

                                        <p style={{ color: "#c5a880" }}>3 Comments</p>
                                    </div>

                                    <h3 className="fw-normal" style={{ fontSize: "22px" }}>
                                        Best Hotel Near Beach in Hawaii
                                    </h3>

                                    <p
                                        className="mb-0 lh-2"
                                        style={{ textAlign: "justify", color: "#bababa" }}
                                    >
                                        A small river named Duden flows by their place and supplies it
                                        with the necessary regelialia.
                                    </p>
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
