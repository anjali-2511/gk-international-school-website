import './hero.css'
function Hero() {
    return (
        <>

            <div className="card w-100 h-100" style={{ backgroundColor: "rgb(240, 235, 225)" }}>
                <table>
                    <tr>
                        <th className=" w-50 h-100">

                            <div className="ms-5"> <button className="btn btn-dark fw-bold border-0 rounded-5   pe-4 w-50 d-inline-flex align-items-center" style={{ backgroundColor: "rgba(171, 224, 181, 0.74)", color: "rgba(9, 88, 8, 0.91)" }}>
                                Admissions Open for 2026-27
                            </button>

                            <h3 className="fw-bold pt-3">Empowering Young Minds for a Brighter Future</h3>
                            <h3>
                                <li>Quality Education</li>
                                <li>Modern Learning</li>
                                <li>Strong Values</li>
                            </h3>
                            </div>

                            <div className="mt-5 ms-5">
                                <button className="btn btn-dark border-dark fw-bold rounded-5 px-2 py-2 ms-5 me-5 mb-5 ms-auto p-2 d-inline-flex align-items-center" style={{ backgroundColor: "rgb(227, 162, 60)", color: "rgb(25, 31, 49)" }}>
                                     Apply for Admission
                                </button>

                                 <button className="btn btn-dark border-dark fw-bold rounded-5 px-2 py-2 ms-5 mb-5 ms-auto p-2 d-inline-flex align-items-center" style={{ backgroundColor: "rgb(250, 246, 236)", color: "rgb(25, 31, 49)" }}>
                                      Explore our School
                                </button>
                            </div>






                        </th>


                        <th className="w-50 h-100 m-5 p-5">
                            <div className="card border border-dark rounded-3 w-100 ms-5 ms-auto me-3 h-100 p-3" style={{ backgroundColor: "rgb(56, 65, 89)" }}>

                                <button className="btn btn-dark border-dark fw-bold rounded-5 px-2 py-2 ps-5 mb-5 ms-auto w-50 d-inline-flex align-items-center" style={{ backgroundColor: "rgb(227, 162, 60)", color: "rgb(25, 31, 49)" }}>
                                    <i class="fa-solid fa-crown" style={{ color: "rgb(25, 31, 49)" }}></i> 95% + Result
                                </button>
                                <br />
                                <br />
                                <br />
                                <br />

                                <div className="card border border-dark w-100 ms-auto me-auto me-3 ms-3 h-100 mt-5 rounded-5 " style={{ backgroundColor: "rgb(242, 239, 231)" }}>
                                    <h4 className="fw-bold ps-3 pt-4" style={{ color: "rgb(25, 31, 49)" }}>Class of 2026, Grade 10-A</h4>
                                    <p className="ps-3" style={{ color: "rgb(72, 81, 105)" }}>Top Academic Achievers Science Stream</p>
                                    <span>
                                        <i className="fa-solid fa-ellipsis  ps-2 gradient-icon"></i>
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