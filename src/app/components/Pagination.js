import React from 'react'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";



const Pagination = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col d-flex align-items-center justify-content-center gap-3">
                        <div className="pagination-box d-flex align-items-center justify-content-center p-2 rounded-1" style={{ height: "50px", width: "50px", border: "1px solid #e6e6e6" }}><FaChevronLeft size={24} /></div>

                        <div className="pagination-box d-flex align-items-center justify-content-center p-2 rounded-1" style={{ height: "50px", width: "50px", border: "1px solid #e6e6e6" }}>1</div>
                        <div className="pagination-box d-flex align-items-center justify-content-center p-2 rounded-1" style={{ height: "50px", width: "50px", border: "1px solid #e6e6e6" }}>2</div>
                        <div className="pagination-box d-flex align-items-center justify-content-center p-2 rounded-1" style={{ height: "50px", width: "50px", border: "1px solid #e6e6e6" }}>3</div>
                        <div className="pagination-box d-flex align-items-center justify-content-center p-2 rounded-1" style={{ height: "50px", width: "50px", border: "1px solid #e6e6e6" }}>4</div>
                        <div className="pagination-box d-flex align-items-center justify-content-center p-2 rounded-1" style={{ height: "50px", width: "50px", border: "1px solid #e6e6e6" }}>5</div>
                        <div className="pagination-box d-flex align-items-center justify-content-center p-2 rounded-1" style={{ height: "50px", width: "50px", border: "1px solid #e6e6e6" }}><FaChevronRight size={20} color='#000000' /></div>



                    </div>
                    <div className="test-box">Test</div>
                </div>
            </div>
        </>
    )
}

export default Pagination
