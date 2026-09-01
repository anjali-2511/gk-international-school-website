function SectionTitle() {
    return (
        <>
            <div className="w-100 h-100 p-3" style={{ backgroundColor: "rgb(252, 251, 248)" }}>
                <table>
                    <tr>
                        <th className="w-50 h-100 m-5 p-3 ps-5 pe-5">
                            <div className="rounded-4 w-75 ms-5  me-5 h-100 p-5" style={{ backgroundColor: "rgb(237, 237, 225)" }}>


                                <br />
                                <br />
                                <br />
                                <br />

                                <div className="w-75 h-100 mt-5 rounded-2 " style={{ backgroundColor: "rgb(253, 253, 253)" }}>
                                    <h3 className="fw-bold pt-2 ps-4  " style={{ color: "rgba(9, 88, 8, 0.91)" }}>25+</h3>
                                    <p className="pe-2 ps-4 pb-2" style={{ color: "rgb(173, 173, 170)" }} >Years of Excellence</p>


                                </div>
                            </div>
                        </th>


                        <th className=" w-75 p-2 h-100">
                            <div className="me-auto ms-auto w-100">
                                <button className="btn btn-dark fw-bold border-0 rounded-5   pe-4 w-50 d-inline-flex align-items-center" style={{ color: "rgb(227, 162, 60)", backgroundColor: "rgb(243, 226, 198)" }}>
                                    Welcome to GK
                                </button>
                                <h2 className="pt-2 ps-2" style={{ color: "rgb(33, 51, 99)" }} >Where Every Child's Potential Comes First</h2>
                                <p className="ps-3" style={{ color: "rgb(145, 144, 142)" }}>GK is a platform that connects parents with the best teachers and mentors in the field of education.  We believe that every child deserves a chance to be a part of the future.  We are here to help parents find the best teachers and mentors in their field of education.</p>
                                <h5 className="p-3">
                                    <ul className="list-unstyled">
                                        <li><i class="fa-solid fa-circle-check" style={{color: "rgba(9, 88, 8, 0.91)" }}></i>CBSE-affiliated curriculum with a strong values framework</li>
                                        <li><i class="fa-solid fa-circle-check" style={{color: "rgba(9, 88, 8, 0.91)" }}></i>Small class sizes for personalised attention</li>
                                        <li><i class="fa-solid fa-circle-check" style={{color: "rgba(9, 88, 8, 0.91)" }}></i>Sports,arts & technology built into every day</li>
                                    </ul>
                                </h5>

                            </div>


                        </th>


                    </tr>
                </table>
            </div>
        </>
    )
};
export default SectionTitle;