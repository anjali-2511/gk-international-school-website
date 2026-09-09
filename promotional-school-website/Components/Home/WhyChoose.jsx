function Why() {
    return (
        <>
            <div className="text-center p-3" style={{ backgroundColor: "rgb(191, 192, 218)" }}>
                <button
                    className="btn btn-dark fw-bolder border-0 rounded-4 pe-4 d-inline-flex align-items-center text-nowrap"
                    style={{ color: "rgb(231, 159, 43)", backgroundColor: "rgb(243, 226, 198)" }}
                >
                    Our promises
                </button>
                <h3 className="fw-bold fs-3 fs-md-2">
                    Why Choose Our School?
                    <hr style={{ borderColor: "rgb(10, 10, 10)", opacity: 0.9, width: "340px", maxWidth: "90%", margin: "7px auto" }} />
                </h3>
                <p>A well-rounded environment built on strong teaching, safety, and genuine care for every student's growth.</p>
            </div>

            <div id="carouselExample" className="carousel slide text-center p-3 pb-5" style={{ backgroundColor: "rgb(191, 192, 218)" }}>
                <div className="carousel-inner">

                    <div className="carousel-item active">
                        <div className="d-flex justify-content-center">
                            <div
                                className="border border-dark shadow-lg rounded-5 p-4 w-100"
                                style={{ backgroundColor: "rgb(212, 212, 236)", maxWidth: "500px" }}
                            >
                                <div
                                    className="d-inline-flex align-items-center justify-content-center rounded-3 mb-3"
                                    style={{ width: "44px", height: "44px", backgroundColor: "rgb(197, 230, 203)", color: "rgb(13, 66, 23)" }}
                                >
                                    <i className="fa-solid fa-person"></i>
                                </div>
                                <h3 className="fs-4">Expert Faculty</h3>
                                <p className="mb-0">Experienced, passionate teachers who mentor beyond the textbook and know each student by name.</p>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="d-flex justify-content-center">
                            <div
                                className="border border-primary shadow-lg rounded-5 p-4 w-100"
                                style={{ backgroundColor: "rgb(212, 212, 236)", maxWidth: "500px" }}
                            >
                                <div
                                    className="d-inline-flex align-items-center justify-content-center rounded-3 mb-3"
                                    style={{ width: "44px", height: "44px", backgroundColor: "rgb(219, 236, 222)", color: "rgb(18, 58, 25)" }}
                                >
                                    <i className="fa-solid fa-building"></i>
                                </div>
                                <h3 className="fs-4">Modern Campus</h3>
                                <p className="mb-0">Smart classrooms, science & computer labs, and a library built for curious minds.</p>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="d-flex justify-content-center">
                            <div
                                className="border border-primary shadow-lg rounded-5 p-4 w-100"
                                style={{ backgroundColor: "rgb(212, 212, 236)", maxWidth: "500px" }}
                            >
                                <div
                                    className="d-inline-flex align-items-center justify-content-center rounded-3 mb-3"
                                    style={{ width: "44px", height: "44px", backgroundColor: "rgb(219, 236, 222)", color: "rgb(18, 58, 25)" }}
                                >
                                    <i className="fa-solid fa-shield-heart"></i>
                                </div>
                                <h3 className="fs-4">Safe & Caring</h3>
                                <p className="mb-0">CCTV-monitored campus, trained staff, and a nurturing culture where every child feels they belong.</p>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="d-flex justify-content-center">
                            <div
                                className="border border-primary shadow-lg rounded-5 p-4 w-100"
                                style={{ backgroundColor: "rgb(212, 212, 236)", maxWidth: "500px" }}
                            >
                                <div
                                    className="d-inline-flex align-items-center justify-content-center rounded-3 mb-3"
                                    style={{ width: "44px", height: "44px", backgroundColor: "rgb(219, 236, 222)", color: "rgb(18, 58, 25)" }}
                                >
                                    <i className="fa-solid fa-square-poll-horizontal"></i>
                                </div>
                                <h3 className="fs-4">Proven Results</h3>
                                <p className="mb-0">Consistently strong board exam outcomes backed by structured, personalised academic support.</p>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="d-flex justify-content-center">
                            <div
                                className="border border-primary shadow-lg rounded-5 p-4 w-100"
                                style={{ backgroundColor: "rgb(212, 212, 236)", maxWidth: "500px" }}
                            >
                                <div
                                    className="d-inline-flex align-items-center justify-content-center rounded-3 mb-3"
                                    style={{ width: "44px", height: "44px", backgroundColor: "rgb(219, 236, 222)", color: "rgb(18, 58, 25)" }}
                                >
                                    <i className="fa-solid fa-music"></i>
                                </div>
                                <h3 className="fs-4">Beyond Academics</h3>
                                <p className="mb-0">Sports, music, art, and clubs that help students discover and pursue their passions.</p>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="d-flex justify-content-center">
                            <div
                                className="border border-primary shadow-lg rounded-5 p-4 w-100"
                                style={{ backgroundColor: "rgb(212, 212, 236)", maxWidth: "500px" }}
                            >
                                <div
                                    className="d-inline-flex align-items-center justify-content-center rounded-3 mb-3"
                                    style={{ width: "44px", height: "44px", backgroundColor: "rgb(219, 236, 222)", color: "rgb(18, 58, 25)" }}
                                >
                                    <i className="fa-solid fa-handshake"></i>
                                </div>
                                <h3 className="fs-4">Parent Partnership</h3>
                                <p className="mb-0">Regular updates, open communication, and a school that treats parents as partners in learning.</p>
                            </div>
                        </div>
                    </div>

                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon bg-dark rounded-circle" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon bg-dark rounded-circle" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
};

export default Why;