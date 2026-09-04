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
            <div className="text-center p-5" style={{ backgroundColor: "rgb(255, 255, 255)" }}>
                <button className="btn btn-dark fw-bolder border-0 rounded-4 pe-4 mb-2 d-inline-flex align-items-center" style={{ color: "rgb(58, 121, 88)", backgroundColor: "rgb(228, 240, 230)" }}>
                    What We Stand For
                </button>
                <h3 className="fw-bold" style={{ color: "rgb(20, 30, 60)" }}>Our Values</h3>
                <p className="pt-2 mx-auto" style={{ color: "rgb(110, 110, 115)", maxWidth: "480px" }}>
                    Five principles that shape our classrooms, our campus culture, and every decision we make.
                </p>

                <div className="d-flex flex-wrap gap-3 justify-content-center pt-4">
                    {values.map((item, i) => (
                        <div
                            key={i}
                            className="text-center rounded-4 p-4"
                            style={{ width: "200px", backgroundColor: "rgb(247, 238, 220)" }}
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
                    ))}
                </div>
            </div>

        </>
    )
};
export default Values;