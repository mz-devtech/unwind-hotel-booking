import React from 'react'

const Booking = () => {
    return (
        <>
            <div className="container-fluid booking-section">
                <div className="container py-5">
                    <div className="row">
                        <div className="d-flex flex-column gap-3 flex-md-row justify-content-md-center align-content-md-center gap-md-5  p-3">
                            <div>
                                <p className='fw-bold' style={{ fontSize: "13px", color: "#c5a880" }}>Find Best Hotel For Leaving</p>
                                <h1 className='fw-normal' style={{ color: "#fff" }}>Find the Best Hotel in Your <br className='d-none d-md-block' /> Next Vacation</h1>
                            </div>
                            <div className='align-self-md-center'>
                                <button className='rounded-0 text-uppercase py-4 px-5' style={{ border: "1px solid #c5a880", backgroundColor: "#c5a880", color: "#fff" }}>Book Now </button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Booking
