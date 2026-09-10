function AboutSchool() {
    return (
        <>
            <div className="p-3 p-md-5" style={{ backgroundColor: "rgb(255, 255, 255)" }}>
                <div className="container">
                    <div className="row g-5 align-items-center justify-content-center">

                        {/* Image / Stat Card Column */}
                        <div
                            className="col-12 col-lg-5 d-flex justify-content-center"
                            data-aos="fade-right"
                        >
                            <div className="position-relative w-100" style={{ maxWidth: "400px" }}>
                                <div
                                    className="rounded-4 w-100"
                                    style={{
                                        aspectRatio: "1 / 1",
                                        padding: "20px",
                                        background: "linear-gradient(135deg, rgba(191, 192, 218, 0.76), rgb(247, 238, 220))"
                                    }}
                                ></div>

                                <div
                                    className="position-absolute rounded-3 p-3 shadow-lg"
                                    style={{
                                        bottom: "20px",
                                        left: "20px",
                                        backgroundColor: "rgb(255, 255, 255)",
                                        minWidth: "140px"
                                    }}
                                    data-aos="fade-up"
                                    data-aos-delay="300"
                                >
                                    <h3 className="fw-bold mb-0" style={{ color: "rgb(12, 180, 119)" }}>1999</h3>
                                    <p className="mb-0" style={{ color: "rgb(140, 140, 140)", fontSize: "0.85rem" }}>Year We Began</p>
                                </div>
                            </div>
                        </div>

                        {/* Text Column */}
                        <div
                            className="col-12 col-lg-6 text-center text-lg-start"
                            data-aos="fade-left"
                        >
                            <button
                                className="btn fw-bolder border-0 rounded-4 px-4 py-2 mb-3 d-inline-flex align-items-center"
                                style={{ color: "rgb(231, 159, 43)", backgroundColor: "rgb(243, 226, 198)" }}
                            >
                                Our Story
                            </button>

                            <h3 className="fw-bold fs-3 fs-md-2" style={{ color: "rgb(20, 30, 60)" }}>
                                Founded on a Simple Belief
                            </h3>

                            <p className="pt-3" style={{ color: "rgb(90, 95, 105)" }}>
                                Goglya Krish International School was founded in 1999 by educators Goglya and Krish, who believed every child deserves an environment where curiosity is encouraged, character is built, and no student is just a number. What began as a single-building campus with a handful of classrooms has grown into a full K-12 institution serving over a thousand families.
                            </p>

                            <p className="pt-1" style={{ color: "rgb(90, 95, 105)" }}>
                                Our educational philosophy blends academic rigour with real-world skill building a teaching approach that stays structured enough to deliver strong results, yet flexible enough to let every learner develop at their own pace. As we look ahead, our focus remains the same as it was on day one: preparing students not just for their next exam, but for the world beyond it.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
};
export default AboutSchool;