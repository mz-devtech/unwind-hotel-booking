import React from 'react'

const Services = () => {
    return (
        <>
            <div className="container-fluid py-5 " style={{ backgroundColor: "#f8f8f8" }}>
                <div className="container services-section">
                    <div className="row align-content-center gx-3 gy-0">
                        <p className='fw-bold text-uppercase text-center mb-0' style={{ fontSize: "13px", letterSpacing: "2px", color: "#c5a880" }}>Unwind Services</p>
                        <h1 className='fw-light text-center text-uppercase mb-4' style={{ fontSize: "64px", lineHeight: "1.4" }}>Explore Our Hotel <br className='d-none d-md-block' /> Services</h1>
                        <div className="col-12 col-md-3 col-lg-2">
                            <div className='p-2 service-shape d-flex justify-content-center align-items-center align-content-center flex-column my-2 mx-auto'>
                                <div className='text-center'>
                                    <img style={{ height: "80%", width: "85%" }} src="/assets/service (2).png" alt="" />
                                </div>
                                <p className='text-center fs-5' style={{ fontWeight: "600", color: "rgba(0, 0, 0, 0.8)" }}>Free Wifi</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-3 col-lg-2">
                            <div className='p-2 service-shape d-flex justify-content-center align-items-center align-content-center flex-column my-2 mx-auto '>
                                <div className='text-center'>
                                    <img style={{ height: "80%", width: "85%" }} src="/assets/service (1).png" alt="" />
                                </div>
                                <p className='text-center fs-5' style={{ fontWeight: "600", color: "rgba(0, 0, 0, 0.8)" }}>Easy Booking</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-3 col-lg-2">
                            <div className='p-2 service-shape d-flex justify-content-center align-items-center align-content-center flex-column my-2 mx-auto'>
                                <div className='text-center'>
                                    <img style={{ height: "80%", width: "85%" }} src="/assets/service (3).png" alt="" />
                                </div>
                                <p className='text-center fs-5' style={{ fontWeight: "600", color: "rgba(0, 0, 0, 0.8)" }}>Restaurant</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-3 col-lg-2">
                            <div className='p-2 service-shape d-flex justify-content-center align-items-center align-content-center flex-column my-2 mx-auto'>
                                <div className='text-center'>
                                    <img style={{ height: "80%", width: "85%" }} src="/assets/service (4).png" alt="" />
                                </div>
                                <p className='text-center fs-5' style={{ fontWeight: "600", color: "rgba(0, 0, 0, 0.8)" }}>Swimming Pool</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-3 col-lg-2">
                            <div className='p-2 service-shape d-flex justify-content-center align-items-center align-content-center flex-column my-2 mx-auto'>
                                <div className='text-center'>
                                    <img style={{ height: "80%", width: "85%" }} src="/assets/service (5).png" alt="" />
                                </div>
                                <p className='text-center fs-5' style={{ fontWeight: "600", color: "rgba(0, 0, 0, 0.8)" }}>Beauty & Health</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-3 col-lg-2">
                            <div className='p-2 service-shape d-flex justify-content-center align-items-center align-content-center flex-column my-2 mx-auto'>
                                <div className='text-center'>
                                    <img style={{ height: "80%", width: "85%" }} src="/assets/service (6).png" alt="" />
                                </div>
                                <p className='text-center fs-5' style={{ fontWeight: "600", color: "rgba(0, 0, 0, 0.8)" }}>Help & Support</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Services
