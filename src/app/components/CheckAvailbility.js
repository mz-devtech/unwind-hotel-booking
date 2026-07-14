"use client";

import React, { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";

const CheckAvailbility = () => {
    const [formData, setFormData] = useState({
        checkIn: "",
        checkOut: "",
        roomType: "",
        guests: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = () => {
        console.log(formData);
    };

    return (
        <div className="container-fluid" style={{ backgroundColor: "#f8f8f8" }}>
            <div className="container position-relative py-3" style={{ zIndex: 9999, transform: "translateY(-100px)", position: "relative", zIndex: 10 }}>
                <div className="row g-0 ">

                    {/* Check In */}
                    <div className="col-12 py-0 col-md-6 col-lg px-2 py-2 pt-md-3 py-lg-5" style={{ background: "#222222" }}>
                        <label className="d-block mb-2 mb-lg-3 ps-3 small fw-bold">
                            Check-In Date
                        </label>
                        <div className="position-relative">
                            <FaCalendarAlt
                                size={16}
                                color="#656565"
                                className="position-absolute top-50 start-0 translate-middle-y ms-3"
                                style={{ pointerEvents: "none" }}
                            />
                            <input
                                type="text"
                                name="checkIn"
                                value={formData.checkIn}
                                onChange={handleChange}
                                placeholder="Check-In Date"
                                className="form-control bg-transparent text-white border-0 rounded-0 ps-5"
                            />
                        </div>
                    </div>

                    {/* Check Out */}
                    <div className="col-12 col-md-6 col-lg px-2 py-2 pt-md-3 py-lg-5" style={{ background: "#222222" }}>
                        <label className=" d-block mb-2 mb-lg-3 ps-3 small fw-bold">
                            Check-Out Date
                        </label>
                        <div className="position-relative">
                            <FaCalendarAlt
                                size={16}
                                color="#656565"
                                className="position-absolute top-50 start-0 translate-middle-y ms-3"
                                style={{ pointerEvents: "none" }}
                            />
                            <input
                                type="text"
                                name="checkOut"
                                value={formData.checkOut}
                                onChange={handleChange}
                                placeholder="Check-Out Date"
                                className="form-control bg-transparent text-white border-0 rounded-0 ps-5"
                            />
                        </div>
                    </div>

                    {/* Room */}
                    <div className="col-12 col-md-6 col-lg px-2 py-2 pt-md-3 py-lg-5" style={{ background: "#222222" }}>
                        <label className=" d-block mb-2 mb-lg-3 ps-3 small fw-bold">
                            Room Type
                        </label>
                        <select
                            name="roomType"
                            value={formData.roomType}
                            onChange={handleChange}
                            className="form-select bg-transparent border-0 rounded-0"
                            style={{
                                color: formData.roomType ? "#fff" : "#656565",
                            }}
                        >
                            <option className="fw-bold" value="" disabled>
                                Select Room
                            </option>
                            <option value="Single Room">Single Room</option>
                            <option value="Double Room">Double Room</option>
                            <option value="Luxury Suite">Luxury Suite</option>
                            <option value="Family Room">Family Room</option>
                        </select>
                    </div>

                    {/* Guests */}
                    <div className="col-12 col-md-6 col-lg px-2 py-2 pt-md-3 py-lg-5" style={{ background: "#222222" }}>
                        <label className="d-block mb-2 mb-lg-3 ps-3 small fw-bold">
                            Guests
                        </label>
                        <select
                            name="guests"
                            value={formData.guests}
                            onChange={handleChange}
                            className="form-select bg-transparent border-0 rounded-0"
                            style={{
                                color: formData.guests ? "#fff" : "#656565",
                            }}
                        >
                            <option value="" disabled>
                                Guests
                            </option>
                            <option value="1">1 Guest</option>
                            <option value="2">2 Guests</option>
                            <option value="3">3 Guests</option>
                            <option value="4">4 Guests</option>
                        </select>
                    </div>

                    {/* Button */}
                    <div className="col-12 col-lg-auto p-0">
                        <button
                            onClick={handleSubmit}
                            className="btn rounded-0 border-0 w-100 h-100 py-3 py-lg-0 px-4 fw-bold fs-6"
                            style={{ background: "#C19B76", color: "#fff" }}
                        >
                            Check  Availability
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CheckAvailbility;