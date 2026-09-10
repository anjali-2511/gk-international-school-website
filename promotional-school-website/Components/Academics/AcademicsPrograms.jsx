function AcademicsPrograms() {
    const programs = [
        { tag: "FOUNDATIONAL", title: "Primary School", text: "Play-based and activity-led learning that builds strong literacy, numeracy, and curiosity from day one.", grades: "Grades 1-5" },
        { tag: "EXPLORATORY", title: "Middle School", text: "A broader subject base with project work, critical thinking, and the first steps toward independent study.", grades: "Grades 6-8" },
        { tag: "STRUCTURED", title: "Secondary School", text: "Board-aligned, exam-focused teaching with strong subject specialists and regular assessment.", grades: "Grades 9-10" },
        { tag: "SPECIALISED", title: "Higher Secondary", text: "Science, Commerce & Arts streams with career counselling and college-readiness support.", grades: "Grades 11-12" },
    ];

    return (
        <>
            <div className="text-center p-4 p-md-5" style={{ backgroundColor: "rgb(255, 255, 255)" }}>
                <button
                    className="btn fw-bolder border-0 rounded-4 px-4 py-2 mb-2 d-inline-flex align-items-center"
                    style={{ color: "rgb(231, 159, 43)", backgroundColor: "rgb(243, 226, 198)" }}
                    data-aos="fade-down"
                >
                    Curriculum
                </button>

                <h3 className="fw-bold" style={{ color: "rgb(20, 30, 60)" }} data-aos="fade-up" data-aos-delay="100">
                    Academic Programs
                    <hr style={{ borderColor: "rgb(10, 10, 10)", opacity: 0.9, width: "270px", maxWidth: "80%", margin: "7px auto" }} />
                </h3>

                <p
                    className="pt-2 mx-auto px-2"
                    style={{ color: "rgb(110, 110, 115)", maxWidth: "520px" }}
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    Every stage builds on the last, moving students from guided discovery to independent, exam-ready mastery.
                </p>

                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4 justify-content-center pt-4">
                    {programs.map((item, i) => (
                        <div key={i} className="col d-flex justify-content-center">
                            <div
                                className="text-start rounded-4 p-4 shadow-sm bg-white h-100 w-100"
                                style={{ maxWidth: "260px", borderTop: "3px solid rgb(208, 210, 245)" }}
                                data-aos="fade-up"
                                data-aos-delay={150 + i * 150}
                            >
                                <p className="fw-bold mb-2" style={{ color: "rgb(231, 159, 43)", fontSize: "0.75rem", letterSpacing: "1px" }}>
                                    {item.tag}
                                </p>
                                <h5 className="fw-bold" style={{ color: "rgb(20, 30, 60)" }}>{item.title}</h5>
                                <p style={{ color: "rgb(110, 110, 115)", fontSize: "0.9rem" }}>{item.text}</p>
                                <span
                                    className="d-inline-block px-3 py-1 rounded-4 fw-bold"
                                    style={{ backgroundColor: "rgb(228, 240, 230)", color: "rgb(58, 121, 88)", fontSize: "0.8rem" }}
                                >
                                    {item.grades}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
};
export default AcademicsPrograms;