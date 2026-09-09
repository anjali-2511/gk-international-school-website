function Hero() {
    return (
        <div className="w-100 overflow-x-hidden" style={{ backgroundColor: "rgba(205, 206, 228, 0.94)" }} >
            <div className="container py-5">
                <div className="row align-items-center g-4">

                    <div className="col-12 col-lg-7">
                        <div className="ms-lg-5 text-center text-lg-start">
                            <button
                                data-aos="fade-down"
                                className="btn fw-bold border-0 rounded-5 px-4 py-2 d-inline-flex align-items-center gap-2 text-nowrap"
                                style={{ backgroundColor: "rgba(171, 224, 181, 0.74)", color: "rgba(9, 88, 8, 0.91)" }}
                            >
                                <i className="fa-solid fa-circle" style={{ fontSize: "8px" }}></i>
                                Admissions Open for 2026-27
                            </button>

                            <h3
                                data-aos="fade-up"
                                data-aos-delay="150"
                                className="fw-bold pt-3 fs-2 fs-md-1"
                            >
                                Empowering Young Minds for a Brighter Future
                            </h3>

                            <ul className="list-unstyled mt-3 d-inline-block text-start">
                                <li
                                    data-aos="fade-right"
                                    data-aos-delay="250"
                                    className="d-flex align-items-center gap-2 mb-2"
                                >
                                    <i className="fa-solid fa-circle-check" style={{ color: "rgb(227, 162, 60)" }}></i>
                                    Quality Education
                                </li>
                                <li
                                    data-aos="fade-right"
                                    data-aos-delay="350"
                                    className="d-flex align-items-center gap-2 mb-2"
                                >
                                    <i className="fa-solid fa-circle-check" style={{ color: "rgb(227, 162, 60)" }}></i>
                                    Modern Learning
                                </li>
                                <li
                                    data-aos="fade-right"
                                    data-aos-delay="450"
                                    className="d-flex align-items-center gap-2 mb-2"
                                >
                                    <i className="fa-solid fa-circle-check" style={{ color: "rgb(227, 162, 60)" }}></i>
                                    Strong Values
                                </li>
                            </ul>
                        </div>

                        <div
                            data-aos="fade-up"
                            data-aos-delay="450"
                            className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-3 gap-md-4 ms-lg-5 mt-4"
                        >
                            <button
                                className="btn btn-dark border-dark fw-bold rounded-5 px-4 py-3 d-inline-flex align-items-center text-nowrap"
                                style={{ backgroundColor: "rgb(227, 162, 60)", color: "rgb(25, 31, 49)" }}
                            >
                                Apply for Admission
                            </button>

                            <button
                                className="btn btn-dark border-dark fw-bold rounded-5 px-4 py-3 d-inline-flex align-items-center text-nowrap"
                                style={{ backgroundColor: "rgb(250, 246, 236)", color: "rgb(25, 31, 49)" }}
                            >
                                Explore our School
                            </button>
                        </div>
                    </div>

                   
                    <div className="col-12 col-lg-5">
                        <div
                            data-aos="fade-left"
                            data-aos-delay="200"
                            className="card border border-dark shadow-lg rounded-3 w-100 mw-100 p-3 mx-auto"
                            style={{ backgroundColor: "rgb(10, 34, 102)" }}
                        >
                            <button
                                className="btn btn-dark border-dark fw-bold rounded-5 px-3 py-2 mb-4 ms-auto d-inline-flex align-items-center text-nowrap flex-shrink-0"
                                style={{ backgroundColor: "rgb(227, 162, 60)", color: "rgb(25, 31, 49)", alignSelf: "flex-end" }}
                            >
                                <i className="fa-solid fa-crown me-2" style={{ color: "rgb(25, 31, 49)" }}></i>
                                95% + Result
                            </button>

                            <div
                                className="card border border-dark w-100 rounded-5 pe-2 pb-3"
                                style={{ backgroundColor: "rgb(242, 239, 231)" }}
                            >
                                <h4 className="fw-bold ps-3 pt-4 fs-5 fs-md-4" style={{ color: "rgb(25, 31, 49)" }}>
                                    Class of 2026, Grade 10-A
                                </h4>
                                <p className="ps-3" style={{ color: "rgb(72, 81, 105)" }}>
                                    Top Academic Achievers Science Stream
                                </p>
                                <span>
                                    <i className="fa-solid fa-circle gradient-icon fs-3 ms-3 mb-2" style={{ color: "rgb(231, 160, 46)" }}></i>
                                    <i className="fa-solid fa-circle gradient-icon fs-3" style={{ color: "rgb(231, 160, 46)" }}></i>
                                    <i className="fa-solid fa-circle gradient-icon fs-3" style={{ color: "rgb(231, 160, 46)" }}></i>
                                </span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
};
export default Hero;