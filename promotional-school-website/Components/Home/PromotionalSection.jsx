function PromotionalSection() {
    return (
        <div className="w-100 p-3" style={{ backgroundColor: "rgb(13, 24, 73)" }}>
            <div className="container py-4">
                <div className="row align-items-center g-4">
 
                    <div className="col-12 col-lg-7">
                        <div className="text-center text-lg-start">
                            <h5 className="fw-bold" style={{ color: "rgb(235, 163, 47)" }}>
                                Seat Fillings Fast!
                            </h5>
                            <h5 style={{ color: "rgb(250, 250, 249)" }}>
                                Admissions Open - Nursery to Grade 12
                            </h5>
                            <p style={{ color: "rgb(199, 197, 194)" }}>
                                Early applicants get priority in transport &amp; sibling admissions. Limited seats per section.
                            </p>

                            <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-3 mt-3">
                                <div className="border border-secondary rounded-3 p-2 text-center" style={{ minWidth: "70px" }}>
                                    <div className="fw-bold fs-5" style={{ color: "rgb(235, 163, 47)" }}>12</div>
                                    <div className="small" style={{ color: "rgba(177, 174, 171, 0.79)" }}>Days</div>
                                </div>
                                <div className="border border-secondary rounded-3 p-2 text-center" style={{ minWidth: "70px" }}>
                                    <div className="fw-bold fs-5" style={{ color: "rgb(235, 163, 47)" }}>08</div>
                                    <div className="small" style={{ color: "rgba(177, 174, 171, 0.79)" }}>Hours</div>
                                </div>
                                <div className="border border-secondary rounded-3 p-2 text-center" style={{ minWidth: "70px" }}>
                                    <div className="fw-bold fs-5" style={{ color: "rgb(235, 163, 47)" }}>42</div>
                                    <div className="small" style={{ color: "rgba(177, 174, 171, 0.79)" }}>Mins</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                    <div className="col-12 col-lg-5 d-flex justify-content-center justify-content-lg-end">
                        <button
                            className="btn btn-dark fw-bold border-0 rounded-5 px-4 py-3 d-inline-flex align-items-center gap-2 text-nowrap"
                            style={{ backgroundColor: "rgb(235, 163, 47)", color: "rgb(13, 24, 73)" }}
                        >
                            Start Application <i className="fa-solid fa-arrow-right"></i>
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
};
export default PromotionalSection;