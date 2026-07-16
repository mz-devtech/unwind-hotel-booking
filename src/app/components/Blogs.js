import Image from "next/image";
import React from "react";

const Blogs = () => {
    return (
        <>
            <div className="container-fluid py-5" style={{ backgroundColor: "#f8f8f8" }}>
                <div className="container">
                    <div className="row gap-4">

                        <p
                            className="fw-bold text-uppercase text-center mb-0" data-aos="fade-up"
                            style={{ fontSize: "13px", letterSpacing: "2px", color: "#c5a880" }}
                        >
                            Our Blog
                        </p>

                        <h1
                            className="fw-light text-center text-uppercase mb-5" data-aos="fade-up"
                            style={{ fontSize: "64px", lineHeight: "1.4" }}
                        >
                            Recent Blog
                        </h1>

                        <div
                            className="col p-0 rounded-2" data-aos="fade-up"
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
                            className="col p-0 rounded-2" data-aos="fade-up"
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
                            className="col p-0 rounded-2" data-aos="fade-up"
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
                            className="col p-0 rounded-2" data-aos="fade-up"
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
                </div>
            </div>
        </>
    );
};

export default Blogs;