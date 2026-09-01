import './StudentTestimonials.css'
function StudentTestimonials() {
    return (
        <>
            <div className="text-center p-3" style={{ backgroundColor: "rgb(5, 16, 65)" }}>
                <button className="btn btn-dark fw-bolder border-0 rounded-4 pe-4  d-inline-flex align-items-center" style={{ color: "rgb(231, 159, 43)", backgroundColor: "rgb(243, 226, 198)" }}>
                    Parent & Student Voices
                </button>
                <h4 className="fw-bold pt-2" style={{ color: "rgb(250, 250, 250)" }}>What Our Community Says</h4>

            </div >

            <div className="pt-4 pb-3" style={{ backgroundColor: "rgb(5, 16, 65)" }}>
                <table className="w-100 h-100 justify-content-center pt-5">
                    <tr className="w-25 h-100">
                        <th>
                            <div className="border border-warning rounded-3 p-3 ms-5 shadow-lg" style={{ backgroundColor: "rgb(5, 16, 65)", width: "350px", height: "220px" }}>

                                <div style={{ color: "rgb(231, 160, 46)" }}> <i class="fa-solid fa-star" ></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i>
                                </div>
                                <p style={{ color: "rgb(252, 251, 249)" }}>"GK Transformed my daughter's confidence. The teachers genuinely care, not just about grades but her whole growth."</p>
                                <div className="d-flex">

                                    <div>
                                        <i className="fa-solid fa-circle gradient-icon" style={{ color: "rgb(231, 160, 46)" }}></i>
                                    </div>
                                    <div>
                                        <h5 style={{ color: "rgb(252, 251, 249)" }}>Ritu Sharma</h5>
                                        <p style={{ color: "rgb(192, 191, 188)" }}>Parent, Grade 6</p>
                                    </div>
                                </div>
                            </div>
                        </th>

                        <th>
                            <div className="border border-warning rounded-3 p-3 shadow-lg" style={{ backgroundColor: "rgb(5, 16, 65)", width: "350px", height: "220px" }}>

                                <div style={{ color: "rgb(231, 160, 46)" }}> <i class="fa-solid fa-star" ></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i>
                                </div>
                                <p style={{ color: "rgb(252, 251, 249)" }}>"The labs and sports facilities are excellent, and the faculty always makes time to guide students individually."</p>
                                <div className="d-flex">

                                    <div>
                                        <i className="fa-solid fa-circle gradient-icon" style={{ color: "rgb(231, 160, 46)" }}></i>
                                    </div>
                                    <div>
                                        <h5 style={{ color: "rgb(252, 251, 249)" }}>Karan Patil</h5>
                                        <p style={{ color: "rgb(192, 191, 188)" }}>Parent, Grade 9</p>
                                    </div>
                                </div>
                            </div>
                        </th>

                        <th>
                            <div className="border border-warning rounded-3 p-3 shadow-lg" style={{ backgroundColor: "rgb(5, 16, 65)", width: "350px", height: "220px" }}>

                                <div style={{ color: "rgb(231, 160, 46)" }}> <i class="fa-solid fa-star" ></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i>
                                </div>
                                <p style={{ color: "rgb(252, 251, 249)" }}>"I love how school feels — challenging but supportive. My teachers pushed me to aim for the top and I got there."</p>
                                <div className="d-flex">

                                    <div>
                                        <i className="fa-solid fa-circle gradient-icon" style={{ color: "rgb(231, 160, 46)" }}></i>
                                    </div>
                                    <div>
                                        <h5 style={{ color: "rgb(252, 251, 249)" }}>Ishaan Verma</h5>
                                        <p style={{ color: "rgb(192, 191, 188)" }}>Student, Grade 12</p>
                                    </div>
                                </div>
                            </div>
                        </th>


                    </tr>
                </table>
            </div>
        </>
    )
};

export default StudentTestimonials;