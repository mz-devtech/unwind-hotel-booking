import React from 'react'

const Counter = () => {
    return (
        <>
            <div className="container-fluid py-5" style={{backgroundColor:"#f8f8f8"}}>
                <div className="row g-0">
                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="counter-card p-5" style={{backgroundColor:"#222222"}}>
                            <h3 className='text-center fs-1 fw-bold' style={{ color: "#c5a880",lineHeight:"1" }}>
                                38,900
                            </h3>
                            <p className='mb-0 text-center' style={{ color: "#ffffffcc" }}># of Happy Guests</p>
                        </div>
                    </div>
                       <div className="col-12 col-md-6 col-lg-3">
                        <div className="counter-card p-5" style={{backgroundColor:"#222222"}}>
                            <h3 className='text-center fs-1 fw-bold' style={{ color: "#c5a880",lineHeight:"1" }}>
                                320
                            </h3>
                            <p className='mb-0 text-center' style={{ color: "#ffffffcc" }}># of Rooms</p>
                        </div>
                    </div>
                       <div className="col-12 col-md-6 col-lg-3">
                        <div className="counter-card p-5" style={{backgroundColor:"#222222"}}>
                            <h3 className='text-center fs-1 fw-bold' style={{ color: "#c5a880",lineHeight:"1" }}>
                                1,000
                            </h3>
                            <p className='mb-0 text-center' style={{ color: "#ffffffcc" }}># of Staffs</p>
                        </div>
                    </div>
                       <div className="col-12 col-md-6 col-lg-3">
                        <div className="counter-card p-5" style={{backgroundColor:"#222222"}}>
                            <h3 className='text-center fs-1 fw-bold' style={{ color: "#c5a880",lineHeight:"1" }}>
                                587
                            </h3>
                            <p className='mb-0 text-center' style={{ color: "#ffffffcc" }}># of Destination</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Counter
