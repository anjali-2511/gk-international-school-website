function FacilitiesPage() {
    return (
        <>
            <div className="text-center p-4 p-md-5" style={{ backgroundColor: "rgb(208, 210, 245)" }}>
                <p
                    className="fw-bold mb-2 d-inline-block px-3 py-1 rounded-4"
                    style={{ color: "rgb(58, 121, 88)", backgroundColor: "rgb(228, 240, 230)", fontSize: "0.85rem" }}
                    data-aos="fade-down"
                >
                    <i className="fa-solid fa-restroom"></i> Facilities & Activities
                </p>

                <h2
                    className="fw-bold fs-3 fs-md-1"
                    style={{ color: "rgb(20, 30, 60)" }}
                    data-aos="fade-up"
                    data-aos-delay="150"
                >
                    Spaces & Experiences That Shape Every Student's Journey
                </h2>

                <p
                    className="pt-2 mx-auto px-2"
                    style={{ color: "rgb(120, 125, 135)", maxWidth: "520px" }}
                    data-aos="fade-up"
                    data-aos-delay="300"
                >
                    A campus built for hands-on learning, and a calendar full of moments students remember long after they graduate.
                </p>
            </div>
        </>
    )
};

export default FacilitiesPage;