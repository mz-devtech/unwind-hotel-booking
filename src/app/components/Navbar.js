import Link from "next/link";
import React from 'react'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg py-2 py-md-3 py-lg-4 w-100 custom-navbar">
                <div className="container">

                    {/* Logo */}
                    <Link className="navbar-brand mb-0" href="/">
                        <h3 className="fw-bold text-white mb-0" style={{ color: "#ffffff", lineHeight: "1.1", fieldSizing: "30px" }}>Unwind</h3>
                        <p
                            className="text-uppercase fw-bold mb-0"
                            style={{ letterSpacing: "1px", fontSize: "12px", color: "#ffffff" }}
                        >
                            Hotel Booking
                        </p>
                    </Link>

                    {/* Toggle Button */}
                    <button
                        className="navbar-toggler border-0 shadow-none"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Navbar Links */}
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-4">

                            <li className="nav-item">
                                <Link className="nav-link fw-bold text-uppercase" style={{ color: "#fff", fontSize: "13px" }} href="/">
                                    Home
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link fw-bold text-uppercase" style={{ color: "#ffffffb3", fontSize: "13px" }} href="/about">
                                    About
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link fw-bold text-uppercase" style={{ color: "#ffffffb3", fontSize: "13px" }} href="/rooms">
                                    Rooms
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link fw-bold text-uppercase" style={{ color: "#ffffffb3", fontSize: "13px" }} href="/resto-bar">
                                    Resto &amp; Bar
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link fw-bold text-uppercase" style={{ color: "#ffffffb3", fontSize: "13px" }} href="/blog">
                                    Blog
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link fw-bold text-uppercase" style={{ color: "#ffffffb3", fontSize: "13px" }} href="/contact">
                                    Contact
                                </Link>
                            </li>

                        </ul>
                    </div>

                </div>
            </nav>
        </>
    )
}

export default Navbar