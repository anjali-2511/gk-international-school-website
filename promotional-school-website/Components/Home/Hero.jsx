import './hero.css'
function Hero() {
    return (
        <>

            <div className="w-100 h-100" style={{ backgroundColor: "rgba(205, 206, 228, 0.94)" }}>
                <table>
                    <tr>
                        <th className=" w-50 h-100">

                           
                            <div className="ms-5">
                                <button
                                    className="btn fw-bold border-0 rounded-5 px-4 py-2 d-inline-flex align-items-center gap-2"
                                    style={{ backgroundColor: "rgba(171, 224, 181, 0.74)", color: "rgba(9, 88, 8, 0.91)" }}
                                >
                                    <i className="fa-solid fa-circle" style={{ fontSize: "8px" }}></i>
                                    Admissions Open for 2026-27
                                </button>

                                <h3 className="fw-bold pt-3">
                                    Empowering Young Minds for a Brighter Future
                                </h3>

                                <ul className="list-unstyled mt-3">
                                    <li className="d-flex align-items-center gap-2 mb-2">
                                        <i className="fa-solid fa-circle-check" style={{ color: "rgb(227, 162, 60)" }}></i>
                                        Quality Education
                                    </li>
                                    <li className="d-flex align-items-center gap-2 mb-2">
                                        <i className="fa-solid fa-circle-check" style={{ color: "rgb(227, 162, 60)" }}></i>
                                        Modern Learning
                                    </li>
                                    <li className="d-flex align-items-center gap-2 mb-2">
                                        <i className="fa-solid fa-circle-check" style={{ color: "rgb(227, 162, 60)" }}></i>
                                        Strong Values
                                    </li>
                                </ul>
                            </div>

                            <div className="d-flex flex-wrap gap-4 ms-5 mt-4">
                                <button
                                    className="btn btn-dark border-dark fw-bold rounded-5 px-4 py-3 d-inline-flex align-items-center"
                                    style={{ backgroundColor: "rgb(227, 162, 60)", color: "rgb(25, 31, 49)" }}
                                >
                                    Apply for Admission
                                </button>

                                <button
                                    className="btn btn-dark border-dark fw-bold rounded-5 px-4 py-3 d-inline-flex align-items-center"
                                    style={{ backgroundColor: "rgb(250, 246, 236)", color: "rgb(25, 31, 49)" }}
                                >
                                    Explore our School
                                </button>
                            </div>






                        </th>


                        <th className="w-25 h-100 m-5 p-5">
                            <div className="card border border-dark shadow-lg rounded-3 w-100 h-100 p-3 " style={{ backgroundColor: "rgb(10, 34, 102)" }}>

                                <button className="btn btn-dark border-dark fw-bold rounded-5 px-2 py-2 ps-5 mb-5 ms-auto w-50 d-inline-flex align-items-center" style={{ backgroundColor: "rgb(227, 162, 60)", color: "rgb(25, 31, 49)" }}>
                                    <i class="fa-solid fa-crown" style={{ color: "rgb(25, 31, 49)" }}></i> 95% + Result
                                </button>
                                <br />
                                <br />
                                 

                                <div className="card border border-dark w-100 ms-auto me-auto me-3 ms-3 h-100 mt-5 rounded-5 pe-2" style={{ backgroundColor: "rgb(242, 239, 231)" }}>
                                    <h4 className="fw-bold ps-3 pt-4" style={{ color: "rgb(25, 31, 49)" }}>Class of 2026, Grade 10-A</h4>
                                    <p className="ps-3" style={{ color: "rgb(72, 81, 105)" }}>Top Academic Achievers Science Stream</p>
                                    <span>
                                        <i className="fa-solid fa-circle gradient-icon fs-3 ms-3 mb-2" style={{ color: "rgb(231, 160, 46)" }}></i><i className="fa-solid fa-circle gradient-icon fs-3" style={{ color: "rgb(231, 160, 46)" }}></i><i className="fa-solid fa-circle gradient-icon fs-3" style={{ color: "rgb(231, 160, 46)" }}></i>
                                    </span>


                                </div>
                            </div>
                        </th>

                    </tr>
                </table>
            </div>
        </>
    )
};
export default Hero;