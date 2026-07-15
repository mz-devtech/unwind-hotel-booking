import React from 'react'

const Contact = () => {
    return (
        <>
            <div className="container-fluid py-5" style={{ backgroundColor: "#f8f8f8" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-12 col-lg-6 m-0">
                            <div className='p-5' style={{ backgroundColor: "#ffffff" }}>
                                <h3 className='fw-bold fs-5' style={{ color: "#000000" }}>Contact us</h3>
                                <p className='' style={{ color: "#999999" }}>We're open for any suggestion or just to have a chat</p>
                                <div className="row mt-4">
                                    <div className="col-12 col-md-6 col-lg-4">
                                        <h4 className="fw-bold text-uppercase">Address:</h4>
                                        <p>198 West 21th Street, Suite 721 New York NY 10016</p>
                                    </div>

                                    <div className="col-12 col-md-6 col-lg-4">
                                        <h4 className="fw-bold text-uppercase">Email:</h4>
                                        <p>info@yoursite.com</p>
                                    </div>

                                    <div className="col-12 col-md-6 col-lg-4">
                                        <h4 className="fw-bold text-uppercase">Phone:</h4>
                                        <p>+1235 2355 98</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div>
                                        <input type="text" className="form-control border-0 " placeholder='Name' />
                                        <input type="text" className="form-control border-0 " placeholder='Email' />

                                        <input type="text" className="form-control border-0 " placeholder='Subject' />
                                        <textarea className='form-control border-0' name="" id="">creat a messege here</textarea>
                                        <button className='rounded-0 text-uppercase py-2 px-3' style={{ border: "1px solid #c5a880", backgroundColor: "#c5a880", color: "#fff" }}>Send Message</button>


                                    </div>
                                    <h3 className='fw-bold fs-4 mt-3' style={{ color: "#000000" }}>Follow us Here</h3>
                                    <div className="d-flex gap-2">
                                        <h5 className='text-uppercase' style={{fontSize:"13px",fontWeight:"600"}}>facebook</h5>
                                        <h5 className='text-uppercase' style={{fontSize:"13px",fontWeight:"600"}}>twitter</h5>
                                        <h5 className='text-uppercase' style={{fontSize:"13px",fontWeight:"600"}}>instagram</h5>
                                        <h5 className='text-uppercase' style={{fontSize:"13px",fontWeight:"600"}}>dribble</h5>

                                    </div>
                                </div>
                            </div>
                        </div>


                       <div className="col-12 col-md-12 col-lg-6 m-0">
    <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14038.05792686826!2d70.32602514999999!3d28.403728899999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1784116952466!5m2!1sen!2s"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
    ></iframe>
</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
