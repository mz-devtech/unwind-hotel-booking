import React from 'react'

const Blogs = () => {
    return (
        <>
            <div className="container-fluid py-5" style={{ backgroundColor: "#f8f8f8" }}>
              <div className="container">
                  <div className="row gap-4">

                    <p className='fw-bold text-uppercase text-center mb-0' style={{ fontSize: "13px", letterSpacing: "2px", color: "#c5a880" }}>Our Blog</p>
                    <h1 className='fw-light text-center text-uppercase mb-5' style={{ fontSize: "64px", lineHeight: "1.4" }}>Recent Blog</h1>


                    <div className="col p-0 rounded-2 " style={{ backgroundColor: "white", boxShadow: " rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}>
                        <div >
                            <img style={{ width: "100%" }} className='img-fluid d-block w-100' src="/assets/image_1.jpg" alt="" />
                        </div>
                        <div className='p-3'>
                            <div className="d-flex justify-content-between align-items-center gap-1">
                                <p style={{ color: "#999999" }}>Admin</p>
                                <p style={{ color: "#999999" }}>Dec. 23, 2020</p>

                                <p style={{ color: "#c5a880" }}> 3 Comments</p>
                            </div>
                            <h3 style={{ fontSize: "22px" }}>Best Hotel Near Beach in Hawaii</h3>
                            <p className='lead' style={{ textAlign: "justify" }}>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                        </div>
                    </div>

                    <div className="col p-0 rounded-2" style={{ backgroundColor: "white", boxShadow: " rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}>
                        <div >
                            <img style={{ width: "100%" }} className='img-fluid w-100' src="/assets/image_2.jpg" alt="" />
                        </div>
                        <div className='p-3'>
                            <div className="d-flex justify-content-between align-items-center gap-1">
                                <p style={{ color: "#999999" }}>Admin</p>
                                <p style={{ color: "#999999" }}>Dec. 23, 2020</p>

                                <p style={{ color: "#c5a880" }}> 3 Comments</p>
                            </div>
                            <h3 style={{ fontSize: "22px" }}>Best Hotel Near Beach in Hawaii</h3>
                            <p className='lead' style={{ textAlign: "justify" }}>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                        </div>
                    </div>
                    <div className="col p-0 rounded-2" style={{ backgroundColor: "white", boxShadow: " rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}>
                        <div >
                            <img style={{ width: "100%" }} className='img-fluid w-100' src="/assets/image_3.jpg" alt="" />
                        </div>
                        <div className='p-3'>
                            <div className="d-flex justify-content-between align-items-center gap-1">
                                <p style={{ color: "#999999" }}>Admin</p>
                                <p style={{ color: "#999999" }}>Dec. 23, 2020</p>

                                <p style={{ color: "#c5a880" }}> 3 Comments</p>
                            </div>
                            <h3 style={{ fontSize: "22px" }}>Best Hotel Near Beach in Hawaii</h3>
                            <p className='lead' style={{ textAlign: "justify" }}>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                        </div>
                    </div>
                    <div className="col p-0 rounded-2" style={{ backgroundColor: "white", boxShadow: " rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}>
                        <div >
                            <img style={{ width: "100%" }} className='img-fluid w-100' src="/assets/image_4.jpg" alt="" />
                        </div>
                        <div className='p-3'>
                            <div className="d-flex justify-content-between align-items-center gap-1">
                                <p style={{ color: "#999999" }}>Admin</p>
                                <p style={{ color: "#999999" }}>Dec. 23, 2020</p>

                                <p style={{ color: "#c5a880" }}> 3 Comments</p>
                            </div>
                            <h3 style={{ fontSize: "22px" }}>Best Hotel Near Beach in Hawaii</h3>
                            <p className='lead' style={{ textAlign: "justify" }}>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                        </div>
                    </div>

                </div>
              </div>
            </div>
        </>
    )
}

export default Blogs
