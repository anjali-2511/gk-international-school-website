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
            <div className="text-center p-5" style={{ backgroundColor: "rgb(187, 172, 141)" }}>
                <button className="btn btn-dark fw-bolder border-0 rounded-4 pe-4 mb-2 d-inline-flex align-items-center" style={{ color: "rgb(58, 121, 88)", backgroundColor: "rgb(228, 240, 230)" }}>
                    Beyond the Syllabus
                </button>
                <h3 className="fw-bold" style={{ color: "rgb(20, 30, 60)" }}>Activities</h3>
                <p className="pt-2 mx-auto" style={{ color: "rgb(110, 110, 115)", maxWidth: "480px" }}>
                    Regular events and clubs that build confidence, teamwork, and lifelong interests.
                </p>

                <div className="d-flex flex-wrap gap-4 justify-content-center pt-4">
                    {activities.map((item, i) => (
                        <div
                            key={i}
                            className="d-flex align-items-center gap-2 text-start rounded-4 p-3 shadow-lg bg-white"
                            style={{ width: "280px" }}
                        >
                            <div
                                className="d-flex align-items-center justify-content-center rounded-circle flex-shrink-0"
                                style={{ width: "85px", height: "100px", backgroundColor: "rgb(20, 30, 60)" }}
                            >
                                <i className={item.icon} style={{ color: "rgb(231, 159, 43)", fontSize: "2rem" }}></i>
                            </div>
                            <h6 className="fw-bold mb-0" style={{ color: "rgb(20, 30, 60)", fontSize: "0.9rem" }}>{item.title}</h6>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
};
export default Activities;