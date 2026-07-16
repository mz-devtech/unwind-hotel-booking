import React from 'react'
import Link from 'next/link'
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
                        <div className="col-12 col-md-6 col-lg p- m-0">
                            <div>
                                <span className='mb-0 lh-1 fs-5 fw-bold' style={{ color: "#fff" }}>
                                    Unwind <br />
                                    <small className='text-uppercase fw-bold fs-6 lh-1.5' style={{ fontSize: "12px", letterSpacing: "1px" }}>Hotel Booking</small>
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

                        <div className="col-12 col-md-6 col-lg p- m-0">
                            <div>
                                <h2 className='fw-bold fs-5 ' style={{ color: "#fff" }}> Services</h2>
                                <ul className='list-unstyled mt-5'>
                                    <li className='mb-3'><Link className='text-decoration-none' style={{ color: "#ffffffcc" }} href="/comming-soon"><FaGreaterThan color='#bababa' size={14} /> Free Wifi</Link></li>
                                    <li className='mb-3'><Link className='text-decoration-none' style={{ color: "#ffffffcc" }} href="/comming-soon"><FaGreaterThan color='#bababa' size={14} /> Easy Booking</Link></li>
                                    <li className='mb-3'><Link className='text-decoration-none' style={{ color: "#ffffffcc" }} href="/comming-soon"><FaGreaterThan color='#bababa' size={14} /> Restaurant</Link></li>
                                    <li className='mb-3'><Link className='text-decoration-none' style={{ color: "#ffffffcc" }} href="/comming-soon"><FaGreaterThan color='#bababa' size={14} /> Swimming Pool</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg p- m-0">
                            <div>
                                <h2 className='fw-bold fs-5 ' style={{ color: "#fff", visibility: "hidden" }}> Services</h2>
                                <ul className='list-unstyled mt-5'>
                                    <li className='mb-3'><Link className='text-decoration-none' style={{ color: "#bababa" }} href="/comming-soon"><FaGreaterThan color='#ffffffcc' size={14} /> Beauty & Health</Link></li>
                                    <li className='mb-3'><Link className='text-decoration-none' style={{ color: "#bababa" }} href="/comming-soon"><FaGreaterThan color='#ffffffcc' size={14} /> 60" Flash Screen Tv</Link></li>
                                    <li className='mb-3'><Link className='text-decoration-none' style={{ color: "#bababa" }} href="/comming-soon"><FaGreaterThan color='#ffffffcc' size={14} /> Cold Air Condition</Link></li>
                                    <li className='mb-3'><Link className='text-decoration-none' style={{ color: "#bababa" }} href="/comming-soon"><FaGreaterThan color='#ffffffcc' size={14} /> Help & Support</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg p- m-0">
                            <div>
                                <h2 className='fw-bold fs-5' style={{ color: "#fff" }}>Quick Links</h2>
                                <ul className='list-unstyled mt-5'>
                                    <li className='mb-3'><Link className='text-decoration-none' style={{ color: "#ffffffcc" }} href="/"><FaGreaterThan color='#bababa' size={14} /> Home</Link></li>
                                    <li className='mb-3'><Link className='text-decoration-none' style={{ color: "#ffffffcc" }} href="/about"><FaGreaterThan color='#bababa' size={14} /> About</Link></li>
                                    <li className='mb-3'><Link className='text-decoration-none' style={{ color: "#ffffffcc" }} href="/rooms"><FaGreaterThan color='#bababa' size={14} /> Rooms</Link></li>
                                    <li className='mb-3'><Link className='text-decoration-none' style={{ color: "#ffffffcc" }} href="/resto-bar"><FaGreaterThan color='#bababa' size={14} /> Resto & Bar</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg p- m-0">
                            <div>
                                <h2 className='fw-bold fs-5 ' style={{ color: "#fff" }}>Have a Question</h2>
                                <ul className='list-unstyled mt-5'>
                                    <li className='mb-3'><Link className='text-decoration-none' style={{ color: "#bababa" }} href="/contact"><FaMap size={16} color="#c5a880" /> 203 Fake St. Mountain View, San Francisco, California, USA</Link></li>
                                    <li className='mb-3'><a className='text-decoration-none' style={{ color: "#bababa" }} href="tel:+23923923210"><FaPhoneAlt size={16} color="#c5a880" /> +2 392 3929 210</a></li>
                                    <li className='mb-3'><a className='text-decoration-none' style={{ color: "#bababa" }} href="mailto:info@yourdomain.com"><FaPaperPlane size={16} color="#c5a880" /> info@yourdomain.com</a></li>
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