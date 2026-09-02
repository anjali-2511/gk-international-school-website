function Why() {
    return (
        <>
            <div className="text-center p-3" style={{ backgroundColor: "rgb(247, 238, 220)" }}>
                <button className="btn btn-dark fw-bolder border-0 rounded-4 pe-4  d-inline-flex align-items-center" style={{ color: "rgb(231, 159, 43)", backgroundColor: "rgb(243, 226, 198)" }}>
                    Our promises
                </button>
                <h3 className="fw-bold">Why Choose Our School?</h3>
                <p>A well-rounded environment built on strong teaching, safety, and genuine care for every student's growth.</p>
            </div >

            <div id="carouselExample" className="carousel slide text-center p-3" style={{ backgroundColor: "rgb(247, 238, 220)" }}>
                <div className=" carousel-inner">
                    <div className="carousel-item active m-3 ">
                        <div className="d-flex justify-content-center">
                            <div className=" w-25 h-50 border border-primary shadow-lg rounded-5 p-4">
                                <button className="btn btn-dark fw-bold border-0 rounded-3 pe-4 w-25 ps-4  d-inline-flex align-items-center" style={{ backgroundColor: "rgba(171, 224, 181, 0.74)", color: "rgba(9, 88, 8, 0.91)" }}>
                                    <i className="fa-solid fa-person"></i>
                                </button>
                                <h3>Expert Faculty</h3>
                                <p>Experience, passinonate teachers who mentor beyond the textbook and know each student by name.</p>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item m-3">
                        <div className="d-flex justify-content-center">
                            <div className=" w-25 h-50 border border-primary shadow-lg rounded-5 p-4">
                                <button className="btn btn-dark fw-bold border-0 rounded-3 pe-4 w-25 ps-4  d-inline-flex align-items-center" style={{ backgroundColor: "rgba(171, 224, 181, 0.74)", color: "rgba(9, 88, 8, 0.91)" }}>
                                    <i className="fa-solid fa-building"></i>
                                </button>
                                <h3>Modern Campus</h3>
                                <p>Smart classrooms, science & computer labs,and a library built for curious minds.</p>
                            </div>
                        </div>

                    </div>

                    <div className="carousel-item m-3">
                        <div className="d-flex justify-content-center">
                            <div className="w-25 h-50 border border-primary shadow-lg rounded-5 p-4">
                                <button className="btn btn-dark fw-bold border-0 rounded-3 pe-4 w-25 ps-4  d-inline-flex align-items-center" style={{ backgroundColor: "rgba(171, 224, 181, 0.74)", color: "rgba(9, 88, 8, 0.91)" }}>
                                    <i className="fa-solid fa-shield-heart"></i>
                                </button>
                                <h3>Safe & Caring</h3>
                                <p> CCTV-monitoring campus, trained staff, and a nurturing culture where every child feels they belong.</p>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item m-3">
                        <div className="d-flex justify-content-center">
                            <div className="w-25 h-50 border border-primary shadow-lg rounded-5 p-4">
                                <button className="btn btn-dark fw-bold border-0 rounded-3 pe-4 w-25 ps-4  d-inline-flex align-items-center" style={{ backgroundColor: "rgba(171, 224, 181, 0.74)", color: "rgba(9, 88, 8, 0.91)" }}>
                                    <i className="fa-solid fa-square-poll-horizontal"></i>
                                </button>
                                <h3>Proven Results</h3>
                                <p>Consistently strong board exam outcomes backed by structured, personalised academic support.</p>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item m-3">
                        <div className="d-flex justify-content-center">
                            <div className="w-25 h-50 border border-primary shadow-lg rounded-5 p-4">
                                <button className="btn btn-dark fw-bold border-0 rounded-3 pe-4 w-25 ps-4  d-inline-flex align-items-center" style={{ backgroundColor: "rgba(171, 224, 181, 0.74)", color: "rgba(9, 88, 8, 0.91)" }}>
                                    <i class="fa-solid fa-music"></i>
                                </button>
                                <h3>Beyond Academics</h3>
                                <p>Sports, music, art, and clubs that help students discover and pursue their passions</p>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item m-3">
                        <div className="d-flex justify-content-center">
                            <div className="w-25 h-50 border border-primary shadow-lg rounded-5 p-4">
                                <button className="btn btn-dark fw-bold border-0 rounded-3 pe-4 w-25 ps-4  d-inline-flex align-items-center" style={{ backgroundColor: "rgba(171, 224, 181, 0.74)", color: "rgba(9, 88, 8, 0.91)" }}>
                                    <i class="fa-solid fa-handshake"></i>
                                </button>
                                <h3>Parent Partnership</h3>
                                <p>Regular updates, open communication, and a school that treats parent as partners in learning</p>
                            </div>
                        </div>
                    </div>
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div >
        </>
    )
};

export default Why;