import React from 'react'
import Image from 'next/image'

const RestoandBar = () => {
    return (
        <>
            <div className="container-fluid py-5 resto-and-bar" style={{ backgroundColor: "#f8f8f8" }}>
                <div className="row ">
                    <p className='fw-bold text-uppercase text-center mb-0' style={{ fontSize: "13px", letterSpacing: "2px", color: "#c5a880" }}>Resto & Bar</p>
                    <h1 className='fw-light text-center text-uppercase mb-5' style={{ fontSize: "64px", lineHeight: "1.4" }}>Restaurant & Bar</h1>

                    <div className="col-12 col-lg-5">
                        <div className="position-relative parent-image">
                            {/* <img
                                src="/assets/resto-bar.jpg"
                                alt=""
                                className="img-fluid"
                                style={{width:"95%",height:"100vh"}}
                            /> */}

                            <div
                                className="position-absolute child-image d-flex align-items-center justify-content-center py-1 py-lg-4 px-2"
                                style={{
                                    width: "100px",
                                    height: "110px",
                                    backgroundColor: "#c5a880",
                                    borderRadius: "6px",
                                    right: "-38px",
                                    top: "50%",
                                    transform: "translateY(-50%)",
                                    zIndex: 999,
                                }}
                            >
                                <div
                                    style={{
                                        position: "relative",
                                        width: "100%",
                                        height: "100%",
                                    }}
                                >
                                    <Image
                                        src="/assets/ChatGPT_Image_Jul_10__2026__09_22_46_AM-removebg-preview.png"
                                        alt="Restaurant Logo"
                                        fill
                                        sizes="100px"
                                        style={{
                                            objectFit: "contain",
                                        }}
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-12 col-lg-7 menus-parent">
                        <div className="row  g-2">
                            <div className="col-12 col-md-6 col-lg-6">
                                <div
                                    className="d-flex align-items-center gap-3 px-4 py-3 py-md-4 py-lg-4 menus"
                                    style={{ backgroundColor: "#fff" }}
                                >
                                    {/* Image */}
                                    <div
                                        style={{
                                            width: "80px",
                                            height: "80px",
                                            position: "relative",
                                            overflow: "hidden",
                                            borderRadius: "50%",
                                            flexShrink: 0,
                                        }}
                                    >
                                        <Image
                                            src="/assets/menu-1.jpg"
                                            alt="Menu"
                                            fill
                                            sizes="80px"
                                            style={{
                                                objectFit: "cover",
                                            }}
                                        />
                                    </div>

                                    {/* Title */}
                                    <h3
                                        className="mb-0 flex-grow-1 text-break"
                                        style={{
                                            fontSize: "22px",
                                            fontWeight: "500",
                                            color: "#333333",
                                            lineHeight: "1.4",
                                        }}
                                    >
                                        Grilled <br className='d-none d-md-block d-lg-block' /> Beef with potatoes
                                    </h3>

                                    {/* Price */}
                                    <h6
                                        className="mb-0"
                                        style={{
                                            color: "#c5a880",
                                            fontSize: "22px",
                                            fontWeight: "600",
                                            whiteSpace: "nowrap",
                                        }}
                                    >
                                        $20.00
                                    </h6>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-6">
                                <div
                                    className="d-flex align-items-center gap-3 px-4 py-3 py-md-4 py-lg-4 menus"
                                    style={{ backgroundColor: "#fff" }}
                                >
                                    {/* Image */}
                                    <div
                                        style={{
                                            width: "80px",
                                            height: "80px",
                                            position: "relative",
                                            overflow: "hidden",
                                            borderRadius: "50%",
                                            flexShrink: 0,
                                        }}
                                    >
                                        <Image
                                            src="/assets/menu-5.jpg"
                                            alt="Menu"
                                            fill
                                            sizes="80px"
                                            style={{
                                                objectFit: "cover",
                                            }}
                                        />
                                    </div>

                                    {/* Title */}
                                    <h3
                                        className="mb-0 flex-grow-1 text-break"
                                        style={{
                                            fontSize: "22px",
                                            fontWeight: "500",
                                            color: "#333333",
                                            lineHeight: "1.4",
                                        }}
                                    >
                                        Grilled <br className='d-none d-md-block d-lg-block' /> Beef with potatoes
                                    </h3>

                                    {/* Price */}
                                    <h6
                                        className="mb-0"
                                        style={{
                                            color: "#c5a880",
                                            fontSize: "22px",
                                            fontWeight: "600",
                                            whiteSpace: "nowrap",
                                        }}
                                    >
                                        $20.00
                                    </h6>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-6">
                                <div
                                    className="d-flex align-items-center gap-3 px-4 py-3 py-md-4 py-lg-4 menus"
                                    style={{ backgroundColor: "#fff" }}
                                >
                                    {/* Image */}
                                    <div
                                        style={{
                                            width: "80px",
                                            height: "80px",
                                            position: "relative",
                                            overflow: "hidden",
                                            borderRadius: "50%",
                                            flexShrink: 0,
                                        }}
                                    >
                                        <Image
                                            src="/assets/menu-2.jpg"
                                            alt="Menu"
                                            fill
                                            sizes="80px"
                                            style={{
                                                objectFit: "cover",
                                            }}
                                        />
                                    </div>

                                    {/* Title */}
                                    <h3
                                        className="mb-0 flex-grow-1 text-break"
                                        style={{
                                            fontSize: "22px",
                                            fontWeight: "500",
                                            color: "#333333",
                                            lineHeight: "1.4",
                                        }}
                                    >
                                        Grilled <br className='d-none d-md-block d-lg-block' /> Beef with potatoes
                                    </h3>

                                    {/* Price */}
                                    <h6
                                        className="mb-0"
                                        style={{
                                            color: "#c5a880",
                                            fontSize: "22px",
                                            fontWeight: "600",
                                            whiteSpace: "nowrap",
                                        }}
                                    >
                                        $20.00
                                    </h6>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-6">
                                <div
                                    className="d-flex align-items-center gap-3 px-4 py-3 py-md-4 py-lg-4 menus"
                                    style={{ backgroundColor: "#fff" }}
                                >
                                    {/* Image */}
                                    <div
                                        style={{
                                            width: "80px",
                                            height: "80px",
                                            position: "relative",
                                            overflow: "hidden",
                                            borderRadius: "50%",
                                            flexShrink: 0,
                                        }}
                                    >
                                        <Image
                                            src="/assets/menu-6.jpg"
                                            alt="Menu"
                                            fill
                                            sizes="80px"
                                            style={{
                                                objectFit: "cover",
                                            }}
                                        />
                                    </div>

                                    {/* Title */}
                                    <h3
                                        className="mb-0 flex-grow-1 text-break"
                                        style={{
                                            fontSize: "22px",
                                            fontWeight: "500",
                                            color: "#333333",
                                            lineHeight: "1.4",
                                        }}
                                    >
                                        Grilled <br className='d-none d-md-block d-lg-block' /> Beef with potatoes
                                    </h3>

                                    {/* Price */}
                                    <h6
                                        className="mb-0"
                                        style={{
                                            color: "#c5a880",
                                            fontSize: "22px",
                                            fontWeight: "600",
                                            whiteSpace: "nowrap",
                                        }}
                                    >
                                        $20.00
                                    </h6>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-6">
                                <div
                                    className="d-flex align-items-center gap-3 px-4 py-3 py-md-4 py-lg-4 menus"
                                    style={{ backgroundColor: "#fff" }}
                                >
                                    {/* Image */}
                                    <div
                                        style={{
                                            width: "80px",
                                            height: "80px",
                                            position: "relative",
                                            overflow: "hidden",
                                            borderRadius: "50%",
                                            flexShrink: 0,
                                        }}
                                    >
                                        <Image
                                            src="/assets/menu-3.jpg"
                                            alt="Menu"
                                            fill
                                            sizes="80px"
                                            style={{
                                                objectFit: "cover",
                                            }}
                                        />
                                    </div>

                                    {/* Title */}
                                    <h3
                                        className="mb-0 flex-grow-1 text-break"
                                        style={{
                                            fontSize: "22px",
                                            fontWeight: "500",
                                            color: "#333333",
                                            lineHeight: "1.4",
                                        }}
                                    >
                                        Grilled <br className='d-none d-md-block d-lg-block' /> Beef with potatoes
                                    </h3>

                                    {/* Price */}
                                    <h6
                                        className="mb-0"
                                        style={{
                                            color: "#c5a880",
                                            fontSize: "22px",
                                            fontWeight: "600",
                                            whiteSpace: "nowrap",
                                        }}
                                    >
                                        $20.00
                                    </h6>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-6">
                                <div
                                    className="d-flex align-items-center gap-3 px-4 py-3 py-md-4 py-lg-4 menus"
                                    style={{ backgroundColor: "#fff" }}
                                >
                                    {/* Image */}
                                    <div
                                        style={{
                                            width: "80px",
                                            height: "80px",
                                            position: "relative",
                                            overflow: "hidden",
                                            borderRadius: "50%",
                                            flexShrink: 0,
                                        }}
                                    >
                                        <Image
                                            src="/assets/menu-7.jpg"
                                            alt="Menu"
                                            fill
                                            sizes="80px"
                                            style={{
                                                objectFit: "cover",
                                            }}
                                        />
                                    </div>

                                    {/* Title */}
                                    <h3
                                        className="mb-0 flex-grow-1 text-break"
                                        style={{
                                            fontSize: "22px",
                                            fontWeight: "500",
                                            color: "#333333",
                                            lineHeight: "1.4",
                                        }}
                                    >
                                        Grilled <br className='d-none d-md-block d-lg-block' /> Beef with potatoes
                                    </h3>

                                    {/* Price */}
                                    <h6
                                        className="mb-0"
                                        style={{
                                            color: "#c5a880",
                                            fontSize: "22px",
                                            fontWeight: "600",
                                            whiteSpace: "nowrap",
                                        }}
                                    >
                                        $20.00
                                    </h6>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-6">
                                <div
                                    className="d-flex align-items-center gap-3 px-4 py-3 py-md-4 py-lg-4 menus"
                                    style={{ backgroundColor: "#fff" }}
                                >
                                    {/* Image */}
                                    <div
                                        style={{
                                            width: "80px",
                                            height: "80px",
                                            position: "relative",
                                            overflow: "hidden",
                                            borderRadius: "50%",
                                            flexShrink: 0,
                                        }}
                                    >
                                        <Image
                                            src="/assets/menu-4.jpg"
                                            alt="Menu"
                                            fill
                                            sizes="80px"
                                            style={{
                                                objectFit: "cover",
                                            }}
                                        />
                                    </div>

                                    {/* Title */}
                                    <h3
                                        className="mb-0 flex-grow-1 text-break"
                                        style={{
                                            fontSize: "22px",
                                            fontWeight: "500",
                                            color: "#333333",
                                            lineHeight: "1.4",
                                        }}
                                    >
                                        Grilled <br className='d-none d-md-block d-lg-block' /> Beef with potatoes
                                    </h3>

                                    {/* Price */}
                                    <h6
                                        className="mb-0"
                                        style={{
                                            color: "#c5a880",
                                            fontSize: "22px",
                                            fontWeight: "600",
                                            whiteSpace: "nowrap",
                                        }}
                                    >
                                        $20.00
                                    </h6>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-6">
                                <div
                                    className="d-flex align-items-center gap-3 px-4 py-3 py-md-4 py-lg-4 menus"
                                    style={{ backgroundColor: "#fff" }}
                                >
                                    {/* Image */}
                                    <div
                                        style={{
                                            width: "80px",
                                            height: "80px",
                                            position: "relative",
                                            overflow: "hidden",
                                            borderRadius: "50%",
                                            flexShrink: 0,
                                        }}
                                    >
                                        <Image
                                            src="/assets/menu-8.jpg"
                                            alt="Menu"
                                            fill
                                            sizes="80px"
                                            style={{
                                                objectFit: "cover",
                                            }}
                                        />
                                    </div>

                                    {/* Title */}
                                    <h3
                                        className="mb-0 flex-grow-1 text-break"
                                        style={{
                                            fontSize: "22px",
                                            fontWeight: "500",
                                            color: "#333333",
                                            lineHeight: "1.4",
                                        }}
                                    >
                                        Grilled <br className='d-none d-md-block d-lg-block' /> Beef with potatoes
                                    </h3>

                                    {/* Price */}
                                    <h6
                                        className="mb-0"
                                        style={{
                                            color: "#c5a880",
                                            fontSize: "22px",
                                            fontWeight: "600",
                                            whiteSpace: "nowrap",
                                        }}
                                    >
                                        $20.00
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default RestoandBar
