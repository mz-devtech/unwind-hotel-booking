import Image from "next/image";
import React from "react";
import { FaSearch } from "react-icons/fa";

const Gallery = () => {
    return (
        <>
            <div
                className="container-fluid pb-3"
                style={{ backgroundColor: "#f8f8f8", padding: "150px 0px 0px 0px" }}
            >
                <div className="row gap-2 mx-2 justify-content-md-center">

                    <div className="col-12 col-md-5 col-lg p-0" data-aos="fade-up">
                        <div
                            className="position-relative overflow-hidden blog-card"
                            style={{ height: "250px" }}
                        >
                            <div
                                style={{
                                    position: "relative",
                                    width: "100%",
                                    height: "100%",
                                }}
                            >
                                <Image
                                    src="/assets/gallery-1.jpg"
                                    alt=""
                                    fill
                                    className="img-fluid w-100"
                                    style={{ objectFit: "cover" }}
                                />
                            </div>

                            <div
                                className="position-absolute top-50 start-50 translate-middle d-flex align-items-center justify-content-center rounded-circle search-icon"
                                style={{
                                    width: "35px",
                                    height: "35px",
                                    backgroundColor: "#c5a880",
                                }}
                            >
                                <FaSearch color="white" size={16} />
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-5 col-lg p-0" data-aos="fade-up">
                        <div
                            className="position-relative overflow-hidden blog-card"
                            style={{ height: "250px" }}
                        >
                            <div
                                style={{
                                    position: "relative",
                                    width: "100%",
                                    height: "100%",
                                }}
                            >
                                <Image
                                    src="/assets/gallery-2.jpg"
                                    alt=""
                                    fill
                                    className="img-fluid w-100"
                                    style={{ objectFit: "cover" }}
                                />
                            </div>

                            <div
                                className="position-absolute top-50 start-50 translate-middle d-flex align-items-center justify-content-center rounded-circle search-icon"
                                style={{
                                    width: "35px",
                                    height: "35px",
                                    backgroundColor: "#c5a880",
                                }}
                            >
                                <FaSearch color="white" size={16} />
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-5 col-lg p-0" data-aos="fade-up">
                        <div
                            className="position-relative overflow-hidden blog-card"
                            style={{ height: "250px" }}
                        >
                            <div
                                style={{
                                    position: "relative",
                                    width: "100%",
                                    height: "100%",
                                }}
                            >
                                <Image
                                    src="/assets/gallery-3.jpg"
                                    alt=""
                                    fill
                                    className="img-fluid w-100"
                                    style={{ objectFit: "cover" }}
                                />
                            </div>

                            <div
                                className="position-absolute top-50 start-50 translate-middle d-flex align-items-center justify-content-center rounded-circle search-icon"
                                style={{
                                    width: "35px",
                                    height: "35px",
                                    backgroundColor: "#c5a880",
                                }}
                            >
                                <FaSearch color="white" size={16} />
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-5 col-lg p-0" data-aos="fade-up">
                        <div
                            className="position-relative overflow-hidden blog-card"
                            style={{ height: "250px" }}
                        >
                            <div
                                style={{
                                    position: "relative",
                                    width: "100%",
                                    height: "100%",
                                }}
                            >
                                <Image
                                    src="/assets/gallery-4.jpg"
                                    alt=""
                                    fill
                                    className="img-fluid w-100"
                                    style={{ objectFit: "cover" }}
                                />
                            </div>

                            <div
                                className="position-absolute top-50 start-50 translate-middle d-flex align-items-center justify-content-center rounded-circle search-icon"
                                style={{
                                    width: "35px",
                                    height: "35px",
                                    backgroundColor: "#c5a880",
                                }}
                            >
                                <FaSearch color="white" size={16} />
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-5 col-lg p-0" data-aos="fade-up">
                        <div
                            className="position-relative overflow-hidden blog-card"
                            style={{ height: "250px" }}
                        >
                            <div
                                style={{
                                    position: "relative",
                                    width: "100%",
                                    height: "100%",
                                }}
                            >
                                <Image
                                    src="/assets/gallery-5.jpg"
                                    alt=""
                                    fill
                                    className="img-fluid w-100"
                                    style={{ objectFit: "cover" }}
                                />
                            </div>

                            <div
                                className="position-absolute top-50 start-50 translate-middle d-flex align-items-center justify-content-center rounded-circle search-icon"
                                style={{
                                    width: "35px",
                                    height: "35px",
                                    backgroundColor: "#c5a880",
                                }}
                            >
                                <FaSearch color="white" size={16} />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Gallery;