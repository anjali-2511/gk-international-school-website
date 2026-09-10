function Values() {
    const values = [
        { icon: "fa-solid fa-medal", title: "Integrity", text: "Honesty and accountability in everything we teach and do." },
        { icon: "fa-solid fa-award", title: "Excellence", text: "High standards in academics, conduct, and effort." },
        { icon: "fa-solid fa-heart", title: "Respect", text: "Empathy and dignity for every student, staff member, and family." },
        { icon: "fa-solid fa-lightbulb", title: "Innovation", text: "Curiosity-driven, modern approaches to learning." },
        { icon: "fa-solid fa-people-roof", title: "Community", text: "A strong, supportive partnership between school and home." },
    ];

    return (
        <>
            <div className="text-center p-4 p-md-5" style={{ backgroundColor: "rgb(255, 255, 255)" }}>
                <button
                    className="btn fw-bolder border-0 rounded-4 px-4 py-2 mb-2 d-inline-flex align-items-center"
                    style={{ color: "rgb(58, 121, 88)", backgroundColor: "rgb(228, 240, 230)" }}
                    data-aos="fade-down"
                >
                    What We Stand For
                </button>

                <h3 className="fw-bold" style={{ color: "rgb(20, 30, 60)" }} data-aos="fade-up" data-aos-delay="100">
                    Our Values
                    <hr style={{ borderColor: "rgb(10, 10, 10)", opacity: 0.9, width: "150px", margin: "7px auto" }} />
                </h3>

                <p
                    className="pt-2 mx-auto px-2"
                    style={{ color: "rgb(110, 110, 115)", maxWidth: "480px" }}
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    Five principles that shape our classrooms, our campus culture, and every decision we make.
                </p>

                <div className="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-3 justify-content-center pt-4">
                    {values.map((item, i) => (
                        <div key={i} className="col">
                            <div
                                className="text-center rounded-4 p-4 h-100"
                                style={{ backgroundColor: "rgb(227, 228, 240)" }}
                                data-aos="zoom-in"
                                data-aos-delay={150 + i * 100}
                            >
                                <div
                                    className="d-flex align-items-center justify-content-center rounded-circle mx-auto mb-3"
                                    style={{ width: "48px", height: "48px", backgroundColor: "rgb(20, 30, 60)" }}
                                >
                                    <i className={item.icon} style={{ color: "rgb(231, 159, 43)" }}></i>
                                </div>
                                <h6 className="fw-bold" style={{ color: "rgb(20, 30, 60)" }}>{item.title}</h6>
                                <p className="mb-0" style={{ color: "rgb(110, 110, 115)", fontSize: "0.9rem" }}>{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
};
export default Values;