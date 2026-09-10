function Activities() {
    const activities = [
        { icon: "fa-solid fa-volleyball", title: "Sports" },
        { icon: "fa-solid fa-masks-theater", title: "Cultural Events" },
        { icon: "fa-solid fa-music", title: "Annual Day" },
        { icon: "fa-solid fa-flask", title: "Science Exhibition" },
        { icon: "fa-solid fa-laptop-code", title: "Coding & Technology" },
        { icon: "fa-solid fa-bus", title: "Educational Trips" },
        { icon: "fa-solid fa-music", title: "Music & Dance" },
        { icon: "fa-solid fa-palette", title: "Art & Craft" },
    ];

    return (
        <>
            <div className="text-center p-4 p-md-5" style={{ backgroundColor: "rgba(224, 225, 243, 0.73)" }}>
                <button
                    className="btn fw-bolder border-0 rounded-4 px-4 py-2 mb-2 d-inline-flex align-items-center"
                    style={{ color: "rgb(58, 121, 88)", backgroundColor: "rgb(228, 240, 230)" }}
                    data-aos="fade-down"
                >
                    Beyond the Syllabus
                </button>

                <h3 className="fw-bold" style={{ color: "rgb(20, 30, 60)" }} data-aos="fade-up" data-aos-delay="100">
                    Activities
                    <hr style={{ borderColor: "rgb(10, 10, 10)", opacity: 0.9, width: "130px", margin: "7px auto" }} />
                </h3>

                <p
                    className="pt-2 mx-auto px-2"
                    style={{ color: "rgb(110, 110, 115)", maxWidth: "480px" }}
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    Regular events and clubs that build confidence, teamwork, and lifelong interests.
                </p>

                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-3 justify-content-center pt-4">
                    {activities.map((item, i) => (
                        <div key={i} className="col d-flex justify-content-center">
                            <div
                                className="d-flex align-items-center gap-2 text-start rounded-4 p-3 shadow-lg bg-white w-100"
                                style={{ maxWidth: "280px" }}
                                data-aos="zoom-in"
                                data-aos-delay={150 + (i % 4) * 100}
                            >
                                <div
                                    className="d-flex align-items-center justify-content-center rounded-circle flex-shrink-0"
                                    style={{ width: "70px", height: "70px", backgroundColor: "rgb(20, 30, 60)" }}
                                >
                                    <i className={item.icon} style={{ color: "rgb(231, 159, 43)", fontSize: "1.75rem" }}></i>
                                </div>
                                <h6 className="fw-bold mb-0" style={{ color: "rgb(20, 30, 60)", fontSize: "0.9rem" }}>{item.title}</h6>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
};
export default Activities;