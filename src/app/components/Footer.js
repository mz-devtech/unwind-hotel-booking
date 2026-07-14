import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGreaterThan } from "react-icons/fa";
import { FaMap } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <div className="container-fluid" style={{ backgroundColor: "#1a1a1a", padding: "120px 0px" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg p-0 m-0">
                            <div>
                                <span className='mb-0 lh-1 fs-5 fw-bold' style={{ color: "#fff" }}>
                                    Unwind <br />
                                    <small className='text-uppercase fw-bold fs-6 lh-1.5'  style={{ fontSize: "12px", letterSpacing: "1px" }}>Hotel Booking</small>
                                </span>
                                <p className='mt-5' style={{ color: "#bababa" }}>
                                    A small river named Duden flows by their place and supplies it with the necessary regelialia.
                                </p>
                                <div className="d-flex align-items-center gap-2">
                                    <div className='d-flex align-items-center justify-content-center rounded-1' style={{ height: "40px", width: "40px", backgroundColor: "rgba(255, 255, 255, 0.05)" }}>
                                        <FaFacebookF size={18} color="#c5a880" />
                                    </div>
                                    <div className='d-flex align-items-center justify-content-center rounded-1' style={{ height: "40px", width: "40px", backgroundColor: "rgba(255, 255, 255, 0.05)" }}>
                                        <FaInstagram size={18} color="#c5a880" />
                                    </div>
                                    <div className='d-flex align-items-center justify-content-center rounded-1' style={{ height: "40px", width: "40px", backgroundColor: "rgba(255, 255, 255, 0.05)" }}>
                                        <FaTwitter size={18} color="#c5a880" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg p-0 m-0">
                            <div>
                                <h2 className='fw-bold fs-5 ' style={{ color: "#fff" }}> Services</h2>
                                <ul className='list-unstyled mt-5'>
                                    <li className='mb-3'><a className='text-decoration-none' style={{ color: "#ffffffcc" }} href=""><FaGreaterThan color='#bababa' size={14} /> Free Wifi</a></li>
                                    <li className='mb-3'><a className='text-decoration-none' style={{ color: "#ffffffcc" }} href=""><FaGreaterThan color='#bababa' size={14} /> Easy Booking</a></li>
                                    <li className='mb-3'><a className='text-decoration-none' style={{ color: "#ffffffcc" }} href=""><FaGreaterThan color='#bababa' size={14} /> Restaurant</a></li>
                                    <li className='mb-3'><a className='text-decoration-none' style={{ color: "#ffffffcc" }} href=""><FaGreaterThan color='#bababa' size={14} /> Swimming Pool</a></li>

                                </ul>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg p-0 m-0">
                            <div>
                                <h2 className='fw-bold fs-5 ' style={{ color: "#fff", visibility: "hidden" }}> Services</h2>

                                <ul className='list-unstyled mt-5'>
                                    <li className='mb-3'><a className='text-decoration-none' style={{ color: "#bababa" }} href=""><FaGreaterThan color='#ffffffcc' size={14} /> Beauty & Health</a></li>
                                    <li className='mb-3'><a className='text-decoration-none' style={{ color: "#bababa" }} href=""><FaGreaterThan color='#ffffffcc' size={14} /> 60" Flash Screen Tv</a></li>
                                    <li className='mb-3'><a className='text-decoration-none' style={{ color: "#bababa" }} href=""><FaGreaterThan color='#ffffffcc' size={14} /> Cold Air Condition</a></li>
                                    <li className='mb-3'><a className='text-decoration-none' style={{ color: "#bababa" }} href=""><FaGreaterThan color='#ffffffcc' size={14} /> Help & Support</a></li>

                                </ul>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg p-0 m-0">
                            <div>
                                <h2 className='fw-bold fs-5' style={{ color: "#fff" }}>Quick Links</h2>
                                <ul className='list-unstyled mt-5'>
                                    <li className='mb-3'><a className='text-decoration-none' style={{ color: "#ffffffcc" }} href=""><FaGreaterThan color='#bababa' size={14} /> Home</a></li>
                                    <li className='mb-3'><a className='text-decoration-none' style={{ color: "#ffffffcc" }} href=""><FaGreaterThan color='#bababa' size={14} /> About</a></li>
                                    <li className='mb-3'><a className='text-decoration-none' style={{ color: "#ffffffcc" }} href=""><FaGreaterThan color='#bababa' size={14} /> Rooms</a></li>
                                    <li className='mb-3'><a className='text-decoration-none' style={{ color: "#ffffffcc" }} href=""><FaGreaterThan color='#bababa' size={14} /> Resto & Bar</a></li>

                                </ul>
                            </div>
                        </div>


                        <div className="col-12 col-md-6 col-lg p-0 m-0">
                            <div>
                                <h2 className='fw-bold fs-5 ' style={{ color: "#fff" }}>Have a Question</h2>
                                <ul className='list-unstyled mt-5'>
                                    <li className='mb-3'><a className='text-decoration-none' style={{ color: "#bababa" }} href=""><FaMap size={16} color="#c5a880" /> 203 Fake St. Mountain View, San Francisco, California, USA</a></li>
                                    <li className='mb-3'><a className='text-decoration-none' style={{ color: "#bababa" }} href=""><FaPhoneAlt size={16} color="#c5a880" /> +2 392 3929 210</a></li>
                                    <li className='mb-3'><a className='text-decoration-none' style={{ color: "#bababa" }} href=""><FaPaperPlane size={16} color="#c5a880" /> info@yourdomain.com</a></li>

                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
