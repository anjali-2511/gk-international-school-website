function WhyOurSchool() {
    const cards = [
        { icon: "fa-solid fa-seedling", title: "Holistic Development", text: "Academics balanced with sports, arts, and life skills for well-rounded growth." },
        { icon: "fa-solid fa-chalkboard-user", title: "Experienced Mentors", text: "Faculty who know each student personally and guide them individually." },
        { icon: "fa-solid fa-globe", title: "Global Exposure", text: "Exchange programs, international curricula elements, and a global outlook." },
    ];

    return (
        <>
            <div className="text-center p-5" style={{ backgroundColor: "rgb(247, 238, 220)" }}>
                <button className="btn btn-dark fw-bolder border-0 rounded-4 pe-4 mb-2 d-inline-flex align-items-center" style={{ color: "rgb(231, 159, 43)", backgroundColor: "rgb(243, 226, 198)" }}>
                    Beyond the Classroom
                </button>
                <h3 className="fw-bold" style={{ color: "rgb(20, 30, 60)" }}>Why Our School?</h3>

                <div className="d-flex flex-wrap gap-4 justify-content-center pt-4">
                    {cards.map((item, i) => (
                        <div
                            key={i}
                            className="text-start rounded-4 p-4 shadow-sm bg-white"
                            style={{ width: "230px" }}
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
                    ))}
                </div>
            </div>
        </>

    )
};
export default WhyOurSchool;