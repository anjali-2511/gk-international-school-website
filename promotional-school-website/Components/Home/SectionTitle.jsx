function SectionTitle() {
    return (
        <div className="w-100 p-3" style={{ backgroundColor: "rgb(252, 251, 248)" }}>
            <div className="container py-4">
                <div className="row align-items-center g-4">

                   
                    <div className="col-12 col-lg-5 d-flex justify-content-center">
                        <div
                            className="rounded-4 shadow-lg p-5 w-100"
                            style={{ backgroundColor: "rgba(221, 222, 243, 0.7)", maxWidth: "320px" }}
                        >
                            <div className="pt-5 mt-4">
                                <div
                                    className="rounded-2 shadow-sm p-3"
                                    style={{ backgroundColor: "rgb(253, 253, 253)" }}
                                >
                                    <h3 className="fw-bold mb-1" style={{ color: "rgba(9, 88, 8, 0.91)" }}>
                                        25+
                                    </h3>
                                    <p className="mb-0" style={{ color: "rgb(173, 173, 170)" }}>
                                        Years of Excellence
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                  
                    <div className="col-12 col-lg-7">
                        <div className="text-center text-lg-start">
                            <button
                                className="btn btn-dark fw-bold border-0 rounded-5 px-4 d-inline-flex align-items-center text-nowrap"
                                style={{ color: "rgb(227, 162, 60)", backgroundColor: "rgb(243, 226, 198)" }}
                            >
                                Welcome to GK
                            </button>

                            <h2 className="pt-3 fs-3 fs-md-2" style={{ color: "rgb(33, 51, 99)" }}>
                                Where Every Child's Potential Comes First
                            </h2>

                            <p style={{ color: "rgb(145, 144, 142)" }}>
                                GK is a platform that connects parents with the best teachers and mentors in the field of education.
                                We believe that every child deserves a chance to be a part of the future.
                                We are here to help parents find the best teachers and mentors in their field of education.
                            </p>

                            <ul className="list-unstyled text-start d-inline-block mt-2">
                                <li className="d-flex align-items-start gap-2 mb-2">
                                    <i className="fa-solid fa-circle-check mt-1" style={{ color: "rgba(9, 88, 8, 0.91)" }}></i>
                                    <span>CBSE-affiliated curriculum with a strong values framework</span>
                                </li>
                                <li className="d-flex align-items-start gap-2 mb-2">
                                    <i className="fa-solid fa-circle-check mt-1" style={{ color: "rgba(9, 88, 8, 0.91)" }}></i>
                                    <span>Small class sizes for personalised attention</span>
                                </li>
                                <li className="d-flex align-items-start gap-2 mb-2">
                                    <i className="fa-solid fa-circle-check mt-1" style={{ color: "rgba(9, 88, 8, 0.91)" }}></i>
                                    <span>Sports, arts & technology built into every day</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
};
export default SectionTitle;