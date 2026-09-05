function AcademicsPrograms() {
    const programs = [
        { tag: "FOUNDATIONAL", title: "Primary School", text: "Play-based and activity-led learning that builds strong literacy, numeracy, and curiosity from day one.", grades: "Grades 1-5" },
        { tag: "EXPLORATORY", title: "Middle School", text: "A broader subject base with project work, critical thinking, and the first steps toward independent study.", grades: "Grades 6-8" },
        { tag: "STRUCTURED", title: "Secondary School", text: "Board-aligned, exam-focused teaching with strong subject specialists and regular assessment.", grades: "Grades 9-10" },
        { tag: "SPECIALISED", title: "Higher Secondary", text: "Science, Commerce & Arts streams with career counselling and college-readiness support.", grades: "Grades 11-12" },
    ];
    return (
        <>
            <div className="text-center p-5" style={{ backgroundColor: "rgb(255, 255, 255)" }}>
                <button className="btn btn-dark fw-bolder border-0 rounded-4 pe-4 mb-2 d-inline-flex align-items-center" style={{ color: "rgb(231, 159, 43)", backgroundColor: "rgb(243, 226, 198)" }}>
                    Curriculum
                </button>
                <h3 className="fw-bold" style={{ color: "rgb(20, 30, 60)" }}>Academic Programs</h3>
                <p className="pt-2 mx-auto" style={{ color: "rgb(110, 110, 115)", maxWidth: "520px" }}>
                    Every stage builds on the last, moving students from guided discovery to independent, exam-ready mastery.
                </p>

                <div className="d-flex flex-wrap gap-4 justify-content-center pt-4">
                    {programs.map((item, i) => (
                        <div
                            key={i}
                            className="text-start rounded-4 p-4 shadow-sm bg-white"
                            style={{ width: "250px", borderTop: "3px solid rgb(231, 159, 43)" }}
                        >
                            <p className="fw-bold mb-2" style={{ color: "rgb(231, 159, 43)", fontSize: "0.75rem", letterSpacing: "1px" }}>
                                {item.tag}
                            </p>
                            <h5 className="fw-bold" style={{ color: "rgb(20, 30, 60)" }}>{item.title}</h5>
                            <p style={{ color: "rgb(110, 110, 115)", fontSize: "0.9rem" }}>{item.text}</p>
                            <span
                                className="d-inline-block px-3 py-1 rounded-4 fw-bold"
                                style={{ backgroundColor: "rgb(228, 240, 230)", color: "rgb(58, 121, 88)", fontSize: "0.8rem" }}
                            >{item.grades}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
};
export default AcademicsPrograms;