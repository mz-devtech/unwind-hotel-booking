import React from 'react'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-transparent py-4 position-absolute top-0 start-0 w-100">
                <div className="container">

                    {/* Logo */}
                    <a className="navbar-brand" href="#">
                        <h3 className="fw-bold text-white mb-0" style={{ color: "#fff" }}>Unwind</h3>
                        <small
                            className="text-uppercase"
                            style={{ letterSpacing: "3px", fontSize: "12px", color: "#fff" }}
                        >
                            Hotel Booking
                        </small>
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
                                <a className="nav-link text-white" href="#">
                                    Resto &amp; Bar
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">
                                    Blog
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">
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
