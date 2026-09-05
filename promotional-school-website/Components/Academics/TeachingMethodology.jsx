function TeachingMethodology() {
    const items = [
        { icon: "fa-solid fa-desktop", title: "Smart Classroom Learning", text: "Interactive digital boards and multimedia content bring every lesson to life." },
        { icon: "fa-solid fa-chalkboard-user", title: "Experienced Faculty", text: "Subject specialists trained in modern, student-centred teaching methods." },
        { icon: "fa-solid fa-file-pen", title: "Examination & Assessment", text: "Regular formative assessments alongside board-pattern exams to track real progress." },
        { icon: "fa-solid fa-people-group", title: "Co-curricular Learning", text: "Debate, robotics, and creative clubs that build skills beyond the syllabus." },
    ];

    return (
        <>
            <div className="text-center p-5" style={{ backgroundColor: "rgb(250, 244, 231)" }}>
                <button className="btn btn-dark fw-bolder border-0 rounded-4 pe-4 mb-2 d-inline-flex align-items-center" style={{ color: "rgb(58, 121, 88)", backgroundColor: "rgb(228, 240, 230)" }}>
                    How We Teach
                </button>
                <h3 className="fw-bold" style={{ color: "rgb(20, 30, 60)" }}>Teaching Methodology</h3>

                <div id="teachingCarousel" className="carousel slide pt-4 " data-bs-ride="carousel" data-bs-interval="3000">
                    <div className="carousel-inner d-inline-flex align-items-center">
                        {items.map((item, i) => (
                            <div key={i} className={`carousel-item ${i === 0 ? "active" : ""}`}>
                                <div className="d-flex justify-content-center">
                                    <div
                                        className="text-start rounded-4 p-4 shadow-sm bg-white"
                                        style={{ width: "350px", minHeight: "180px" }}
                                    >
                                        <div
                                            className="d-flex align-items-center justify-content-center rounded-3 mb-3 mx-auto"
                                            style={{ width: "70px", height: "44px", backgroundColor: "rgb(228, 240, 230)" }}
                                        >
                                            <i className={item.icon} style={{ color: "rgb(58, 121, 88)" }}></i>
                                        </div >
                                        <h5 className="fw-bold text-center" style={{ color: "rgb(20, 30, 60)" }}>{item.title}</h5>
                                        <p className="mb-0 text-center" style={{ color: "rgb(110, 110, 115)", fontSize: "0.9rem" }}>{item.text}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button className="carousel-control-prev" type="button" data-bs-target="#teachingCarousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#teachingCarousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

        </>
    )
};
export default TeachingMethodology;