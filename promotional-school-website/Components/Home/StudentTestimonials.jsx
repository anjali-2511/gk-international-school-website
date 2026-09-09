 
function StudentTestimonials() {
    const testimonials = [
        {
            quote: "\"GK Transformed my daughter's confidence. The teachers genuinely care, not just about grades but her whole growth.\"",
            name: "Ritu Sharma",
            role: "Parent, Grade 6",
        },
        {
            quote: "\"The labs and sports facilities are excellent, and the faculty always makes time to guide students individually.\"",
            name: "Karan Patil",
            role: "Parent, Grade 9",
        },
        {
            quote: "\"I love how school feels — challenging but supportive. My teachers pushed me to aim for the top and I got there.\"",
            name: "Ishaan Verma",
            role: "Student, Grade 12",
        },
    ];

    return (
        <>
            <div className="text-center p-4 p-md-5" style={{ backgroundColor: "rgb(5, 16, 65)" }}>
                <button
                    className="btn btn-dark fw-bolder border-0 rounded-4 pe-4 d-inline-flex align-items-center text-nowrap"
                    style={{ color: "rgb(231, 159, 43)", backgroundColor: "rgb(243, 226, 198)" }}
                >
                    Parent & Student Voices
                </button>
                <h4 className="fw-bold pt-2 fs-4 fs-md-3" style={{ color: "rgb(250, 250, 250)" }}>
                    What Our Community Says
                    <hr style={{ borderColor: "rgb(255, 255, 255)", opacity: 0.9, width: "310px", maxWidth: "90%", margin: "7px auto" }} />
                </h4>
            </div>

            <div className="pb-5 px-3 px-md-5 pt-4" style={{ backgroundColor: "rgb(5, 16, 65)" }}>
                <div className="container">
                    <div className="row row-cols-1 row-cols-lg-3 g-4 justify-content-center">
                        {testimonials.map((t) => (
                            <div className="col d-flex justify-content-center" key={t.name}>
                                <div
                                    className="border rounded-3 p-3 shadow-lg w-100 h-100"
                                    style={{ backgroundColor: "rgb(5, 16, 65)", maxWidth: "350px" }}
                                >
                                    <div style={{ color: "rgb(231, 160, 46)" }}>
                                        <i className="fa-solid fa-star"></i>{" "}
                                        <i className="fa-solid fa-star"></i>{" "}
                                        <i className="fa-solid fa-star"></i>{" "}
                                        <i className="fa-solid fa-star"></i>{" "}
                                        <i className="fa-solid fa-star"></i>
                                    </div>
                                    <p style={{ color: "rgb(252, 251, 249)" }}>{t.quote}</p>
                                    <div className="d-flex align-items-center gap-2">
                                        <i className="fa-solid fa-circle gradient-icon" style={{ color: "rgb(231, 160, 46)" }}></i>
                                        <div>
                                            <h5 className="mb-0" style={{ color: "rgb(252, 251, 249)" }}>{t.name}</h5>
                                            <p className="mb-0" style={{ color: "rgb(192, 191, 188)" }}>{t.role}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
};

export default StudentTestimonials;