function WhyOurSchool() {
    const cards = [
        { icon: "fa-solid fa-seedling", title: "Holistic Development", text: "Academics balanced with sports, arts, and life skills for well-rounded growth." },
        { icon: "fa-solid fa-chalkboard-user", title: "Experienced Mentors", text: "Faculty who know each student personally and guide them individually." },
        { icon: "fa-solid fa-globe", title: "Global Exposure", text: "Exchange programs, international curricula elements, and a global outlook." },
    ];

    return (
        <>
            <div className="text-center p-4 p-md-5" style={{ backgroundColor: "rgb(253, 253, 253)" }}>
                <button
                    className="btn fw-bolder border-0 rounded-4 px-4 py-2 mb-2 d-inline-flex align-items-center"
                    style={{ color: "rgb(231, 159, 43)", backgroundColor: "rgb(243, 226, 198)" }}
                    data-aos="fade-down"
                >
                    Beyond the Classroom
                </button>

                <h3 className="fw-bold" style={{ color: "rgb(20, 30, 60)" }} data-aos="fade-up" data-aos-delay="100">
                    Why Our School?
                    <hr style={{ borderColor: "rgb(10, 10, 10)", opacity: 0.9, width: "240px", maxWidth: "80%", margin: "7px auto" }} />
                </h3>

                <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center pt-4">
                    {cards.map((item, i) => (
                        <div key={i} className="col d-flex justify-content-center">
                            <div
                                className="text-start border rounded-4 p-4 shadow-lg bg-white h-100"
                                style={{ maxWidth: "260px" }}
                                data-aos="fade-up"
                                data-aos-delay={150 + i * 150}
                            >
                                <div
                                    className="d-flex align-items-center justify-content-center rounded-3 mb-3"
                                    style={{ width: "44px", height: "44px", backgroundColor: "rgb(228, 240, 230)" }}
                                >
                                    <i className={item.icon} style={{ color: "rgb(58, 121, 88)" }}></i>
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
export default WhyOurSchool;