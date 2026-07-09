import React from 'react'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg py-2 py-md-3 py-lg-4 w-100 custom-navbar">
                <div className="container">

                    {/* Logo */}
                    <a className="navbar-brand mb-0" href="#">
                        <h3 className="fw-bold text-white mb-0" style={{ color: "#ffffff", lineHeight:"1.1",fieldSizing:"30px", }}>Unwind</h3>
                        <p
                            className="text-uppercase fw-bold mb-0"
                            style={{ letterSpacing: "1px", fontSize: "12px", color: "#ffffff" }}
                        >
                            Hotel Booking
                        </p>
                    </a>

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
                                <a className="nav-link fw-bold text-uppercase" style={{ color: "#fff", fontSize: "13px" }} href="#">
                                    Home
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link fw-bold text-uppercase" style={{ color: "#ffffffb3", fontSize: "13px" }} href="#">
                                    About
                                </a>
                            </li>


                            <li className="nav-item">
                                <a className="nav-link fw-bold text-uppercase" style={{ color: "#ffffffb3", fontSize: "13px" }} href="#">
                                    Rooms
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link fw-bold text-uppercase" style={{ color: "#ffffffb3", fontSize: "13px" }} href="#">
                                    Resto &amp; Bar
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link fw-bold text-uppercase" style={{ color: "#ffffffb3", fontSize: "13px" }} href="#">
                                    Blog
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link fw-bold text-uppercase" style={{ color: "#ffffffb3", fontSize: "13px" }} href="#">
                                    Contact

                                </a>
                            </li>









                        </ul>
                    </div>

                </div>
            </nav>
        </>
    )
}

export default Navbar
